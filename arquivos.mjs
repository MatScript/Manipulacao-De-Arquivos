import fs from "node:fs";

export function create(arquivo, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(arquivo, content, (error) => {
      if (error) {
        reject("Erro ao escrever o arquivo: ", error.message);
      } else {
        resolve();
      }

      console.log("Arquivo criado com sucesso de forma assíncrona.");
    });
  });
}

export function showFile(filename, newContent) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, newContent, (error) => {
      if (error) {
        reject(`Erro ao modificar arquivo ${error.message}`);
      } else {
        resolve();
      }
    });
  });
}

export function readFiles(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, "utf-8", (error, text) => {
      if (error) {
        reject("Erro ao ler o arquivo: ", error.message);
      } else {
        console.log(text);
        resolve();
      }
    });
  });
}
export function deleteRead(read) {
  return new Promise((resolve, reject) => {
    fs.unlink(read, (error) => {
      if (error) {
        console.log("Erro ao excluir o arquivo: ", error.message);
        resolve();
      } else {
        console.log("Arquivo excluido com sucesso!");
        resolve();
      }
    });
  });
}
