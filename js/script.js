

$(function(){
    $('.bars').click(function(){
        $('.menu_wrapper').toggleClass('open_menu');
        $('.menu_overlay').toggle()

    })

    $('.back_to_top').click(function(){
        $('html, body').animate({scrollTop: 0}, 1000)
    })

    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();

        if(scrollTop > 500){
            $('.back_to_top').show(500);
        }else{
            $('.back_to_top').hide(500);
        }
    })



    $('.menu_overlay').click(function(){
        $('.menu_wrapper').removeClass('open_menu');
        $('.menu_overlay').toggle();
    })

})