// método é uma função dentro de um objeto.
let cidade = 'são paulo'
const senai = {
    codigo: 603,
    cidade: 'araraquara',


    descreverEscola: () => {
        // a palavra reservada this refere ao objeto no contexto atual. //
        // é usado para acessar propriedades e métodos do objeto corrente. //
        console.log(`o código ${this.codigo} pertence a escola SENAI de ${this.cidade}.`)

    }

};

senai.codigo = 608;
senai.cidade = 'matão'
senai.descreverEscola()