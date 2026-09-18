import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const read = id => JSON.parse(fs.readFileSync(path.join(root, 'content', id + '.json'), 'utf8'));

const specs = [
  {
    target: 'rev_lp3b', sources: ['lp20', 'lp21'], module: 'PROVA',
    title: 'Revisão para a prova', subtitle: 'Anúncios e classificados · Adjetivos · HQ · Pronomes pessoais',
    image: 'assets/revisao-3b-portugues.webp', imageAlt: 'Crianças revisando anúncios, histórias em quadrinhos, adjetivos e pronomes.',
    video: 'assets/videos/prova-portugues-modulos20-21.mp4'
  },
  {
    target: 'rev_mat3b', sources: ['mat11'], module: 'PROVA',
    title: 'Revisão para a prova', subtitle: 'Multiplicação até 9 · Divisão exata e não exata · Partes de quantidades',
    image: 'assets/revisao-3b-matematica.webp', imageAlt: 'Crianças praticando multiplicação, divisão e partes de quantidades.'
  },
  {
    target: 'rev_cie3b', sources: ['cie10'], module: 'PROVA',
    title: 'Revisão para a prova', subtitle: 'Corpos celestes · Sol · Movimentos da Terra · Céu diurno',
    image: 'assets/revisao-3b-ciencias.webp', imageAlt: 'Crianças observando o Sol, a Terra e outros corpos celestes.',
    video: 'assets/videos/prova-ciencias-ceu-diurno.mp4'
  },
  {
    target: 'rev_geo3b', sources: ['geo10'], module: 'PROVA',
    title: 'Revisão para a prova', subtitle: 'População · Campo e cidade · Migrações · Mistura de culturas',
    image: 'assets/revisao-3b-geografia.webp', imageAlt: 'Crianças estudando população rural, população urbana e migrações.',
    video: 'assets/videos/prova-geografia-populacao-municipio.mp4'
  },
  {
    target: 'rev_hist3b', sources: ['hist10', 'hist11'], module: 'PROVA',
    title: 'Revisão para a prova', subtitle: 'Serviços · Prefeitura · Câmara · Moradia · Transporte · Lixo',
    image: 'assets/revisao-3b-historia.webp', imageAlt: 'Crianças revisando serviços, administração municipal e problemas das grandes cidades.',
    video: 'assets/videos/prova-historia-modulos10-11.mp4'
  }
];

for (const spec of specs) {
  const sources = spec.sources.map(read);
  const review = {
    id: spec.target,
    module: spec.module,
    title: spec.title,
    subtitle: spec.subtitle,
    reviewImage: spec.image,
    reviewImageAlt: spec.imageAlt,
    ...(spec.video ? { video: spec.video } : {}),
    theory: sources.flatMap(source => source.theory),
    games: sources.flatMap(source => source.games.slice(0, 1)),
    quiz: sources.flatMap(source => source.quiz.slice(0, spec.sources.length > 1 ? 6 : 12))
  };
  fs.writeFileSync(path.join(root, 'content', spec.target + '.json'), JSON.stringify(review, null, 2) + '\n');
}
