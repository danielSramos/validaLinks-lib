const pegaArquivo = require('../index');
const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]
const caminhoCLink = `C:\\Users\\Daniel\\JS\\NODEJS\\forum-artigos-alura\\test\\arquivos\\texto1.md`
const caminhoSLink = `C:\\Users\\Daniel\\JS\\NODEJS\\forum-artigos-alura\\test\\arquivos\\texto_sem_link.md`
const caminhoIncorreto = `C:\\Users\\Daniel\\JS\\NODEJS\\forum-artigos-alura\\test\\arquivos\\`
describe('pegaArquivo::', () => {
    it('deve ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function');
    })
    it('deve retornar array com resultados', async () => {
        const result = await pegaArquivo(caminhoCLink);
        expect(result).toEqual(arrayResult);
    })
    it('deve retornar mensagem "Não há links no arquivo"', async () => {
        const result = await pegaArquivo(caminhoSLink);
        expect(result).toBe('Não há links no arquivo');
    })
    it('deve retonar mensagem "não foi possivel ler o arquivo"', async () => {
        await expect(pegaArquivo(caminhoIncorreto)).rejects.toThrow(/não foi possivel ler o arquivo/)
    })
})