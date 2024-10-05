// Funktion, um die Animation ein- und auszuschalten
function toggleAnimation() {
    const obox = document.getElementById('obox');
    if (obox.classList.contains('flickerwhite')) {
        obox.classList.remove('flickerwhite');
        obox.classList.add('no-animation');
    } else {
        obox.classList.remove('no-animation');
        obox.classList.add('flickerwhite');
    }
}

// Event Listener für Click- und Touch-Events
document.addEventListener('DOMContentLoaded', function() {
    const obox = document.getElementById('obox');
    obox.addEventListener('click', toggleAnimation);
    obox.addEventListener('touchstart', toggleAnimation);
});

