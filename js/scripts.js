/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '.lightbox'
    });

});


// Image slider

!function(){for(var t=document.querySelectorAll(".image-spliter .mover"),e=t.length;e--;){var n=t[e].getBoundingClientRect().width,i=t[e].nextElementSibling,l=i.getBoundingClientRect().width;i.getBoundingClientRect().height;t[e].style.left=l/2-n/2+"px",i.style.clip="rect(0px, "+l/2+"px, 999px, 0px)";var s,c=0;t[e].addEventListener("mousedown",function(t){s=t.clientX,c=1}),t[e].addEventListener("mouseup",function(t){c=0}),t[e].addEventListener("mouseout",function(t){c=0}),t[e].addEventListener("touchstart",function(t){s=t.touches[0].clientX,c=1}),t[e].addEventListener("touchend",function(t){c=0}),t[e].addEventListener("mousemove",function(t){c&&(this.style.left=parseInt(this.style.left)+(event.clientX-s)+"px",s=event.clientX,this.nextElementSibling.style.clip="rect(0px, "+(this.getBoundingClientRect().width/2+parseInt(this.style.left))+"px, "+this.getBoundingClientRect().height+"px, 0px)")}),t[e].addEventListener("touchmove",function(t){c&&(this.style.left=parseInt(this.style.left)+(t.touches[0].clientX-s)+"px",s=t.touches[0].clientX,this.nextElementSibling.style.clip="rect(0px, "+(this.getBoundingClientRect().width/2+parseInt(this.style.left))+"px, "+this.getBoundingClientRect().height+"px, 0px)")})}window.addEventListener("resize",function(t){for(var e=document.querySelectorAll(".image-spliter .mover"),n=e.length;n--;){var i=e[n].getBoundingClientRect().width,l=e[n].nextElementSibling,s=l.getBoundingClientRect().width,c=l.getBoundingClientRect().height;e[n].style.left=s/2-i/2+"px",l.style.clip="rect(0px, "+s/2+"px, "+c+"px, 0px)"}})}();

// Image slider end