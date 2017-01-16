$(document).ready(function(){
    console.log("Teste");
   $('.slider-apresentacao').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        controls:true,
    });
});