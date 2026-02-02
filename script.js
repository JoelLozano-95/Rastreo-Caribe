function validarSeguimiento() {
    
    const guia = document.getElementById('guia').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const fecha = document.getElementById('fecha').value;
    const pin = document.getElementById('pin').value;
    const correo = document.getElementById('correo').value;
    const prioridad = document.getElementById('prioridad').value;

    
    const hoy = new Date().toISOString().split('T')[0];

    

    
    if (guia.length < 5) {
        alert("Error: El número de guía es demasiado corto.");
        return;
    }

    
    if (isNaN(peso) || peso <= 0 || peso > 50) {
        alert("Error: El peso debe estar entre 0.1 y 50 kg.");
        return;
    }

    
    if (!fecha || fecha > hoy) {
        alert("Error: La fecha no puede ser futura o estar vacía.");
        return;
    }

    
    if (pin.length !== 4) {
        alert("Error: El PIN de seguridad debe ser de exactamente 4 dígitos.");
        return;
    }

    
    if (!correo.includes("@")) {
        alert("Error: Ingrese un correo electrónico válido.");
        return;
    }

    
    if (prioridad === "") {
        alert("Error: Debes seleccionar un nivel de prioridad para tu paquete.");
        return; 
    }

    
    alert("Sus datos se han enviado correctamente, revise el e-mail proporcionado");
}