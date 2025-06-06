const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.alerta');
const checkbox = document.getElementById('autorizacao')
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


form.addEventListener('submit', (e) =>{
    e.preventDefault();
    validacaoDoNome();
    validacaoDoEmail();
    validacaoDaCidade();
    validacaoDaAutorizacao();
})
function mensagemDeErro(indice){
    campos[indice].style.border = '2px solid #e63636';
    spans[indice].style.display = 'block';
}

function removerMensagemDeErro(indice){
    campos[indice].style.border = '';
    spans[indice].style.display = 'none';
}

function validacaoDoNome(){
    if(campos[0].value.length < 3){
        mensagemDeErro(0);
    }else{
        removerMensagemDeErro(0);
    }
}

function validacaoDoEmail(){
    if(!emailRegex.test(campos[1].value)){
        mensagemDeErro(1);
    }else{
        removerMensagemDeErro(1);
    }
}

function validacaoDaCidade(){
    if(campos[2].value.length < 2){
        mensagemDeErro(2);
    }else{
        removerMensagemDeErro(2);
    }
}

function validacaoDaAutorizacao(){
    if(checkbox.checked === false){
        checkbox.style.border = '2px solid #e63636';
        spans[3].style.display = 'block';
    }else{
        checkbox.style.border = '';
        spans[3].style.display = 'none';
    }
}
