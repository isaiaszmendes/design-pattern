class MeusLivros {
  
  constructor() {
    this.livros = [];
  }

  getLivros() {
    return this.livros;
  }

  setLivros(livros) {
    if(typeof livros === 'string') {
      return this.livros.push(livros);
    }
    this.livros.push(...livros);
  }

}

module.exports = new MeusLivros();
// https://stackoverflow.com/questions/13179109/singleton-pattern-in-nodejs-is-it-needed
// Como os modulos do node já não cacheados na primeira vez que é importado, os demais modulos usaram o cache não sendo necessário verificar se o modulo ja foi instanciado