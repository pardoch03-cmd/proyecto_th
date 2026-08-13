// =========================================================
// 1. FUNCIONES PARA ABRIR Y CERRAR VENTANAS (MODALES)
// =========================================================

// --- FUNCIONES PARA ABRIR ---

function abrirProposito(evento) {
    evento.preventDefault(); // Evita que la página salte hacia arriba
    document.getElementById('proposito-overlay').style.display = 'flex';
}

function abrirMision(evento) {
    evento.preventDefault();
    document.getElementById('mision-overlay').style.display = 'flex';
}

function abrirVision(evento) {
    evento.preventDefault();
    document.getElementById('vision-overlay').style.display = 'flex';
}

function abrirLogin(evento) {
    evento.preventDefault();
    document.getElementById('modal-overlay').style.display = 'flex';
}


// --- FUNCIONES PARA CERRAR ---

function cerrarProposito() {
    document.getElementById('proposito-overlay').style.display = 'none';
}

function cerrarMision() {
    document.getElementById('mision-overlay').style.display = 'none';
}

function cerrarVision() {
    document.getElementById('vision-overlay').style.display = 'none';
}

function cerrarLogin() {
    document.getElementById('modal-overlay').style.display = 'none';
}


// =========================================================
// 2. ASIGNAR LAS FUNCIONES A LOS BOTONES (Cuando cargue la página)
// =========================================================

window.onload = function() {
    
    // Asignar clics para ABRIR las ventanas
    document.getElementById('btn-proposito').onclick = abrirProposito;
    document.getElementById('btn-mision').onclick = abrirMision;
    document.getElementById('btn-vision').onclick = abrirVision;
    document.getElementById('btn-abrir-login').onclick = abrirLogin;

    // Asignar clics para CERRAR con las equis (X)
    document.getElementById('proposito-cerrar').onclick = cerrarProposito;
    document.getElementById('mision-cerrar').onclick = cerrarMision;
    document.getElementById('vision-cerrar').onclick = cerrarVision;
    document.getElementById('modal-cerrar').onclick = cerrarLogin;
};


// =========================================================
// 3. FUNCIÓN VALIDAR (Para el formulario de Iniciar Sesión)
// =========================================================
function validar() {
    
    // --- VALIDACIÓN DE ROLES ---
    var pulsado = false;
    var color = document.formulario.opc; // Captura los radio buttons
    var elegido = -1; 

    // Bucle para revisar cuál está marcado
    for (var i = 0; i < color.length; i++) { 
        if (color[i].checked == true) {
            pulsado = true;
            elegido = i; 
        }
    }

    // Si no se pulsó ningún rol
    if (pulsado == false) {
        swal("Oops!", "No has elegido ningún rol.\n\nElige un rol para que el formulario pueda ser enviado", "error"); 
        return false; // Detiene el envío
    }
 
    // --- VALIDACIÓN DE TÉRMINOS Y CONDICIONES ---
    var opcion = document.formulario.condiciones; // Captura el checkbox
    
    if (opcion.checked == true) {
        var miopcion = color[elegido].value; 
        
        // Mensaje de éxito con SweetAlert
        swal("¡Éxito!", "Has elegido el rol: " + miopcion + "\n\nEl formulario ha sido enviado correctamente.", "success");
        
        cerrarLogin(); // Cierra la ventana del formulario
        return true;   // Permite enviar el formulario
    } else {
        // Mensaje de error si no acepta términos
        swal("Oops!", "El formulario no ha sido enviado. Acepte los términos y condiciones para poder ingresar.", "error");
        return false; // Detiene el envío
    }
}