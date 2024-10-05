
const obox = document.getElementById('obox');

obox.addEventListener('click', function () {
    if (obox.classList.contains('flickerwhite')) {
        obox.classList.remove('flickerwhite');
        obox.classList.add('no-animation');
    } else {
        obox.classList.remove('no-animation');
        obox.classList.add('flickerwhite');
    }
});

