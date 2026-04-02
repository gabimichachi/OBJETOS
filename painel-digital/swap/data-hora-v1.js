// criando uma função principal 
const app = () =>{

    // criando os elementos via javascript para manter o código funcional
    // são 3 "caixas" que vão mostrar data, hora e dia da semana
    const containerData = document.createElement('div');
    const containerHora = document.createElement('div');
    const containerDiaSemana = document.createElement('div');
    
    function criarElementos(){
        // adiciona as divs na página (faz aparecer na tela)
        document.body.appendChild(containerData);
        document.body.appendChild(containerHora);
        document.body.appendChild(containerDiaSemana);
    }

    // chama a função para criar e mostrar os elementos
    criarElementos()

    function atualizarRelogio() {
        // pega a data e hora atual
        const agora = new Date();
    
        // atualiza o conteúdo de cada caixinha
        containerData.textContent = agora.toLocaleDateString(); // data
        containerHora.textContent = agora.toLocaleTimeString(); // hora
        containerDiaSemana.textContent = agora.toLocaleString('pt-br', { weekday: 'long' });
    };
    
    // mostra na tela imediatamente
    atualizarRelogio()
    
    function aplicarEstilos(){
        // centraliza tudo na tela
        document.body.style.display = 'flex';
        document.body.style.flexDirection = 'column';
        document.body.style.alignItems = 'center';
        document.body.style.justifyContent = 'center';
        document.body.style.height = '100vh';
        document.body.style.margin = '0';

        // formatar fonte
        document.body.style.fontSize = '80px';
        document.body.style.color = 'red';
        document.body.style.fontFamily = 'sans-serif';
    };
    
    // aplica os estilos
    aplicarEstilos()

    // atualiza o relógio a cada 1 segundo
    setInterval(atualizarRelogio, 1000);
}

// inicia o app
app();