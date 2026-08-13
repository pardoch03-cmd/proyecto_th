// almacenar slider en una variable
var slider = $('#slider');

// mover ultima imagen al primer lugar
$('#slider .slider__section:last').insertBefore('#slider .slider__section:first');

// mostrar la primera imagen con un margen de -100%
slider.css('margin-left', '-100%');

// función para mover las imágenes a la derecha
function moverD() {
    slider.animate({
        marginLeft: '-200%'
    }, 700, function() {

        $('#slider .slider__section:first')
        .insertAfter('#slider .slider__section:last');

        slider.css('margin-left', '-100%');
    });
}

// función para mover automáticamente las imágenes
function autoplay() {
    setInterval(function() {
        moverD();
    }, 5000);
}

// ejecución automática
autoplay();