var ishamburgermenu = false;

$(document).ready(function () {
    initskillanim()
    initmultidisciplinaryanim()
    initportfolioanim();

    var waypoints = []
    $('.waypoint').each(function(index, value) {

        var waypoint = new Waypoint({
            element: value,
            handler: function() {
                switch (this.element.id) {
                    case "skill":
                        skillanim()
                        break;
                    case "multidisciplinary":
                        multidisciplinaryanim()
                        break;   
                    case "portfolio":
                        portfolioanim()
                        break;      
                    default:
                        break;
                }
       
                    
                

                if(!ismobile()){
                    $("nav li").each(function () {
                        $(this).css({"background-color":"transparent"})
                    })
                    $("#nav"+this.element.id).css({"background-color":"#41525e"})
               
                    
                }

            },
            offset: '50%'
        });
        waypoints.push(waypoint)
    });


})




$(window).scroll(function () {

    var scroll = $(this).scrollTop();
    var el_header = $("header");
    if(ismobile()){
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
    }else{
        if(scroll === 0){
            $("nav li").each(function () {
                $(this).css({"background-color":"transparent"})
            })
            $("#navabout").css({"background-color":"#41525e"})
 
        }
    }

})

$(document).click(function(e) {
    if(ismobile()){
        if(e.target.id !== "navicon"){
            $("nav > li:not(:first-child)").hide();
            ishamburgermenu=false;
        }
    }
})

function hamburgermenu(){
    const el_nav = $("nav > li:not(:first-child)");
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
                "background-color": "#2c3840",
                "border": "3px solid #2c3840",
                "color":"#f5f5f5"
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

function initmultidisciplinaryanim(){
    var el = $(".multidisciplinary div");
    el.each(function(){
        $(this).css({
            "opacity":"0"
        })
    });
}

function multidisciplinaryanim(){
    var ele = $(".multidisciplinary div");
    $.each(ele, function(i, el){        
        setTimeout(function(){
           $(el).animate({
            'opacity':1
           }, "fast");
        },(i * 50));
        
    });
}

function initportfolioanim(){
    var el = $("#portfolio .flex-container .flex-item");
    el.each(function(){
        $(this).css({
            "opacity":"0"
        })
    });
}

function portfolioanim(){
    var ele = $("#portfolio .flex-container .flex-item");
    $.each(ele, function(i, el){        
        setTimeout(function(){
           $(el).animate({
            'opacity':1
           }, "slow");
        },i * 500);
        
    });
}

function initskillanim(){
    var el = $('div.progressbar div');
    el.each(function(){
        $(this).css({"width":"0"})
    });
}


function skillanim() {
    var num=0;
    var pbval = ["75", "75", "70","20","70","5","70","75","70","75","5","45","5","60","5","5","5","5"];
    var el = $('div.progressbar div');
    el.each(function(){
        arr_keyframe(num,pbval[num])
        $(this).playKeyframe({
            name: 'pbanim'+num,
            duration: '1s',
            timingFunction: 'linear', //
            delay: '0s',
            direction: 'normal',
            fillMode: 'forwards'
        });

        num++;
    })
    num=0;
    $('.skill_label .lblpercent').each(function () {
        animateValue(this, 0, pbval[num], 1000);
        num++
    });

}




function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start) +"%";
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

function scrollToElement(el) {



    $("html, body").animate({
        scrollTop: $("#"+el).position().top - 80
    }, {
        duration:500,
        complete: function () {
  
            $("nav li").each(function () {
                $(this).css({"background-color":"transparent"})
            })

            $("#nav"+el).css({"background-color":"#41525e","position":"relative"})
         

        }
    });
}


function ismobile(){
    return window.innerWidth < 1000;
}

function open_link(link){
    window.open(link,"_blank");
}

function setBubble(id){
    $("#"+id).prepend("\n" +
        "<section class=\"sticky\">\n" +
        "  <div class=\"bubbles\">\n" +
        "      <div class=\"bubble\"></div>\n" +
        "    <div class=\"bubble\"></div>\n" +
        "    <div class=\"bubble\"></div>\n" +
        "    <div class=\"bubble\"></div>\n" +
        "    <div class=\"bubble\"></div>\n" +
        "    <div class=\"bubble\"></div>\n" +
        "    <div class=\"bubble\"></div>\n" +
        "    <div class=\"bubble\"></div>\n" +
        "    <div class=\"bubble\"></div>\n" +
        "    <div class=\"bubble\"></div>\n" +
        "    \n" +
        "  </div>\n" +
        "</section>");
}