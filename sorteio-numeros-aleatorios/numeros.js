// ==========================
//        TESTES
// ==========================

// const num = document.querySelector("intervalo__valor--max")

// ==========================
//    ELEMENTOS DO HTML
// ==========================

// obter os elementos
const sliderMin = document.querySelector('.intervalo__slider--min');
const sliderMax = document.querySelector('.intervalo__slider--max');
// aqui você está "pegando" os elementos do HTML (os sliders)
// um é o mínimo e o outro é o máximo

// pega o botão de sortear do HTML
const botaoSortear = document.querySelector('area__button');

// pega o lugar onde o número sorteado vai aparecer
const elementoNumero = document.querySelector('area__numero');

// pega a lista onde vai mostrar os números já sorteados
const listaNumeros = document.querySelector('.historico__lista');

// pega o botão de limpar o histórico
const botaoLimparHistorico = document.querySelector('.sorteador__limpar');

// pega a área onde aparece mensagens na tela
const mensagem = document.querySelector('.area__mensagem')

// ==========================
// DEBUG (testes no console)
// ==========================

console.log(sliderMin, sliderMax);
// isso mostra no console se os sliders foram encontrados corretamente

// ==========================
//         FUNÇÕES
// ==========================

const atualizarValorSlider = () => {
    // criando uma função chamada atualizarValorSlider

    const min = Number(sliderMin.value);
    const max = Number(sliderMax.value);
    // aqui você pega o valor dos sliders
    // e transforma em número (porque vem como texto por padrão)

    console.log(min, max);
    // mostra no console os valores atuais dos sliders

    // exibir o valor do slider na interface
    document.querySelector('.intervalo__valor--min').textContent = min;
    document.querySelector('.intervalo__valor--max').textContent = max;
    // aqui você pega elementos do HTML e coloca os valores dos sliders neles
    // ou seja: atualiza o número que aparece na tela
};

// função para gerar um número aleatório 
const gerarNumeroAleatorio = (min,max) => {
    // gera um número aleatório inteiro entre min e max
        let numeroAleatorio = Math.floor(Math.random() * (max - min + 1));
        numeroAleatorio += min;
        return numeroAleatorio;
    
    };
    
    // função para atualizar texto
    const atualizarTexto = (elemento, valor) => {
    };
    
    // função para criar o lista de números sorteados
    const criarItemHistorico = (numero) => {
    };


// ==========================
//        EVENTOS
// ==========================

// evento para atualizar o valor em tempo real
// quando mexer no slider mínimo, atualiza os valores
sliderMin.addEventListener('input', atualizarValorSlider);

// quando mexer no slider máximo, atualiza os valores
sliderMax.addEventListener('input', atualizarValorSlider);
// resumindo //
// mexeu no slider => atualiza na tela

// ==========================
//      INICIALIZAÇÃO
// ==========================

// inicializar interface com os valores atuais
atualizarValorSlider(); // atualiza a tela logo no começo com os valores atuais dos sliders
