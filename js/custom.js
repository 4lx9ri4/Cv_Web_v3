$(document).ready(function(){

  //**** HIDE ON LOAD ****//
  // window.matchMedia('@media screen and (max-width: 700px)'); non fonctionnel why?

  // $('nav').hide();
  $('.fa-times').hide();
  $('#photo').hide();
  $('#contact-form2').hide();

  //**** MENU BURGER ****//
  $('.fa-bars').click(function(){
    $('nav').slideToggle('slow', function(){
      $('.fa-bars').hide();
      $('.fa-times').show();
    });
  });

  $('.fa-times').click(function(){
    $('nav').slideToggle('slow', function(){
      $('.fa-times').hide();
      $('.fa-bars').show();
    });
  });

  //**** BXSLIDER ****//
    $('.bxslider').bxSlider({
      mode: 'horizontal',
      pager: false,
      nextSelector: '#slider-next',
      prevSelector: '#slider-prev',
      nextText: '<i class="fa fa-arrow-right" aria-hidden="true"></i>',
      prevText: '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
      useCSS: false,
      infiniteLoop: true,
      hideControlOnEnd: false,
      easing: 'easeOutCubic',
      speed: 1500
    });

    //**** PHOTO ****//
    $('.fa-camera').click(function(){
      $('#photo').toggle('clip');
    });

    //**** CONTACT FOOTER ****//
    $('.fa-envelope, .fa-window-close').click(function(){
        $('#contact-form2').toggle('explode', 'slow');
    });

    //Activation des btn nav
    // au clic sur un lien
    $('a[href^="#"]').on('click', function(){
       // bloquer le comportement par défaut: on ne rechargera pas la page
      //  evt.preventDefault();
       // enregistre la valeur de l'attribut  href dans la variable target
    var target = $(this).attr('href');
       /* le sélecteur $(html, body) permet de corriger un bug sur chrome
       et safari (webkit) */
    $('html, body')
       // on arrête toutes les animations en cours
       .stop()
       /* on fait maintenant l'animation vers le haut (scrollTop) vers
        notre ancre target */
       .animate({scrollTop: $(target).offset().top}, 1000 );
     });
});
