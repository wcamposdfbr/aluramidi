function tocaSom(seletorAudio) {

    elemento = document.querySelector(seletorAudio);


    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        alert('Elemento não Encontrado')
    }
}


listaDeTeclas = document.querySelectorAll('.tecla')


for (contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = listaDeTeclas[contador].classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }


    tecla.onkeydown = function (evento) {
        console.log(evento.code);

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }


};

