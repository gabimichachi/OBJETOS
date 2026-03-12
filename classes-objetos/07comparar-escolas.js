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

