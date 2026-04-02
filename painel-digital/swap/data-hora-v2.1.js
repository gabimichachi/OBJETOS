// 1. objeto de estilos (dicionário css)
// aqui você criou um objeto chamado "temas"
// ele guarda vários estilos separados por categorias
const temas = {

    // estilo do corpo da página (body)
    corpo: {
        backgroundColor: '#121212', // fundo escuro (quase preto)
        color: '#00ff99', // cor do texto (verde neon)
        fontFamily: "'Courier New', Courier, monospace", // fonte 
        flexDirection: 'column', // organiza em coluna
        alignItems: 'center', // centraliza na horizontal
        justifyContent: 'center', // centraliza na vertical
        height: '100vh', // ocupa a tela inteira
        margin: '0', // remove margem padrão
        textShadow: '0 0 10px rgba(0, 255, 153, 0.5)' // efeito de brilho no texto
    },

    // estilo para mensagem de boas-vindas
    boasVindas: {
        fontSize: '24px', // tamanho do texto
        marginBottom: '10px', // espaço embaixo
        textTransform: 'uppercase', // deixa tudo em MAIÚSCULO
        letterSpacing: '2px' // espaçamento entre letras
    },

    // estilo do relógio (hora)
    relogio: {
        fontSize: '100px', // bem grande (destaque principal)
        fontWeight: 'bold' // texto em negrito
    },

    // estilo das informações extras (data, dia da semana)
    dataInfo: {
        fontSize: '20px', // menor que o relógio
        marginTop: '10px', // espaço acima
        color: '#ffffff', // branco
        opacity: '0.8' // levemente transparente
    }
};

// criação dos elementos
const elBoasVindas = document.createElement('div');
const elRelogio = document.createElement('div');
const elDataCompleta = document.createElement('div');

// função para aplicar estilos do objeto
function aplicarEstilos(elemento, estilo) {
    Object.assign(elemento.style, estilo);
}

//logica de atualização
function atualizarPainel() {

    const agora = new Date();

    //saudação baseada na hora
    const horaAtual = agora.getHours();
    let saudacao = "boa noite";
    if (horaAtual < 12) saudacao = "bom dia";
    else if (horaAtual < 18) saudacao = "boa tarde";

    //dia da semana por extenso
    const opcoes = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    const dataFormatada = agora.toLocaleDateString('pt-BR', opcoes);

    //inserindo os textos
    elBoasVindas.textContent = `olá, ${saudacao}!`;
    elRelogio.textContent = agora.toLocaleTimeString('pt-BR');
    elDataCompleta.textContent = dataFormatada;
}

// inicialização
aplicarEstilos(document.body, temas.corpo);
aplicarEstilos(elBoasVindas, temas.boasVindas);
aplicarEstilos(elRelogio, temas.relogio);
aplicarEstilos(elDataCompleta, temas.dataInfo);

//adicionando ao dom
document.body.append(elBoasVindas, elRelogio, elDataCompleta);

//rodar
setInterval(atualizarPainel, 1000)
atualizarPainel();

