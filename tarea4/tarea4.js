const $arrayElementosLi = document.querySelectorAll(`li`);

const arrayDeNumeros = retornarArregloDeNumeros($arrayElementosLi);

document.querySelector(`#promedio`).textContent += retornarPromedioNumeros(arrayDeNumeros);
document.querySelector(`#numero-menor`).textContent += retornarMenorNumero(arrayDeNumeros);
document.querySelector(`#numero-mayor`).textContent += retornarMayorNumero(arrayDeNumeros);
document.querySelector(`#numero-frecuente`).textContent += retornarNumeroMasFrecuente(arrayDeNumeros);


function retornarArregloDeNumeros(arrayElementosLi){
    let arrayDeNumeros = [];
    for(let i = 0; i < arrayElementosLi.length; i++){
        arrayDeNumeros[i] = Number(arrayElementosLi[i].textContent);
    }
    return arrayDeNumeros;
}


function retornarPromedioNumeros(numeros) {
    let sumaTotal = 0;
    for(let i = 0; i < numeros.length; i++) {
        sumaTotal += numeros[i];
    }
    return sumaTotal / numeros.length;
}

function retornarMenorNumero(numeros) {
    let numeroMenor = numeros[0];
    for(let i = 1; i < numeros.length; i++) {
        if(numeros[i] < numeroMenor){
            numeroMenor = numeros[i];
        }
    }
    return numeroMenor;
}

function retornarMayorNumero(numeros) {
    let numeroMayor = 0;
    for(let i = 0; i < numeros.length; i++) {
        if(numeros[i] > numeroMayor) {
            numeroMayor = numeros[i];
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
            if(numeros[i] == numeros[j]){
                cont++;
                if(cont > cantidadRepeticiones){
                    cantidadRepeticiones = cont;
                    numeroMasFrecuente = numeros[i];
                }
            }
        }
    }
    return numeroMasFrecuente;
}
