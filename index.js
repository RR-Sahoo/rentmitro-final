$(window).on('load', function() {
       $('#staticBackdrop').modal('show');
   });

$(".forgotpassword-link").click(function(){
   $('#staticBackdrop').modal('hide');
    $('#staticBackdrop-4').modal('show');
})

$(".signup-link").click(function(){
  $('#staticBackdrop').modal('hide');
   $('#staticBackdrop-3').modal('show');
})

// $(".login-button").click(function(){
//   $('#staticBackdrop').modal('hide');
//    $('#staticBackdrop-2').modal('show');
// })

$(".return-home-page-link").click(function(){
  $('#staticBackdrop-4').modal('hide');
   $('#staticBackdrop').modal('show');
})


$(".login-top-link").click(function(){

   $('#staticBackdrop').modal('show');
})

// if ( window.history.replaceState ) {
//         window.history.replaceState( null, null, window.location.href );
//     }

$(".login-link-modal-bottom").click(function(){

   $('#staticBackdrop').modal('show');
   $('#staticBackdrop-3').modal('hide');
})
