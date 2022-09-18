$(document).ready(function () {
    $("html").niceScroll({
        cursorcolor: "#424242", // change cursor color in hex
        cursorwidth: "12px", // cursor width in pixel (you can also write "5px")
        cursorborder: "1px solid #424242", 
        scrollspeed: 18, // scrolling speed
        mousescrollstep: 30,
        cursordragspeed: 0.2,
        autohidemode: "false",
    });
});

window.addEventListener('DOMContentLoaded', animation)
var img = document.getElementsByTagName('img')[0]

function animation() {
    img.className = 'logo'
}

setTimeout(() => {
    $("nav ul li a.anchor").click(function(e){
        e.preventDefault();

        var id = $(this).attr("href"),
            targetOffset = $(id).offset().top
        $("html, body").animate({
            scrollTop: targetOffset}, 500)
        })
}, 1000);
