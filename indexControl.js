window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("info").style.fontSize = "20px";
        document.getElementById("logo").height= "100";
        document.getElementById("logo").width= "130";
        document.getElementById("div-nav").style.display = "none";
        document.getElementById("div-nav").style.transition = "0.8";
        document.getElementById("mainContainer").style.paddingTop = "200px";

    } else {
        document.getElementById("info").style.fontSize = "30px";
        document.getElementById("logo").height= "200";
        document.getElementById("logo").width= "270";
        document.getElementById("div-nav").style.transition = "0.8";
        document.getElementById("mainContainer").style.paddingTop = "365px";
        document.getElementById("div-nav").style.display = "block";
    }
}

/*$(document).ready(function(){
    $("#pizzas").mouseover(function() {
        $("#pizzas").addClass("zoomInClass");
        }).mouseout(function() {
        $("#pizzas").removeClass("zoomOutClass");
        });
});*/

$(document).ready(function(){
    $("#pizzas").mouseover(function(){
        $("#pizzas").css("width", "95");
        $("#pizzas").css("height", "95");
    });
    $("#pizzas").mouseout(function(){
        $("#pizzas").css("width", "90");
        $("#pizzas").css("height", "90");
    });
    $("#deals").mouseover(function(){
        $("#deals").css("width", "95");
        $("#deals").css("height", "95");
    });
    $("#deals").mouseout(function(){
        $("#deals").css("width", "90");
        $("#deals").css("height", "90");
    });
    $("#wings").mouseover(function(){
        $("#wings").css("width", "95");
        $("#wings").css("height", "95");
    });
    $("#wings").mouseout(function(){
        $("#wings").css("width", "90");
        $("#wings").css("height", "90");
    });
    $("#bread").mouseover(function(){
        $("#bread").css("width", "95");
        $("#bread").css("height", "95");
    });
    $("#bread").mouseout(function(){
        $("#bread").css("width", "90");
        $("#bread").css("height", "90");
    });
    $("#salads").mouseover(function(){
        $("#salads").css("width", "95");
        $("#salads").css("height", "95");
    });
    $("#salads").mouseout(function(){
        $("#salads").css("width", "90");
        $("#salads").css("height", "90");
    });
    $("#dips").mouseover(function(){
        $("#dips").css("width", "95");
        $("#dips").css("height", "95");
    });
    $("#dips").mouseout(function(){
        $("#dips").css("width", "90");
        $("#dips").css("height", "90");
    });
    $("#desserts").mouseover(function(){
        $("#desserts").css("width", "95");
        $("#desserts").css("height", "95");
    });
    $("#desserts").mouseout(function(){
        $("#desserts").css("width", "90");
        $("#desserts").css("height", "90");
    });
    $("#drinks").mouseover(function(){
        $("#drinks").css("width", "95");
        $("#drinks").css("height", "95");
    });
    $("#drinks").mouseout(function(){
        $("#drinks").css("width", "90");
        $("#drinks").css("height", "90");
    });
    $("#infos").mouseover(function(){
        $("#infos").css("width", "95");
        $("#infos").css("height", "95");
    });
    $("#infos").mouseout(function(){
        $("#infos").css("width", "90");
        $("#infos").css("height", "90");
    });
});

function openNavBasic() {
    document.getElementById("basicNav").style.width = "100%";
}
function openNavVege() {
    document.getElementById("vegeNav").style.width = "100%";
}function openNavChicken() {
    document.getElementById("ChickenNav").style.width = "100%";
}function openNavMeat() {
    document.getElementById("MeatNav").style.width = "100%";
}
function closeNav() {
    var className = document.getElementsByClassName("overlay");
    className[0].style.width = "0%";
    className[1].style.width = "0%";
    className[2].style.width = "0%";
    className[3].style.width = "0%";
}

var slideIndex = 0;
showSlides(slideIndex);

function currentSlide(n) {
    slideIndex = n;
}

function showSlides() {
    var i;

    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;

    if (slideIndex > slides.length) {slideIndex = 1}

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 4000);

}