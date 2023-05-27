const $botonSubmit = document.querySelector(`#submit`);

$botonSubmit.onclick = function () {
    let $tituloDelFormulario = document.querySelector(`#title`);
    const nombreDelUsuario = document.querySelector(`#nombre-usuario`).value;
    const segundoNombreDelUsuario = document.querySelector(`#segundo-nombre-usuario`).value;
    const apellidoDelUsuario = document.querySelector(`#apellido-usuario`).value;
    const edadUsuario = Number(document.querySelector(`#edad-usuario`).value);
    const $informacion = document.querySelector(`#informacion`);

    $tituloDelFormulario.textContent += nombreDelUsuario;
    $informacion.style.background = `#fff`;
    $informacion.textContent = `Nombre: ${nombreDelUsuario}, Segundo nombre: ${segundoNombreDelUsuario}, Apellido: ${apellidoDelUsuario}, Edad: ${edadUsuario} `;

    return false;
}
