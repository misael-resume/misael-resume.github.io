var slideIndex = 0;
var timer;

$(document).ready(function () {

    caption_keyframe();cover_keyframe();slider()
})
var caption = ["",
    "2D Sprite Sheet",
    "Vector Art",
    "3D Modeling",
    "2D Character Concept",];

function slider() {
    anim()
    timer = setTimeout(slider,5000)
}


function anim() {
    if(!document.hidden) {
        clearTimeout(timer)

        var dots = $(".dot")
        var cov_slider = $(".img-slider");

        var cap_slider = $("#caption-slider");

        for(var i = 0;i<dots.length;i++)
            dots.eq(i).removeClass("active")

        slideIndex++;
        if(slideIndex > dots.length) {slideIndex=1}

        dots.eq(slideIndex-1).addClass("active")

        cov_slider.playKeyframe({
            name: 'coverslider',
            duration: '2.5s',
            timingFunction: 'linear',
            delay: '0s',
            direction: 'normal',
            fillMode: 'forwards'
        });
        cov_slider.css("background-image","url('img/slider/"+slideIndex+".png')")
        cap_slider.playKeyframe({
            name: 'captionslider',
            duration: '1s',
            timingFunction: 'linear',
            delay: '0s',
            direction: 'normal',
            fillMode: 'forwards'
        });
        cap_slider.html(caption[slideIndex])

    }
}

function curSlide(n) {
    clearTimeout(timer)
    slideIndex = n-1
    slider()
}

function caption_keyframe() {
    $.keyframe.define([{
        name: 'captionslider',
        'from': {'opacity':'0%'},
        'to': {'opacity':'100%'},
    }]);
}

function cover_keyframe() {
    $.keyframe.define([{
        name: 'coverslider',
        'from': {'opacity':'0%'},
        'to': {'opacity':'100%'},
    }]);
}

