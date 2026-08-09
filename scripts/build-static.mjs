import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = resolve(root, "dist");
const client = resolve(dist, "client");

await rm(dist, { recursive: true, force: true });
await mkdir(resolve(dist, "server"), { recursive: true });
await mkdir(client, { recursive: true });

for (const file of [
  "index.html",
  "style.css",
  "app.js",
  "data.js",
  "experiences.js",
  "pedagogy.js",
  "sw.js",
  "manifest.webmanifest",
]) {
  await cp(resolve(root, file), resolve(client, file));
}

await mkdir(resolve(client, "assets"), { recursive: true });
for (const image of ["camadas-esferas-terra.webp", "camadas-interior-terra.webp"]) {
  await cp(resolve(root, "assets", image), resolve(client, "assets", image));
}
const worker = await readFile(resolve(root, "hosting-worker.js"), "utf8");
await writeFile(resolve(dist, "server", "index.js"), worker);

console.log("Build estático pronto em dist/.");
