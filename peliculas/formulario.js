
function capturarDatos(){
    let nombre = document.getElementById('inputNombre').value;
    let apellido = document.getElementById('inputApellido').value;
    let telefono = document.getElementById('inputTelefono').value;
    let direccion = document.getElementById('inputDireccion').value;
    let observaciones = document.getElementById('observaciones').value;
    
    let objeto ={
        nom: nombre,
        apel: apellido,
        tel: telefono,
        dir: direccion,
        obs: observaciones
    }
    localStorage.setItem('persona',JSON.stringify(objeto));
}

