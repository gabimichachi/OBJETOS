const elBoasVindas = document.createElement('div');
const elRelogio = document.createElement('div');
const elDataCompleta = document.createElement('div');

function atualizarPainel() {
    const agora = new Date();
    const horaAtual = agora.getHours();
    let saudacao = ''

    if (horaAtual < 12) {
        saudacao = 'bom dia';
    } else if (horaAtual < 18)
        {saudacao = 'boa tarde';
    } else {
        saudacao = 'boa noite';
    }

    recepcao(saudacao)
}

function diaSemana(){
    const agora = new Date();
    const opcoes = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dataFormatada = agora.toLocaleDateString('pt-BR', opcoes);
    elDataCompleta.textContent = dataFormatada;
}
diaSemana()

function recepcao(saudacao){
    const agora = new Date();
    elBoasVindas.textContent = `olá, ${saudacao}!`;
    elRelogio.textContent = agora.toLocaleTimeString('pt-BR');
}

// adicionando o dom
document.body.append(elBoasVindas, elRelogio, elDataCompleta);

setInterval(atualizarPainel, 1000)
atualizarPainel() 


