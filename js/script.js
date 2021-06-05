var ishamburgermenu = false;

$(document).ready(function () {
    skillanim()
})

$(window).scroll(function () {
    var scroll = $(this).scrollTop();
    var el_header = $("header");
    if(scroll > 0){
        el_header.css({
            "box-shadow":"0 0 2px rgba(0,0,0,0.5)",
            "position":"fixed",
            "left":"0",
            "top":"0",
            "width":"100%"
        })
    }else{
        el_header.css({
            "box-shadow":"0 0 2px transparent",
            "position":"static",
            "left":"0",
            "top":"0",
            "width":"100%"
        })
    }
})

$(document).click(function(e) {
    if(ismobile()){
        if(e.target.id !== "navicon"){
            $(".nav > li:not(:first-child)").hide();
            ishamburgermenu=false;
        }
    }
})

function hamburgermenu(){
    const el_nav = $(".nav > li:not(:first-child)");
    if(ishamburgermenu){
        el_nav.hide();
        ishamburgermenu=false;
    }else{
        ishamburgermenu=true;
        el_nav.show();
        var distance = 8;
        var i = 0;
        el_nav.each(function(){
            if(i>0){ distance = distance +40; }
            $(this).css({
                "padding":"8px",
                "text-align":"center",
                "position":"absolute",
                "display":"block",
                "left":"0",
                "margin-top":distance,
                "width":"100%",
                "background-color": "#ECF0F1",
                "border": "3px solid #ECF0F1",
                "color":"#2C3E50"
            })
            i++;
        });
    }
}


function arr_keyframe(num,value) {
    $.keyframe.define([{
        name: 'pbanim'+num,
        'from': {'width': '0'},
        'to': {'width': value+'%'},
    }]);
}

function skillanim() {
    var num=0;
    var pbval = ["100", "30", "30","20","80","80","70","20","80","100","90","50","70"];
    var el = $('div.progressbar div');
    el.each(function(){
        $(this).css({"width":"0"})
    });
    el.each(function(){
        arr_keyframe(num,pbval[num])
        $(this).playKeyframe({
            name: 'pbanim'+num,
            duration: '1s',
            timingFunction: 'linear', //
            delay: '0s',
            direction: 'normal',
            fillMode: 'forwards',
            complete: function(){}
        });
        num++;

    })

}
function scrollToElement(el) {
    $("html, body").animate({
        scrollTop: $("#"+el).position().top - 80
    }, {
        duration:500,
        complete: function () {
            if(el==="skill")
                skillanim()
        }
    });
}

function ismobile(){
    return window.innerWidth < 1000;
}

function open_link(link){
    window.open(link,"_blank");
}
