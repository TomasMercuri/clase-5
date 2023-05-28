function calcularSalarioMensual(salarioAnual) {
    const MESES_EN_UN_ANIO = 12;
    return salarioAnual / MESES_EN_UN_ANIO;
}

const $botonCalcular = document.querySelector(`#boton-calcular`);

$botonCalcular.onclick = function() {   
    const salarioAnual = Number(document.querySelector(`#salario-anual`).value);
    const inputRespuesta = document.querySelector(`#salario-mensual`);
    inputRespuesta.value = `Tu salario mensual es de $${calcularSalarioMensual(salarioAnual)}`;
    
    return false
}
