function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
function animateMe(){
  setInterval(function(){ 
      var random = Math.floor(Math.random() * $('.item').length);
      var m = Math.floor(Math.random() * 7);
      if (m===1) $('.item').slideUp().eq(random).show();
      else if (m===2) $('.item').slideDown().eq(random).show();
      else if (m===3) $('.item').slideUp().eq(random).show();
      else if (m===4) $('.item').fadeIn().eq(random).show();
      else if (m===5) $('.item').fadeOut().eq(random).show();
      else if (m===6) $('.item').hide().eq(random).show();
      else $('.item').show
      
  }, 3000);
  setInterval(function(){ 
      var random = Math.floor(Math.random() * $('.item').length);
      $('.item').show().eq(random).show();
  }, 2000);
} 
 $('.item').hover(function(event) {
        $(event.target).fadeOut(1000);
       console.log(event.target.id);
  }); 
$("#showAll").click(function(){
    			 $("#blue").show();
    			 $("#red").show();
    			 $("#green").show();
    			 $("img").show();

});
$(document).click(function(event) {
    $(event.target).hide();
    console.log(event.target.id);
    animateMe();
});

$(document).keypress(function(event) {
    $(document).show();
    $("body").show();
    $("div").show();
    console.log(event.which);

});

function animateMe(){
  setInterval(function(){ 
      var random = Math.floor(Math.random() * $('.item').length);
      var m = Math.floor(Math.random() * 7);
      if (m===1) $('.item').slideUp().eq(random).show();
      else if (m===2) $('.item').slideDown().eq(random).show();
      else if (m===3) $('.item').slideUp().eq(random).show();
      else if (m===4) $('.item').fadeIn().eq(random).show();
      else if (m===5) $('.item').fadeOut().eq(random).show();
      else if (m===6) $('.item').hide().eq(random).show();
      else $('.item').show
  }, 3000);
  setInterval(function(){ 
      var random = Math.floor(Math.random() * $('.item').length);
      $('.item').show().eq(random).show();
  }, 2000);
}  