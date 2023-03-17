let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menyIcon.onclick=()=> {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};


let sections=document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec=> {
        let top = window.scrollY;
        let offset = se.offsetTop -150;
        let height = sec.offsetHeight;
        let id =sec.getAttribute('id');

        if (top >=offst && top < offset + height){
        navLinks.forEach(navLinks => {
            navLinks.classList.remove('active');
            document.querySelector( 'header nav a[href*=' + id + ']').classList.add('active');
        });

      };

   });

//    sticky navbar
let header = document.querySelector('header');
header.classList.toggle('sticky',window.scrolly >100);
// remove toggle

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');



};

// Scroll revel
ScrollReveal({ 
    //reset: true,
    dsitance:'80px',
    duration:2000,
delay: 200

});

ScrollReveal().reveal('.home-content,.heading' ,{ origin: 'top' });
ScrollReveal().reveal('.home-img,.service-container,.portfolio-box,.contact form' ,{ origin: 'bottom' });
ScrollReveal().reveal('.home-content h1,.about-img' ,{ origin: 'left' });
ScrollReveal().reveal('.home-content p,.about-content' ,{ origin: 'right' });


// ttped JS
const typed = new Typed('.multiple-text',{
    strings:['Frontend Developer','Youtube','Blogger'],
typeSpeed:100,
backSpeed:100,
backdelay:1000,
loop:true
});