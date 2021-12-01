alert('Sticky navbar');
window.onscroll = function(){
    sticky_nav_bar();
}

var navBar = document.querySelector('nav');
var navBar_sticky_position = navBar.offsetTop;
var logo = document.querySelector('.nav-logo');

function sticky_nav_bar(){
    if(window.pageYOffset >= navBar_sticky_position){
        navBar.classList.add("sticky_navbar");
        navBar.classList.add("add_logo_on_navbar");
        logo.style.display="inline";
    }
    else{
        navBar.classList.remove("sticky_navbar");
        navBar.classList.remove("add_logo_on_navbar");
        logo.style.display="none";
    }
}
