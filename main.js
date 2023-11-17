//Declaração/criação da função tocaSom
function tocaSom (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador = contador++){
    const teclas = listaDeTeclas[contador] 
    const efeito = teclas.classList[1];
    const idAudio = `#som_${efeito}`;  
    teclas.onclick = function(){
    tocaSom(idAudio); 
}
}