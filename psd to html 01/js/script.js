$(function(){
    
    var menu_position = $('.header_part').offset().top;
    
    //scroll function
   $(window).on('scroll',function(){
     var winscroll = $(window).scrollTop();
       
   //menu bar  
       
    var h_p = $('.header_part');
       
   if(winscroll > menu_position)
       {
           h_p.addClass('header_part_add');
       }
    else
       {
           h_p.removeClass('header_part_add');     
       }
    
    //back to top  
       
    var b_t_p =  $('.backTOtop');  
    if(winscroll > 1050){
       b_t_p.fadeIn(2000);
    }else{
       b_t_p.fadeOut(1000); 
    }
            
   });
    
      //click function
    $('.backTOtop').on('click',function(){
        $('body,html').animate({
            scrollTop : 0
        },1000);
    })
    
    
    
    $(window).on('load',function(){
        $('.perloader_main').delay(1000).fadeOut(1000);
    });
    
    
//    banner slide function
    $('.banner_slider').slick({
       slidesToShow: 1,
       slidesToScroll: 1,
       arrows: false,
//       autoplay: true,
       speed: 1000,
       autoplaySpeed: 2000,
    });
//  item part slide    
    $('.item_part_slide').slick({
       slidesToShow: 3,
       slidesToScroll: 1,
       arrows: false,
       autoplay: true,
       speed: 1000,
       autoplaySpeed: 2000,
    });
});