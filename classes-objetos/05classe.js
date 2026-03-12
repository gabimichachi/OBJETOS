// classe é uma definição. como um objeto deve ser.
class Senai {
    codigo;
    cidade;
    // dentro de uma classe não precisa da palavra function

    descreverEscola() {
        console.log(`o código ${this.codigo} pertence a Escola SENAI de ${this.cidade}.`)
    }
}

// instância é uma ocorrência. criação de um novo objeto, 
// criando uma instância (uma nova escola)

const senaiArqa = new Senai();
// incrementando o objeto
senaiArqa.codigo = 603;
senaiArqa.cidade = 'araraquara';

const senaiMat = new Senai();
senaiMat.codigo = 145;
senaiMat.cidade = 'matão';
senaiMat.rua = 'rua das flores'

// exibindo os dados no console
senaiArqa.descreverEscola();
senaiMat.descreverEscola();

console.log(senaiArqa);