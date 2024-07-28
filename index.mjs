import { create, showFile, readFiles, deleteRead } from "./arquivos.mjs";

async function start() {
  await create("Teste", "Testando, Testando");
  await readFiles("Teste");
  console.log("-----------------------");
  await showFile("Teste", "Ok, very good. Modificado com sucesso!");
  await readFiles("Teste");
  console.log("-----------------------");
  await deleteRead("Teste");
}

start();
