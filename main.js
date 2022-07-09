const cursor = document.querySelector(".cursor-inner");
const cursor2 = document.querySelector(".cursor-outer");
document.addEventListener("mousemove", e=>{
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px"; 

    cursor2.style.top = e.pageY + "px";
    cursor2.style.left = e.pageX + "px"; 
})

const position = document.documentElement;
position.addEventListener('mousemove', e => {
    position.style.setProperty('--x', e.clientX + 'px');
})

const circleType = new CircleType(
    document.getElementById("rotated")
).radius(80);
$(window).scroll(function () {
    var offset = $(window).scrollTop();
    offset = offset * 0.4;

    $(".circular-text").css({
        "-moz-transform": "rotate("+ offset +"deg)",
        "-webkit-transform": "rotate("+ offset +"deg)",
        "-o-transform": "rotate("+ offset +"deg)",
        "-ms-transform": "rotate("+ offset +"deg)",
        "transform": "rotate("+ offset +"deg)",
    });
});
