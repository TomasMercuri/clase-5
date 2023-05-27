const $botonEnviar = document.querySelector(`#submit`);

$botonEnviar.onclick = function () {
    const $cantidadHoras = document.querySelectorAll(`input.cantidad-horas`);
    const $cantidadMinutos = document.querySelectorAll(`input.cantidad-minutos`);
    const $cantidadSegundos = document.querySelectorAll(`input.cantidad-segundos`);
    const $informar = document.querySelector(`#informar`);

    let horasTotales = 0;
    let minutosTotales = 0;
    let segundosTotales = 0;

    for (let i = 0; i < $cantidadSegundos.length; i++) {
        segundosTotales += Number($cantidadSegundos[i].value);
        if(segundosTotales >= 60) {
            minutosTotales++;
            segundosTotales -= 60;
        }
    }

    for (let i = 0; i < $cantidadMinutos.length; i++) {
        minutosTotales += Number($cantidadMinutos[i].value);
        if(minutosTotales >= 60) {
            horasTotales++;
            minutosTotales -= 60;
        }
    }

    for(let i = 0; i < $cantidadHoras.length; i++) {
        horasTotales += Number($cantidadHoras[i].value);
    }


    if(segundosTotales < 10){
        segundosTotales = "0" + segundosTotales;
    }else if(minutosTotales < 10){
        minutosTotales = "0" + minutosTotales;
    }

    $informar.textContent = `La duracion de todos los videos juntos es de ${horasTotales}:${minutosTotales}:${segundosTotales}`;
    $informar.style.display = `block`;

    return false;
}
