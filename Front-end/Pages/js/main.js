document.addEventListener("DOMContentLoaded", function() {
    // Cambiar el color de la letra 'o' a amarillo en el logo del encabezado
    var letrasLogoHeader = document.getElementById('letras_logo_header');
    var letrasHeader = letrasLogoHeader.textContent.split('');
    var nuevoHTMLHeader = '';

    for (var i = 0; i < letrasHeader.length; i++) {
        if (letrasHeader[i].toLowerCase() === 'o') {
            nuevoHTMLHeader += '<span class="letra-amarilla">' + letrasHeader[i] + '</span>';
        } else {
            nuevoHTMLHeader += letrasHeader[i];
        }
    }

    letrasLogoHeader.innerHTML = nuevoHTMLHeader;

    // Cambiar el color de la letra 'o' a amarillo en el logo del menú de navegación
    var letrasLogoNav = document.getElementById('letras_logo_nav');
    var letrasNav = letrasLogoNav.textContent.split('');
    var nuevoHTMLNav = '';

    for (var j = 0; j < letrasNav.length; j++) {
        if (letrasNav[j].toLowerCase() === 'o') {
            nuevoHTMLNav += '<span class="letra-amarilla">' + letrasNav[j] + '</span>';
        } else {
            nuevoHTMLNav += letrasNav[j];
        }
    }

    letrasLogoNav.innerHTML = nuevoHTMLNav;
});
