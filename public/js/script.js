var navbar = document.querySelector('.mynav');
var home = document.querySelector('.home-page');
var aboutus = document.querySelector('.aboutus-page');
var courses = document.querySelector('.courses-page');
// var work = document.querySelector('.work-page');
var contact = document.querySelector('.contactus-page');

window.onscroll = function() {

    // pageYOffset or scrollY
    if (window.pageYOffset > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    if (window.pageYOffset >= 0 && window.pageYOffset < 700) {
        home.classList.add('active');
    } else {
        home.classList.remove('active');
    }

    if (window.pageYOffset >= 700 && window.pageYOffset < 1400) {
        aboutus.classList.add('active');
    } else {
        aboutus.classList.remove('active');
    }

    if (window.pageYOffset >= 1400 && window.pageYOffset < 2100) {
        courses.classList.add('active');
    } else {
        courses.classList.remove('active');
    }

    if (window.pageYOffset >= 2100 && window.pageYOffset < 2800) {
        contact.classList.add('active');
    } else {
        contact.classList.remove('active');
    }
    // if (window.pageYOffset >= 2800) {
    //     contact.classList.add('active');
    // } else {
    //     contact.classList.remove('active');
    // }
}