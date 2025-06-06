const questoes = [
    {
        questoes: ' O que pode causar uma enchente?',
        respostas: [
            { id: 1, text: 'A) Sol forte por muitos dias', correct: false},
            { id: 2, text: 'B) Chuvas intensas em pouco tempo', correct: true},
            { id: 3, text: 'C) Céu limpo com ventos leves', correct: false},
            { id: 4, text: 'D) Dias nublados sem chuva', correct: false},
        ]
    },
    {
        questoes: ' Qual é um sinal de que uma enchente pode acontecer em breve?',
        respostas: [
            { id: 1, text: 'A) O tempo esquentando de repente', correct: false},
            { id: 2, text: 'B) O céu ficar azul claro', correct: false},
            { id: 3, text: 'C) O nível da água subindo rapidamente', correct: true},
            { id: 4, text: 'D) O chão estar seco demais', correct: false},
        ]
    },
    {
        questoes: ' Qual dessas atitudes ajuda a evitar enchentes?',
        respostas: [
            { id: 1, text: 'A) Jogar lixo na rua', correct: false},
            { id: 2, text: 'B) Limpar calhas e bueiros', correct: true},
            { id: 3, text: 'C) Cortar todas as árvores', correct: false},
            { id: 4, text: 'D) Cimentar todo o quintal', correct: false},
        ]
    },
    {
        questoes: ' O que fazer se a água começar a subir muito rápido?',
        respostas: [
            { id: 1, text: 'A) Ficar parado observando', correct: false},
            { id: 2, text: 'B) Tentar nadar', correct: false},
            { id: 3, text: 'C) Buscar um lugar mais alto imediatamente', correct: true},
            { id: 4, text: 'D) Ligar o ventilador', correct: false},
        ]
    },
    {
        questoes: ' Onde as enchentes costumam causar mais problemas?',
        respostas: [
            { id: 1, text: 'A) Em praias', correct: false},
            { id: 2, text: 'B) Em florestas', correct: false},
            { id: 3, text: 'C) Em desertos', correct: false},
            { id: 4, text: 'D) Em áreas urbanas e comunidades de encosta', correct: true},
        ]
    },
    {
        questoes: ' Por que é importante avisar os vizinhos durante uma enchente?',
        respostas: [
            { id: 1, text: 'A) Para fazer um mutirão de limpeza', correct: false},
            { id: 2, text: 'B) Para que todos fiquem em segurança', correct: true},
            { id: 3, text: 'C) Para chamar a polícia', correct: false},
            { id: 4, text: 'D) Para montar uma barraca', correct: false},
        ]
    },
    {
        questoes: ' Qual é o papel de um sistema de alerta para enchentes?',
        respostas: [
            { id: 1, text: 'A) Medir a pressão da chuva', correct: false},
            { id: 2, text: 'B) Avisar a população com antecedência', correct: true},
            { id: 3, text: 'C) Parar a chuva', correct: false},
            { id: 4, text: 'D) Aumentar a umidade do ar', correct: false},
        ]
    },
    {
        questoes: ' O que pode agravar uma enchente em um bairro?',
        respostas: [
            { id: 1, text: 'A) Plantar árvores', correct: false},
            { id: 2, text: 'B) Fazer hortas', correct: false},
            { id: 3, text: 'C) Rios e bueiros entupidos', correct: true},
            { id: 4, text: 'D) Telhados verdes', correct: false},
        ]
    },
    {
        questoes: ' O que as pessoas podem fazer para se preparar melhor contra enchentes?',
        respostas: [
            { id: 1, text: 'A) Conhecer rotas de fuga e pontos altos', correct: true},
            { id: 2, text: 'B) Estocar água da chuva nas ruas', correct: false},
            { id: 3, text: 'C) Fazer churrasco na varanda', correct: false},
            { id: 4, text: 'D) Pintar a casa de azul', correct: false},
        ]
    },
    {
        questoes: ' O que significa o LED vermelho aceso no sistema?',
        respostas: [
            { id: 1, text: 'A) Tudo normal', correct: false},
            { id: 2, text: 'B) Perigo iminente — a água está muito próxima', correct: true},
            { id: 3, text: 'C) Sensor desligado', correct: false},
            { id: 4, text: 'D) Chuva fraca', correct: false},
        ]
    }
]

const pergunta = document.querySelector('.pergunta');
const botaoDeResposta = document.querySelector('.botao-de-resposta');
const proximo = document.querySelector('.btn-proximo');
const quiz = document.querySelector('.bloco-inicial');
const iniciar = document.querySelector('.iniciar');
const regras = document.querySelector('.regras');
const sair = document.querySelector('.sair');
const comecarQuiz = document.querySelector('.comecar');
const reiniciar = document.querySelector('.reiniciar');
const resultado = document.querySelector('.resultado');
const pontos = document.querySelector('.pontuacao');
const falaDeApoio = document.querySelector('.destaque');

iniciar.addEventListener('click', ()=>{
    regras.style.display = 'block';
    iniciar.style.display = 'none';
})

sair.addEventListener('click', () =>{
    regras.style.display = 'none';
    iniciar.style.display = 'block';
})

comecarQuiz.addEventListener('click', () =>{
    quiz.style.display = 'block';
    regras.style.display = 'none';
})

reiniciar.addEventListener('click', () =>{
    resultado.style.display = 'none';
    quiz.style.display = 'block';
    comecar();
})

let totalDeQuestoes = 0;
let pontuacao = 0;

function comecar(){
    totalDeQuestoes = 0;
    pontuacao = 0;
    proximo.innerHTML = 'Próxima';
    mostrarQuestoes();
}

function resetar(){
    proximo.style.display = 'none';
    while (botaoDeResposta.firstChild){
        botaoDeResposta.removeChild(botaoDeResposta.firstChild);
    }
}

function mostrarQuestoes(){
    resetar();
    let questaoAtual = questoes[totalDeQuestoes];
    let questaoDesejada = totalDeQuestoes + 1;
    pergunta.innerHTML = questaoDesejada + '.' + questaoAtual.questoes;

    questaoAtual.respostas.forEach((respostas) =>{
        const botao = document.createElement('button');
        botao.innerHTML = respostas.text;
        botao.dataset.id = respostas.id;
        botao.classList.add('btn');
        botao.addEventListener('click', alternativaSelecionada)
        botaoDeResposta.appendChild(botao);
    })
}

function alternativaSelecionada(e){
    resposta = questoes[totalDeQuestoes].respostas;
    const respostaCorreta = resposta.filter((respostas) => respostas.correct == true)[0]

    const botaoEscolhido = e.target;
    const certo = botaoEscolhido.dataset.id == respostaCorreta.id;
    if(certo){
        botaoEscolhido.classList.add('correct');
        pontuacao++;
    }else{
        botaoEscolhido.classList.add('incorrect');
    }
    Array.from(botaoDeResposta.children).forEach((botao) => {
        botao.disabled = true;
    });
    proximo.style.display = 'block';
}

function mostrarPontos(){
    quiz.style.display = 'none';
    resultado.style.display = 'block';
    pontos.innerHTML = `Sua pontuação: ${pontuacao} de 10`
    if(pontuacao <= 3){
        falaDeApoio.innerHTML = 'Você deu os primeiros passos para entender mais sobre segurança em enchentes. Continue estudando, cada conhecimento conta!';
    }else if(pontuacao == 4 || pontuacao <= 6){
        falaDeApoio.innerHTML = 'Você está no caminho certo! Já tem uma boa noção e com mais atenção pode se preparar ainda melhor para situações de risco.';
    }else if(pontuacao == 7 || pontuacao <= 9){
        falaDeApoio.innerHTML = 'Muito bem! Você demonstra um bom preparo e preocupação com a segurança da sua comunidade. Continue assim!';
    }else{
        falaDeApoio.innerHTML = 'Impressionante! Você mostrou que realmente se importa com a sua segurança e a da sua comunidade. Parabéns por estar tão bem preparado!';
    }
}

function p(){
    totalDeQuestoes++;
    if(totalDeQuestoes < questoes.length){
        mostrarQuestoes();
    }else{
        mostrarPontos();
    }
}
proximo.addEventListener('click', () =>{
    if(totalDeQuestoes < questoes.length){
        p();
    }else{
        comecar();
    }
})

mostrarQuestoes();