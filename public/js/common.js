$(".header_menu").click(function(){
    $(this).toggleClass("active");
    $(".header_nav").toggleClass("active");
})

$(window).on("resize scroll",function(){
    if($(window).scrollTop()>0){
        $(".header").addClass("scroll");
    }else {
        $(".header").removeClass("scroll");
    }
})