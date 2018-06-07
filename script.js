window.onscroll = () => {
    const x = document.querySelector('#xl-nav-home');
    const y = document.querySelector('#xl-nav-servis');
    const z = document.querySelector('#xl-nav-galerija');
    const w = document.querySelector('#xl-nav-kontakt');
    if(this.scrollY > 0 && this.scrollY < 980) x.className="nav-highlight";
        else x.className="";
    if(this.scrollY > 951 && this.scrollY < 1450) y.className="nav-highlight";
        else y.className="";
    if(this.scrollY > 1451 && this.scrollY < 2100) z.className="nav-highlight";
        else z.className="";
    if(this.scrollY > 2100) w.className="nav-highlight";
        else w.className="";
};

// auid-modals
function audiModal1(){
    document.getElementById("audi-1-modal").style = "display: block;"
}
function closeAudi1(){
    document.getElementById("audi-1-modal").style = "display: none;"
}
//
function audiModal2(){
    document.getElementById("audi-2-modal").style = "display: block;"
}
function closeAudi2(){
    document.getElementById("audi-2-modal").style = "display: none;"
}
//
function audiModal3(){
    document.getElementById("audi-3-modal").style = "display: block;"
}
function closeAudi3(){
    document.getElementById("audi-3-modal").style = "display: none;"
}
// bmw-modals
function bmwModal1(){
    document.getElementById("bmw-1-modal").style = "display: block;"
}
function closeBmw1(){
    document.getElementById("bmw-1-modal").style = "display: none;"
}
//
function bmwModal2(){
    document.getElementById("bmw-2-modal").style = "display: block;"
}
function closeBmw2(){
    document.getElementById("bmw-2-modal").style = "display: none;"
}
//
function bmwModal3(){
    document.getElementById("bmw-3-modal").style = "display: block;"
}
function closeBmw3(){
    document.getElementById("bmw-3-modal").style = "display: none;"
}
// bmw-modals
 function landroverModal1(){
    document.getElementById("landrover-1-modal").style = "display: block;"
}
function closeLR1(){
    document.getElementById("landrover-1-modal").style = "display: none;"
}
//
function landroverModal2(){
    document.getElementById("landrover-2-modal").style = "display: block;"
}
function closeLR2(){
    document.getElementById("landrover-2-modal").style = "display: none;"
}
//
function landroverModal3(){
    document.getElementById("landrover-3-modal").style = "display: block;"
}
function closeLR3(){
    document.getElementById("landrover-3-modal").style = "display: none;"
}
// var didScroll;
// var lastScrollTop = 0;
// var delta = 5;
// var navbarHeight = $('.nav-down').outerHeight();
// $(window).scroll(function(event){
//     didScroll = true;
// });
// setInterval(function() {
//     if (didScroll) {
//         hasScrolled();
//         didScroll = false;
//     }
// }, 250);
// function hasScrolled() {
//     var st = $(this).scrollTop();
//     if(Math.abs(lastScrollTop - st) <= delta)
//         return;
//     if (st > lastScrollTop && st > navbarHeight){
//         // Scroll Down
//         $('.nav-down').removeClass('nav-down').addClass('nav-up');
//     } else {
//         // Scroll Up
//     if(st + $(window).height() < $(document).height()) {
//             $('.nav-up').removeClass('nav-up').addClass('nav-down');
//         }
//     }
// lastScrollTop = st;
// }
$('#toggleOn').click(function(){
   $('.nav-active').show();
   $('#toggleOn').hide(); 
});
$('#toggleOff').click(function(){
    $('.nav-active').hide();
    $('#toggleOn').show();
});
//kontakt main img
$("#bg-img-kontakt").click(function(){
    $('html, body').animate({
        scrollTop: $('.info').offset().top
    }, 1000);
});
//nav-mobile
$("#nav-home").click(function() {
    $('html, body').animate({
        scrollTop: $('.bg-img').offset().top
    }, 500);
    $('.nav-active').hide();
    $('#toggleOn').show();
});
$("#nav-servis").click(function() {
    $('html, body').animate({
        scrollTop: $('.description').offset().top
    }, 500);
    $('.nav-active').hide();
    $('#toggleOn').show();
});
$("#nav-galerija").click(function() {
    $('html, body').animate({
        scrollTop: $('.gallery').offset().top
    }, 500);
    $('.nav-active').hide();
    $('#toggleOn').show();
});
$("#nav-kontakt").click(function() {
    $('html, body').animate({
        scrollTop: $('.info').offset().top
    }, 500);
    $('.nav-active').hide();
    $('#toggleOn').show();
});
//nav-xl-displays
$("#xl-nav-home").click(function() {
    $('html, body').animate({
        scrollTop: $('.bg-img').offset().top
    }, 500);
});
$("#xl-nav-servis").click(function() {
    $('html, body').animate({
        scrollTop: $('.description').offset().top
    }, 500);
});
$("#xl-nav-galerija").click(function() {
    $('html, body').animate({
        scrollTop: $('.gallery').offset().top
    }, 500);
});
$("#xl-nav-kontakt").click(function() {
    $('html, body').animate({
        scrollTop: $('.info').offset().top
    }, 500);
});
//footer
$("#footer-home").click(function() {
    $('html, body').animate({
        scrollTop: $('.bg-img').offset().top
    }, 500);
});
$("#footer-servis").click(function() {
    $('html, body').animate({
        scrollTop: $('.description').offset().top
    }, 500);
});
$("#footer-galerija").click(function() {
    $('html, body').animate({
        scrollTop: $('.gallery').offset().top
    }, 500);
});   
$("#footer-kontakt").click(function() {
    $('html, body').animate({
        scrollTop: $('.info').offset().top
    }, 500);
}); 