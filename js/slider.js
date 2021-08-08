var slideIndex = 0;
var timer;

$(document).ready(function () { caption_keyframe();cover_keyframe();slider() })
var caption = ["",
    "2D Character Concept",
    "2D Sprite Sheet",
    "3D Modeling",
    "Logo Design",
    "App Development",];

function slider() {
    anim()
    timer = setTimeout(slider,9000)
}

function anim() {
    if(document.hasFocus()) {
        clearTimeout(timer)

        var dots = $(".dot")
        var cov_slider = $(".cover");
        var cap_slider = $("#caption-slider");

        for(var i = 0;i<dots.length;i++)
            dots.eq(i).removeClass("active")

        slideIndex++;
        if(slideIndex > dots.length) {slideIndex=1}

        dots.eq(slideIndex-1).addClass("active")

        cov_slider.playKeyframe({
            name: 'coverslider',
            duration: '3s',
            timingFunction: 'linear',
            delay: '0s',
            direction: 'normal',
            fillMode: 'forwards'
        });
        cov_slider.css("background-image","url('img/slider/"+slideIndex+".jpg')")


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
        'from': {'left': '40%','opacity':'0%'},
        'to': {'left': '50%','opacity':'100%'},
    }]);
}

function cover_keyframe() {
    $.keyframe.define([{
        name: 'coverslider',
        'from': {' background-size': '100% auto','opacity':'0%'},
        'to': {' background-size': '110% auto','opacity':'100%'},
    }]);
}