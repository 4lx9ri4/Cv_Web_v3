$(document).ready(function(){

  //**** HIDE ON LOAD ****//
  // window.matchMedia('@media screen and (max-width: 700px)'); non fonctionnel why?
// <!-- NAV & MENU BURGER comment: conflit with bxslider js -->
  // $('nav').hide();
  // $('.fa-times').hide();
  $('#photo').hide();
  $('#contact-form2').hide();

  //**** MENU BURGER ****//
  // $('.fa-bars').click(function(){
  //   $('nav').slideToggle('slow', function(){
  //     $('.fa-bars').hide();
  //     $('.fa-times').show();
  //   });
  // });

  // $('.fa-times').click(function(){
  //   $('nav').slideToggle('slow', function(){
  //     $('.fa-times').hide();
  //     $('.fa-bars').show();
  //   });
  // });

  //Activation des btn nav
  // au clic sur un lien
  // $('a[href^="#"]').on('click', function(){
  //    // bloquer le comportement par défaut: on ne rechargera pas la page
  //   //  evt.preventDefault();
  //    // enregistre la valeur de l'attribut  href dans la variable target
  // var target = $(this).attr('href');
  //    /* le sélecteur $(html, body) permet de corriger un bug sur chrome
  //    et safari (webkit) */
  // $('html, body')
  //    // on arrête toutes les animations en cours
  //    .stop();
  //    /* on fait maintenant l'animation vers le haut (scrollTop) vers
  //     notre ancre target */
  //   //  .animate({scrollTop: $(target).offset().top}, 1000 );
  //  });

//    $('a[href*="#"]:not([href="#"])').click(function() {
//   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//     var target = $(this.hash);
//     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//     if (target.length) {
//       $('html, body').scrollLeft().stop();
//       // return false;
//     }
//   }
// });

  //**** BXSLIDER ****//
    $('.bxslider').bxSlider({
      mode: 'horizontal',
      pager: false,
      nextSelector: '#slider-next',
      prevSelector: '#slider-prev',
      nextText: '<i class="fa fa-arrow-right" aria-hidden="true"></i> Next',
      prevText: 'Prev <i class="fa fa-arrow-left" aria-hidden="true"></i>',
      useCSS: false,
      infiniteLoop: true,
      hideControlOnEnd: false,
      easing: 'easeOutElastic',
      speed: 1500
    });

    //**** PHOTO ****//
    $('.fa-camera').click(function(){
      $('#photo').toggle('clip');
    });

    //**** ANIM ICONES FOOTER ****//
    $('.fa-github, .fa-facebook-official, .fa-twitter, .fa-envelope').hover(function(){
      $(this).addClass('fa-spin');
    }, function(){
      $(this).removeClass('fa-spin');
    });

    //**** CONTACT FOOTER ****//
    $('.fa-envelope, .fa-window-close').click(function(){
        $('#contact-form2').toggle('bounce', 'slow');
    });

    //**** TYPED JS ****//
    $('.animeType').typed({
      strings: ['TUIL Alexandre \n- Web Dev / Integrator'],
      contentType: 'html',
      typeSpeed: 30,
      showCursor: true,
      cursorChar: '<img src="images/chocowalk.gif" title="I Love Gaming!">'
    });

    $('.infoAbout').typed({
      strings: ["<i class='fa fa-mobile' aria-hidden='true'></i>Tel: 06 58 41 74 90\n<i class='fa fa-envelope-o' aria-hidden='true'></i>Mail:<a href='mailto:tuil_alexandre@hotmail.com@hotmail.com'>tuil_alexandre@hotmail.com</a>\n<i class='fa fa-address-card' aria-hidden='true'></i>Address: 244 rue de l'usine à chaux, 30480, Cendras"],
      contentType: 'html',
      startDelay: 2700,
      showCursor: false
    });

});
