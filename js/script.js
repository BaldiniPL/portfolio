$(function(){

   var menuOffset = $('.menu').offset();

   $(document).on('scroll', function(){
       var scrollTop = $(document).scrollTop();

      if(scrollTop > menuOffset.top){
          $('.menu').addClass('fixed');
      }else{
          $('.menu').removeClass('fixed');
      }
   });

   var section1OffsetTop = $('.section1').offset().top;
   var section2OffsetTop = $('.section2').offset().top;
   var section3OffsetTop = $('.section3').offset().top;

   $(document).on('scroll',function(){

       var scrollTop = $(document).scrollTop();
       var activeLi;

       if (scrollTop < section2OffsetTop) {
           activeLi = $('.menu-items>li:nth-child(1)');
       } else if (scrollTop < section3OffsetTop){
           activeLi = $('.menu-items>li:nth-child(2)');
       } else {
           activeLi = $('.menu-items>li:nth-child(3)');
       }

       activeLi.addClass('active');
       $('.menu-items>li').not(activeLi).removeClass('active');
   });

});

