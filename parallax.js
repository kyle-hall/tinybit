
window.addEventListener('load', () => {
   const parallaxContainer = document.querySelector('.parallax-container');

   $(window).scroll(() => {
       let winScroll = $(this).scrollLeft();
       
       $('.box').css({
           'transform': 'translate(' + winScroll * 1.3 + '%, 0px)'
       });

       $('.small-box').css({
           'transform': 'translate(-' + winScroll * 2 + '%, 0px)'
       });

       $('.tower').css({
           'transform': 'translate(-' + winScroll / 8 + '%, 0px)'
       });

       $('.blue-box').css({
           'transform': 'translate(-' + winScroll / 3 + '%, 0px)'
       });
   });
});

