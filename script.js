//alert



//Menu


$(function () {
    menu = $('nav ul');

    $('#toggle-btn').on('click', function (e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function () {
        var w = $(this).width();
        if (w > 580 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

    $('nav li').on('click', function (e) {
        var w = $(window).width();
        if (w < 580) {
            menu.slideToggle();
        }
    });
    $('.open-menu').height($(window).height());
});

var close = document.getElementsByClassName("closebtn");
var i;

// Loop through all close buttons
for (i = 0; i < close.length; i++) {
  // When someone clicks on a close button
  close[i].onclick = function(){

    // Get the parent of <span class="closebtn"> (<div class="alert">)
    var div = this.parentElement;

    // Set the opacity of div to 0 (transparent)
    div.style.opacity = "0";

    // Hide the div after 600ms (the same amount of milliseconds it takes to fade out)
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}

//Slideshow

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Reviews

var reviewIndex = 1;
showReviews(reviewIndex);

function plusReviews(n) {
    showReviews(reviewIndex += n);
}

function currentReview(n) {
    showReviews(reviewIndex = n);
}

function showReviews(n) {
    var i;
    var slides = document.getElementsByClassName("myReviews");
    if (n > slides.length) {
        reviewIndex = 1
    }
    if (n < 1) {
        reviewIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[reviewIndex - 1].style.display = "block";
}