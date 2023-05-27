function calcularSalarioMensual(salarioAnual) {
    const MESESENUNANIO = 12;
    return salarioAnual / MESESENUNANIO;
}

const $botonCalcular = document.querySelector(`#boton-calcular`);

$botonCalcular.onclick = function() {   
    const salarioAnual = Number(document.querySelector(`#salario-anual`).value);
    const inputRespuesta = document.querySelector(`#salario-mensual`);
    inputRespuesta.value = `Tu salario mensual es de $${calcularSalarioMensual(salarioAnual)}`;
    
    return false
}
