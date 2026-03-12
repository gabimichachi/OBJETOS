// classe é uma definição. como um objeto deve ser
class Senai {
    constructor(codigo, cidade) {
        this.codigo = codigo;
        this.cidade = cidade;
    }

    // método para exibir as informações formatadas
    dadosEscola() {
        console.log(`unidade: ${this.cidade} | código interno: ${this.codigo}`);
    }

}

// a criação agora é feota em apenas uma linha, passando os valores como argumento para o construtor.

const escolaA = new Senai(603, 'araraquara');
const escolaB = new Senai(145, 'são carlos');
const escolaC = new Senai(545, 'américo brasiliense');

escolaA.dadosEscola();
escolaB.dadosEscola();
escolaC.dadosEscola();