// class Cliente {
//     constructor(nome, email, cpf){
//         this.nome = nome;
//         this.email = email;
//         this.cpf = cpf;
//     }
// }

// const cliente1 = new Cliente('Jessica', 'jessica@email.com', 'xxx.xxx.xxx-xx')

//

class Cliente {
  constructor(nome, cpf, valor, modelo, ano, cor, loja, atendente) {
    this.nome = nome;
    this.cpf = cpf;
    this.dataCompra = new Date();
    this.valor = valor;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.loja = loja;
    this.atendente = atendente;
  }

  descontar() {
    const desconto =
      this.valor > 1500 ? `terá desconto de 10%` : `não terá desconto`;
    return desconto;
  }
  verificarCor() {
    const corCelular = this.cor.toLowerCase() == "roxo" ? `Disponível` : `Indisponível`;
    return corCelular;
  }
}

// CLIENTE 1
const cliente1 = new Cliente(
  "Dora Barreto",
  "223.001.221-29",
  2000,
  "XXX-12",
  2020,
  "Amarelo",
  "RJ-BR",
  "Joana Maria"
);

console.log(cliente1);
console.log("Essa cor se encontra", cliente1.verificarCor());

// CLIENTE 2:
const cliente2 = new Cliente(
  "Marcela Janino Silva",
  "321.101.231-29",
  1300,
  "XXM-y",
  2019,
  "ROXO",
  "SP-BR",
  "Drielly Gomes Almeida"
);

console.log(cliente2);

console.log("Essa cor se encontra", cliente2.verificarCor());

// CLIENTE 3:

const cliente3 = new Cliente(
  "Raquel Borges Figueredo",
  "910.311.425-01",
  4000,
  "MDM-PRO",
  2020,
  "AZUL",
  "MG-BR",
  "Fran Carneiro de Pinha"
);

console.log(cliente3);
console.log("Essa cor se encontra", cliente3.verificarCor());
