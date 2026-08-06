function openTab(evt, tabId) {
    // Evitar comportamientos extraños del formulario al clickear pestañas
    if(evt) evt.preventDefault(); 
    
    // Ocultar todos los contenidos de pestaña
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    // Quitar la clase 'active' de todos los botones de pestaña
    var tabButtons = document.getElementsByClassName("tab-button");
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // Mostrar la pestaña actual y marcar el botón como activo
    document.getElementById(tabId).classList.add("active");
    
    // Buscar el botón correspondiente para encenderlo
    for (var i = 0; i < tabButtons.length; i++) {
        if(tabButtons[i].getAttribute('onclick').includes(tabId)) {
            tabButtons[i].classList.add("active");
        }
    }
    
    // Scroll automático suave hacia la parte superior del formulario al cambiar
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Función auxiliar para los botones "Siguiente" y "Anterior"
function changeTab(tabId) {
    openTab(null, tabId);
}