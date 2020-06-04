// class Colaboradores{
//     constructor(nome, departamento, funcao){
//         this.nome = nome;
//         this.departamento = departamento;
//         this.funcao = funcao;
//     }
// }

// const colaborador1 = new Colaboradores('Jenifer', 'Engenharia', 'Engenheira de Dados')

// console.log(colaborador1)



// ------------ Exercicio 5 ----------------

// class Usuario {
//   constructor(nome, email, confirmacaoEmail) {
//     this.nome = nome;
//     this.email = email;
//     this.confirmacaoEmail = confirmacaoEmail;
//   }

//   confirmarEmail() {
//     const confirmacao =
//       this.email.toLowerCase() === this.confirmacaoEmail.toLowerCase()
//         ? `E-mail confirmado`
//         : `E-mail não confere`;
//     return confirmacao;
//   }
// }

// const usuario1 = new Usuario(
//   "Sara",
//   "sarafogo.ss@gmail.com",
//   "sarafogo.ss@gmail.com"
// );

// console.log(usuario1);
// console.log(usuario1.confirmarEmail());


// ---------- Exercicio 6 -------------


class Usuario {
  constructor(nome, sobrenome, email, confirmacaoEmail) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
    this.confirmacaoEmail = confirmacaoEmail;
  }
  saudacao() {
      const saudacaoNome = this.nome;
      const saudacaoSobrenome = this.sobrenome;
      return `Olá, ${saudacaoNome} ${saudacaoSobrenome}. seja bem vinda a plataforma de estudos da Reprograma! `
    }
}

const usuario1 = new Usuario(
      "Sara Fogo",
      "Simão",
      "sarafogo.ss@gmail.com",
      "sarafogo.ss@gmail.com"
    );


console.log(usuario1.saudacao());
