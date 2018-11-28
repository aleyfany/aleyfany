$(document).ready(function(){
    galeria();
    scroll();
    let alto_cabecera = parseInt($(window).height()) - parseInt($("#menu").css("height"));

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $("#cabecera").css("height",alto_cabecera);
    $(".texto-centrado-img").css("height",alto_cabecera - 50);

    $(window).resize(function () {
        alto_cabecera = parseInt($(window).height()) - parseInt($("#menu").css("height"));
        $("#cabecera").css("height",alto_cabecera);
        $(".texto-centrado-img").css("height",alto_cabecera - 50);
    });
});

function galeria() {
    $("#nanogallery2").nanogallery2( {
        <!-- ### gallery settings ### -->
        "itemsBaseURL": "content/img/Fotos/",
        "thumbnailWidth": "250",
        "thumbnailHeight": "250",
        "thumbnailBorderVertical": 0,
        "thumbnailBorderHorizontal": 0,
        "colorScheme": {
            "thumbnail": {
                "background": "rgba(0,0,0,1)"
            }
        },
        "thumbnailDisplayTransition": "scaleUp",
        "thumbnailDisplayTransitionDuration": 1000,
        "thumbnailDisplayInterval": 20,
        "galleryDisplayMode": "pagination",
        "thumbnailLabel": {
            "display": false
        },
        "galleryMaxItems": 100,
        "thumbnailHoverEffect2": "scale120|imageGrayOff|imageScaleIn80",
        "galleryMaxRows": 3,
        "thumbnailAlignment": "center",
        "thumbnailGutterWidth": 0,
        "thumbnailGutterHeight": 0,

        <!-- ### gallery content ### -->
        items: [
            { src: '1.jpg', srct: '1.jpg', title: '' },
            { src: '2.jpg', srct: '2.jpg', title: '' },
            { src: '3.jpg', srct: '3.jpg', title: '' },
            { src: '4.jpg', srct: '4.jpg', title: '' },
            { src: '5.jpg', srct: '5.jpg', title: '' },
            { src: '6.jpg', srct: '6.jpg', title: '' },
            { src: '7.jpg', srct: '7.jpg', title: '' },
            { src: '8.jpg', srct: '8.jpg', title: '' },
            { src: '9.jpg', srct: '9.jpg', title: '' },
            { src: '10.jpg', srct: '10.jpg', title: '' },
            { src: '11.jpg', srct: '11.jpg', title: '' },
            { src: '12.jpg', srct: '12.jpg', title: '' },
            { src: '13.jpg', srct: '13.jpg', title: '' },
            { src: '14.jpg', srct: '14.jpg', title: '' },
            { src: '15.jpg', srct: '15.jpg', title: '' },
            { src: '16.jpg', srct: '16.jpg', title: '' },
            { src: '17.jpg', srct: '17.jpg', title: '' },
            { src: '18.jpg', srct: '18.jpg', title: '' },
            { src: '19.jpg', srct: '19.jpg', title: '' },
            { src: '20.jpg', srct: '20.jpg', title: '' },
            { src: '21.jpg', srct: '21.jpg', title: '' },
            { src: '22.jpg', srct: '22.jpg', title: '' },
            { src: '23.jpg', srct: '23.jpg', title: '' },
            { src: '24.jpg', srct: '24.jpg', title: '' },
            { src: '25.jpg', srct: '25.jpg', title: '' },
            { src: '26.jpg', srct: '26.jpg', title: '' },
            { src: '27.jpg', srct: '27.jpg', title: '' },
            { src: '28.jpg', srct: '28.jpg', title: '' },
            { src: '29.jpg', srct: '29.jpg', title: '' },
            { src: '30.jpg', srct: '30.jpg', title: '' },
            { src: '31.jpg', srct: '31.jpg', title: '' },
            { src: '32.jpg', srct: '32.jpg', title: '' },
            { src: '33.jpg', srct: '33.jpg', title: '' },
            { src: '34.jpg', srct: '34.jpg', title: '' },
            { src: '35.jpg', srct: '35.jpg', title: '' },
            { src: '36.jpg', srct: '36.jpg', title: '' },
            { src: '37.jpg', srct: '37.jpg', title: '' },
            { src: '38.jpg', srct: '38.jpg', title: '' },
            { src: '39.jpg', srct: '39.jpg', title: '' },
            { src: '40.jpg', srct: '40.jpg', title: '' },
            { src: '42.jpg', srct: '42.jpg', title: '' },
            { src: '43.jpg', srct: '43.jpg', title: '' },
            { src: '44.jpg', srct: '44.jpg', title: '' },
            { src: '45.jpg', srct: '45.jpg', title: '' },
            { src: '46.jpg', srct: '46.jpg', title: '' },
            { src: '47.jpg', srct: '47.jpg', title: '' },
            { src: '48.jpg', srct: '48.jpg', title: '' },
            { src: '49.jpg', srct: '49.jpg', title: '' },
            { src: '50.jpg', srct: '50.jpg', title: '' },
            { src: '51.jpg', srct: '51.jpg', title: '' },
            { src: '52.jpg', srct: '52.jpg', title: '' },
            { src: '53.jpg', srct: '53.jpg', title: '' },
            { src: '54.jpg', srct: '54.jpg', title: '' },
            { src: '55.jpg', srct: '55.jpg', title: '' },
            { src: '56.jpg', srct: '56.jpg', title: '' },
            { src: '57.jpg', srct: '57.jpg', title: '' },
            { src: '58.jpg', srct: '58.jpg', title: '' },
            { src: '59.jpg', srct: '59.jpg', title: '' },
            { src: '61.jpg', srct: '61.jpg', title: '' },
            { src: '62.jpg', srct: '62.jpg', title: '' },
            { src: '63.jpg', srct: '63.jpg', title: '' },
            { src: '64.jpg', srct: '64.jpg', title: '' },
            { src: '65.jpg', srct: '65.jpg', title: '' },
            { src: '66.jpg', srct: '66.jpg', title: '' },
            { src: '67.jpg', srct: '67.jpg', title: '' },
            { src: 'https://www.dailymotion.com/video/x6xvfwq', srct: 'https://www.dailymotion.com/video/x6xvfwq', title: '' },
            { src: 'https://www.dailymotion.com/video/x6xvfws', srct: 'https://www.dailymotion.com/video/x6xvfws', title: '' },
            { src: 'https://www.dailymotion.com/video/x6xvfwu', srct: 'https://www.dailymotion.com/video/x6xvfwu', title: '' }

        ]
    });
}

function scroll() {

    $("#inicio1").click(function () {
        $("#inicio1").addClass("activo");
        $("#historia1").removeClass("activo");
        $("#galeria1").removeClass("activo");
        $("#poema1").removeClass("activo");
    });

    $("#historia1").click(function () {
        $("#historia1").addClass("activo");
        $("#inicio1").removeClass("activo");
        $("#galeria1").removeClass("activo");
        $("#poema1").removeClass("activo");
    });

    $("#galeria1").click(function () {
        $("#galeria1").addClass("activo");
        $("#inicio1").removeClass("activo");
        $("#historia1").removeClass("activo");
        $("#poema1").removeClass("activo");
    });

    $("#poema1").click(function () {
        $("#poema1").addClass("activo");
        $("#inicio1").removeClass("activo");
        $("#historia1").removeClass("activo");
        $("#galeria1").removeClass("activo");
    });

    let scroll = new SmoothScroll('a[href*="#"]', {

        // Selectors
        selector: '[data-scroll]',
        header: '#menu', // Selector for fixed headers (must be a valid CSS selector)
        topOnEmptyHash: true, // Scroll to the top of the page for links with href="#"

        // Speed & Duration
        speed: 2000, // Integer. Amount of time in milliseconds it should take to scroll 1000px
        speedAsDuration: false, // If true, use speed as the total duration of the scroll animation
        durationMax: null, // Integer. The maximum amount of time the scroll animation should take
        durationMin: null, // Integer. The minimum amount of time the scroll animation should take
        clip: true, // If true, adjust scroll distance to prevent abrupt stops near the bottom of the page
        offset: 0,

        // Easing
        easing: 'easeInOutCubic', // Easing pattern to use
    }),
    parte_inicial = $("#parte-inicial").offset().top,
    fondo_historia = $("#historia").offset().top,
    galeria = $("#galeria").offset().top,
    poema = $("#poema").offset().top;


    $(window).scroll(function(){

        if($(window).scrollTop() >= parte_inicial) {

            $("#inicio").addClass("activo");
            $("#nhistoria").removeClass("activo");
            $("#ngaleria").removeClass("activo");
            $("#npoema").removeClass("activo");


        }else{
            $("#inicio").removeClass("activo");

        }

        if($(window).scrollTop() >= fondo_historia) {

            $("#nhistoria").addClass("activo");
            $("#inicio").removeClass("activo");
            $("#ngaleria").removeClass("activo");
            $("#npoema").removeClass("activo");

        }else{

            $("#nhistoria").removeClass("activo");
        }

        if($(window).scrollTop() >= galeria) {

            $("#nhistoria").removeClass("activo");
            $("#inicio").removeClass("activo");
            $("#ngaleria").addClass("activo");
            $("#npoema").removeClass("activo");

        }else{

            $("#ngaleria").removeClass("activo");
        }

        if($(window).scrollTop() >= poema + 1050) {

            $("#nhistoria").removeClass("activo");
            $("#inicio").removeClass("activo");
            $("#ngaleria").removeClass("activo");
            $("#npoema").addClass("activo");

        }else{

            $("#npoema").removeClass("activo");
        }
    });


}
