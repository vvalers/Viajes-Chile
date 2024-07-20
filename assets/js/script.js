/* smooth scroll */
$(document).ready(function(){
    var docEl = $(document),
        headerEl = $('header'),
        headerWrapEl = $('.wrapHead'),
        navEl = $('nav'),
        linkScroll = $('.scroll');
    
    docEl.on('scroll', function(){
      if ( docEl.scrollTop() > 60 ){
        headerEl.addClass('fixed-to-top');
        headerWrapEl.addClass('fixed-to-top');
        navEl.addClass('fixed-to-top');
      }
      else {
        headerEl.removeClass('fixed-to-top');
        headerWrapEl.removeClass('fixed-to-top');
        navEl.removeClass('fixed-to-top');
      }
    });
    
    linkScroll.click(function(e){
        e.preventDefault();
        $('body, html').animate({
           scrollTop: $(this.hash).offset().top
        }, 500);
     });
  });
  
  /* tooltip */
  $(function myFunction () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  function myFunction() {
    alert("¡Hola! Somos la mejor paginas de viaje!");
  }
  
  function titulo2(){
    console.log('CONTACTO----........');
    var elementoCONTACTO = document.getElementById('titulo2');
    console.log(elementoCONTACTO);
    elementoCONTACTO.style.color = 'PINK';

  }
