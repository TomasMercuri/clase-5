const $arrayElementosLi = document.querySelectorAll(`li`);

const arrayDeNumeros = retornarArregloDeNumeros($arrayElementosLi);

document.querySelector(`#promedio`).textContent += retornarPromedioNumeros(arrayDeNumeros);
document.querySelector(`#numero-menor`).textContent += retornarMenorNumero(arrayDeNumeros);
document.querySelector(`#numero-mayor`).textContent += retornarMayorNumero(arrayDeNumeros);
document.querySelector(`#numero-frecuente`).textContent += retornarNumeroMasFrecuente(arrayDeNumeros);


function retornarArregloDeNumeros(arrayElementosLi){
    let arrayDeNumeros = [];
    for(let i = 0; i < arrayElementosLi.length; i++){
        arrayDeNumeros[i] = arrayElementosLi[i]
    }
    return arrayDeNumeros;
}


function retornarPromedioNumeros(numeros) {
    let sumaTotal = 0;
    for(let i = 0; i < numeros.length; i++) {
        sumaTotal += Number(numeros[i].textContent);
    }
    return sumaTotal / numeros.length;
}

function retornarMenorNumero(numeros) {
    let numeroMenor = Number(numeros[0].textContent);
    for(let i = 1; i < numeros.length; i++) {
        if(Number(numeros[i].textContent) < numeroMenor){
            numeroMenor = Number(numeros[i].textContent);
        }
    }
    return numeroMenor;
}

function retornarMayorNumero(numeros) {
    let numeroMayor = 0;
    for(let i = 0; i < numeros.length; i++) {
        if(Number(numeros[i].textContent) > numeroMayor) {
            numeroMayor = Number(numeros[i].textContent);
        }
    }
    return numeroMayor;
}

// Rehacer
function retornarNumeroMasFrecuente(numeros) {
    let cont;
    let cantidadRepeticiones = 0
    let numeroMasFrecuente;

    for(let i = 0; i < numeros.length; i++){
        cont = 0;
        for(let j = 0; j < numeros.length; j++){
            if(Number(numeros[i].textContent) == Number(numeros[j].textContent)){
                cont++;
                if(cont > cantidadRepeticiones){
                    cantidadRepeticiones = cont;
                    numeroMasFrecuente = Number(numeros[i].textContent);
                }
            }
        }
    }
    return numeroMasFrecuente;
}
