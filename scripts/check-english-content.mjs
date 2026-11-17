import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

// Exercise the same pure functions used in the browser, without exporting the UI.
const source = readFileSync(new URL('../app.js', import.meta.url), 'utf8');
function functionSource(name) {
  const start = source.indexOf(`  function ${name}(`);
  assert(start >= 0, `Missing function ${name}`);
  const end = source.indexOf('\n  function ', start + 1);
  return source.slice(start, end < 0 ? undefined : end);
}
const context = vm.createContext({});
vm.runInContext(['misturar', 'sortearQuestoes', 'normalizar', 'normalizarRespostaIngles', 'validarResposta', 'aceitaComplemento', 'diagnosticarResposta']
  .map(functionSource).join('\n'), context);
vm.runInContext(readFileSync(new URL('../data.js', import.meta.url), 'utf8'), context);
const english = vm.runInContext('DISCIPLINAS.find(d => d.id === "ingles")', context);
const exam = english.capitulos.find(c => c.id === 'sim_ingles');
assert.equal(exam.quiz.length, english.capitulos.filter(c => !c.exam).reduce((n, c) => n + c.quiz.length, 8));

for (const cap of english.capitulos.filter(c => !c.exam)) {
  const original = JSON.parse(readFileSync(new URL(`../content/${cap.id}.json`, import.meta.url), 'utf8'));
  assert.equal(JSON.stringify(cap), JSON.stringify(original), `${cap.id}: generated bank is stale`);
}
for (const cap of english.capitulos) {
  for (const q of cap.quiz) {
    assert(['reading', 'listening', 'use'].includes(q.skill));
    if (q.skill === 'reading') {
      assert(q.context?.length > 30);
      assert.equal(q.contextLang, 'en');
    }
    if (q.skill === 'listening') assert(q.listen?.length > 0);
    if (q.type === 'text') {
      assert.equal(q.answerMode, 'english-exact');
      for (const accepted of q.answers) assert(context.validarResposta(accepted, q.answers, q.answerMode));
    }
  }
}
const chips = english.capitulos.find(c => c.id === 'ing07').quiz[7];
assert.equal(chips.options[chips.answer], 'too many');
assert(exam.quiz.some(q => q.q === chips.q && q.options[q.answer] === 'too many'));

for (let attempt = 0; attempt < 1000; attempt++) {
  const indices = context.sortearQuestoes(exam);
  assert.equal(indices.length, 15);
  assert.equal(new Set(indices).size, 15);
  const questions = Array.from(indices, i => exam.quiz[i]);
  for (const [skill, expected] of Object.entries(exam.exam.skills)) {
    assert.equal(questions.filter(q => q.skill === skill).length, expected);
  }
  for (const focus of exam.exam.requiredFocus) assert(questions.some(q => q.focus === focus));
}
const accepts = (value, expected) => context.validarResposta(value, [expected], 'english-exact');
assert(accepts(" NO, SHE DIDN’T EAT OUT! ", "No, she didn't eat out."));
assert(accepts('No, she did not eat out.', "No, she didn't eat out."));
assert(accepts('yes, i played games', 'Yes, I played games.'));
assert(!accepts("No, she didn't ate out.", "No, she didn't eat out."));
assert(!accepts('She ate out.', "No, she didn't eat out."));
assert(!accepts('not played', 'played'));
assert(!accepts("I didn't go swimming", 'go swimming'));
assert(!accepts('swimming', 'go swimming'));
assert(!accepts('went swimming', 'go swimming'));
assert(accepts('No, she didnt eat out', "No, she didn't eat out."));
// Wrong-but-close answers are diagnosed, never accepted.
const diag = (value, expected, mode = 'english-exact') => context.diagnosticarResposta(value, [expected], mode);
assert.equal(diag('Danced', 'Yes, she danced at the party.')?.tipo, 'parcial');
assert.equal(diag('Danced', 'Yes, she danced at the party.').inicio, 'Yes, she');
assert.equal(diag('Played', 'Yes, I played games.')?.tipo, 'parcial');
assert.equal(diag('played games', 'Yes, I played games.')?.tipo, 'parcial');
assert(!accepts('Danced', 'Yes, she danced at the party.'));
assert.equal(diag('Yes, she dance at the party', 'Yes, she danced at the party.')?.tipo, 'uma-palavra');
assert.equal(diag('Yes, she dance at the party', 'Yes, she danced at the party.').palavra, 'dance');
assert.equal(diag('dance', 'Yes, she danced at the party.'), null);
assert.equal(diag('She ate out.', "No, she didn't eat out."), null);
assert.equal(diag('70', '70 000', undefined), null);
// When the prompt gives the start ("Comece com “Yes, she…”"), completing only what is missing is right.
const bank = english.capitulos.filter(c => !c.exam).flatMap(c => c.quiz);
const byAnswer = text => bank.find(q => q.answers?.[0] === text);
const completes = (value, answer) => { const q = byAnswer(answer); assert(q, answer); return context.aceitaComplemento(value, q.q, q.answers, q.answerMode); };
for (const ok of ['Danced', 'danced at the party', 'Yes, she danced', 'Yes, she danced at the party']) assert(completes(ok, 'Yes, she danced at the party.'), ok);
for (const ok of ['Played', 'played games']) assert(completes(ok, 'Yes, I played games.'), ok);
for (const ok of ['went', 'went to the festival']) assert(completes(ok, 'Yes, he went to the festival.'), ok);
for (const ok of ["didn't", 'didnt go hiking', 'did not go hiking']) assert(completes(ok, "No, I didn't go hiking."), ok);
for (const bad of ['dance', 'Dances', 'at the party', 'Yes, she', 'Yes, she dance', 'danced the party']) assert(!completes(bad, 'Yes, she danced at the party.'), bad);
for (const bad of ['did', 'not', "didn't went hiking", 'go hiking', "didn't hiking"]) assert(!completes(bad, "No, I didn't go hiking."), bad);
for (const bad of ['ate', "didn't ate out", 'eat out']) assert(!completes(bad, "No, she didn't eat out."), bad);
// Questions without a given start keep the full answer.
assert(!context.aceitaComplemento("didn't", byAnswer("No, she didn't.").q, ["No, she didn't."], 'english-exact'));
// Existing non-English acceptance behavior remains available.
assert(context.validarResposta('o resultado é quinze', ['quinze']));
const history = vm.runInContext('DISCIPLINAS.find(d => d.id === "historia").capitulos.find(c => c.exam)', context);
assert.equal(context.sortearQuestoes(history).length, history.exam.size);
console.log('English checks passed: source/generated consistency, chips key, reading/audio contexts, strict answers, 1,000 balanced exams and non-English compatibility.');
