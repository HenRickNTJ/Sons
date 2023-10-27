//Declaração/criação da função tocaSomMsg
function tocaSomMsg (){
    document.querySelector('#som_tecla_olha_msg').play();
}

//criando a referência constante listaDeTeclas e buscando a classe coletiva .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;
while(contador < 9){
    listaDeTeclas[contador].onclick = tocaSomMsg;
    contador = contador + 1;
    console.log(contador);
}