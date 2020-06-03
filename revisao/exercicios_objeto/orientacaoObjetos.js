class Signos {
    constructor(nome, elemento, regente){
        this.nome = nome;
        this.elemento = elemento;
        this.regente = regente;
    }
}

const pessoa1 = new Signos('Capricórnio', 'Terra', 'Saturno')

const pessoa2 = new Signos('Touro', 'Terra', 'Vênus')

console.log(pessoa2, pessoa1)