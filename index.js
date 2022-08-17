const chalk = require('chalk');
const fs = require('fs');

function extraLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const resultados = [];
    let temp;

    while ((temp = regex.exec(texto)) !== null) {
        resultados.push({ [temp[1]]: temp[2] })
    }
    return resultados.length === 0 ? 'Não há links no arquivo' : resultados;
}

function trataErro(erro) {
    throw new Error(erro.code, 'não foi possivel ler o arquivo');
}

//utilizando promisses no JS com o método async/await
async function pegaArquivo(caminhoDoArquivo) {
    const enconding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, enconding);
        return extraLinks(texto);
    } catch (erro) {
        trataErro(erro);
    }
}

module.exports = pegaArquivo;