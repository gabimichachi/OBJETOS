/* exercícios:
  1. no molde da classe 'Senai', adicione o atributo 'statusFuncionamento' 
     que deve iniciar sempre como 'false' (escola fechada por padrão).
  2. crie o método 'abrirEscola()' para alterar o status para 'true' e
     exibir uma mensagem de boas-vindas.
  3. crie o método 'fecharEscola()' para alterar o status para 'false' e
     avisar que as atividades encerraram.
  4. teste as funcionalidades nas instâncias criadas.
*/

class Senai {
    constructor(codigo, cidade, anoConstrucao, qtdeCursos, statusFuncionamento) {
        this.codigo = codigo;
        this.cidade = cidade;
        this.anoConstrucao = anoConstrucao;
        this.qtdeCursos = qtdeCursos;
        this.statusFuncionamento = statusFuncionamento

    }
}

dadosEscola() {
    console.log(`\n=== RELATÓRIO DE CADASTRO: ${this.cidade.toUpperCase()} ===`);
    console.log(`- Código: ${this.codigo}`);
    console.log(`- Fundação: ${this.anoConstrucao} (${this.idade} anos de história`);
    console.log(`- Capacidade: ${this.qtdeCursos} cursos ativos.`);
    console.log(``====================================================\n);
}

abrirEscola = () => {
    this.statusFuncionamento = true
    console.log(``\n === UNIDADE: ${this.cidade} ===)
    console.log(``Status Atual: ABERTO)
    console.log(``Idade: ${this.idade} | Cursos: ${this.qtdeCursos})
    console.log(`` O SENAI ${this.cidade} agora está ABERTO. Bem-vindos!);
}

fecharEscola = () => {
    this.statusFuncionamento = false
    console.log(``\n === UNIDADE: ${this.cidade} ===)
    console.log(``Status Atual: FECHADO)
    console.log(``Idade: ${this.idade} | Cursos: ${this.qtdeCursos})
    console.log(``O SENAI ${this.cidade} está FECHADO. Até amanhã!);
}

const escolaA = new Senai (603, 'Araraquara', 1998, 60, false);
const escolaB = new Senai (603, 'São Carlos', 2000, 120, false);

// execução
    
compararEscolas(escolaA, escolaB);
escolaA.fecharEscola()