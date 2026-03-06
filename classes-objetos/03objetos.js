// declaração de um objeto. chave: valor;

// 01 - criar objeto quadrado
// 02 - criar funções (métodos área e perimetro)
// 03 - entender o contexto this
// 04 - escrever de forma abreviada 
// 05 - acessar os dados do objeto

// let quadrado = {};
// let quadrado2 = [];
// let quadrado3 = [{}];

let quadrado = {
    lados: 4,
    area: function(lado){
        return lado * lado
    },
    perimetro: function(lado){

        return this.lados*4
    }
};


const quadrado2 = {
    lados: 4,
    area(lado) {
        return lado* lado
    },

    perimetro(lado) {
        return this.lados * lado
    },
};

// forma reduzida
const lados = 10;

const quadrado3 = {
    lados: 4,
    area(lado) {
        return lado * lado
    },
    
    perimetro(lado) {
        return this.lados * lado
    }
};

quadrado.cor = ' #FF69B4';

console.log(quadrado2.perimetro(5))


// 01- criar um objeto senai
// 02- acessar dados da chave
// 03- incrementar dados/alterar o objeto
// 04- excluir um valor do objeto

const senai = {
    codigo: 603,
    cidade: 'araraquara'
};
console.log('---------------------------')


senai.telefone = 16997342867
senai.rua = 'hugo negrini'
senai.telefone = 13998765432
delete senai.rua;

senai.endereco = {rua: 'hugo negrini', bairro: 'quintandinha', numero: '67'};
senai.alunos = ['SESI', 'EEBA', 'comunidade'];

senai.endereco.numero = 62;
senai.alunos[2] = 'tecnico';
console.log(senai);