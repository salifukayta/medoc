/**
 * Created by Salifukayta on 11/11/2016.
 */

$(document).ready(function () {

    // Initialisation de la position du toast
    toastr.options = {
        "positionClass": "toast-bottom-center",
    };

    // Initialisation du carousel de la partie 1
    $("#carousel-part1").slick({
        // Responsive Désign
        mobileFirst: true,
        // Boucle automatiquement
        autoplay: true,
        // 2 sec pour voir chaque image
        autoplaySpeed: 2000,
        // 2 sec le temps pour aller d'une image à la suivante
        speed: 2000,
        // true => tourne à droite por aller à la 1er image
        // false => reviens vers la gauche pour la 1er image
        infinite: true,
        // Ne s'arréte pas en focus
        pauseOnFocus: false,
        // Ne s'arréte pas en Hover
        pauseOnHover: false,
        // Pas de controle par glissemet
        swipe: false,
        touchMove: false,
        // Ne pas afficher fléche 'image précédente'
        prevArrow: "",
        // Ne pas afficher fléche 'image suivante'
        nextArrow: "",

        //TODO vérifier la nécessité de 'responsive' suite à l'utilisation de 'mobileFirst'
//                // the magic
//                responsive: [{
//
//                    breakpoint: 1024,
//                    settings: {
//                        slidesToShow: 1,
//                        infinite: true
//                    }
//
//                }, {
//
//                    breakpoint: 600,
//                    settings: {
//                        slidesToShow: 1,
//                        dots: true
//                    }
//
//                }, {
//
//                    breakpoint: 300,
//                    settings: "unslick" // destroys slick
//
//                }]
    });
});