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
const quadrado3 ={
    lados: 4,
    area(lado) {
        return lado * lado
    },
    
    perimetro(lado) {
        return this.lados * lado
    }
};

quadrado.cor = ' #FF69B4';