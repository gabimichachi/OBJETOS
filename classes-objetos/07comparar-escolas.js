class Senai {
    constructor(codigo, cidade, anoConstrucao, qtdeCursos) {
        this.codigo = codigo;
        this.cidade = cidade;
        this.anoConstrucao = anoConstrucao;
        this.qtdeCursos = qtdeCursos;

        // js moderno: calculando a idade com base no ano atual do sistema
        this.idade = new Date().getFullYear() - anoConstrucao;

    }

    dadosEscola() {
        console.log(`\n== RELATÓRIO DE CADASTRO: ${this.cidade.toUpperCase()} ===`);
        console.log(`- código: ${this.codigo}`);
        console.log(`- fundação: ${this.anoConstrucao} (${this.idade} anos de história)`);
        console.log(`- capacidade: ${this.qtdeCursos} cursos ativos.`);
        console.log(`=======================================================\n`);
        
    }
}

const compararEscolas = (e1, e2) => {
    console.log(`> comparando oferta de cursos: ${e1.cidade} vs ${e2.cidade}...`);

    if (e1.qtdeCursos > e2.qtdeCursos) {
        console.log(`resultado: o SENAI ${e1.cidade} possui mais cursos.`);
    } else if (e2.qtdeCursos > e1.qtdeCursos) {
        console.log(`resultado: o SENAI ${e2.cidade} possui mais cursos.`);
    }else {
        console.log(`resultado: ambas as unidades possuem a mesma quantidade de cursos.`);
    }
    console.log(`status: ${e1.cidade} (${e1.qtdeCursos}) | ${e2.cidade} (${e2.qtdeCursos})\n`);
}