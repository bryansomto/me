$(document).ready(function(){
  $(window).scroll(function(){
    var windowTop = $(this).scrollTop() + 150;
    $("section").each(function(){
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowTop){ //object comes into view (scrolling down)
        if ($(this).css("opacity")==1) {$(this).fadeTo(1000,0);
        }
      } 
      //object goes out of view (scrolling up)
      else if ($(this).css("opacity")==0) {
        $(this).fadeTo(1000,1);
      }
    });
  }).scroll()//invoke scroll-handler on page-load
});