$( document ).ready(function() {
    //On stock notre input dans uen variable
    $input = $('input');
    //Au clic des liens de menu
    $( "#menu" ).children().click(function( event ) {
      //On set le prop à checked
      $input.prop("checked", !$input.prop("checked"));
      event.stopPropagation();
    });
  });

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-151176568-1');