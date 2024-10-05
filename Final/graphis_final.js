const obox = document.getElementById('obox');
        
obox.addEventListener('click', function() {
    // Toggle die Klasse, die die Animation steuert
    if (obox.classList.contains('flickerwhite')) {
        obox.classList.remove('flickerwhite');
        obox.classList.add('no-animation');
    } else {
        obox.classList.remove('no-animation');
        obox.classList.add('flickerwhite');
    }
});