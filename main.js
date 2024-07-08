/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle');
    navClose = document.getElementById('nav-close');

 /* Menu show */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav__link, we remove the show menu close link
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header')
    //Add a class if the bottom offset is greater than 50 of the viewpoint
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewpoint height, add the 
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav__menu a[href+=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }        
    })
}
window.addEventListener('scroll', scrollActive)
/*=============== SCROLL REVEAL ANIMATION ===============*/
 // Initialize ScrollReveal for the home data
 ScrollReveal().reveal('.home__data', {
    duration: 1000, // Duration of the animation in milliseconds
    origin: 'left', // Origin of the animation (e.g., 'bottom', 'top', 'left', 'right')
    distance: '50px', // Distance the element moves during the reveal
    delay: 500, // Delay before the animation starts in milliseconds
    reset: false // Whether the animation resets when scrolling out of view
});

 // Initialize ScrollReveal for the recipe section
ScrollReveal().reveal('.recipe', {
    duration: 2000, 
    origin: 'bottom', 
    distance: '50px', 
    delay: 900, 
    reset: false,
});


 // Initialize ScrollReveal for the popular section
 ScrollReveal().reveal('.popular', {
    duration: 2000, 
    origin: 'right', 
    distance: '50px',
    delay: 800, 
    reset: false,
});

// Initialize ScrollReveal for the delivery
ScrollReveal().reveal('.delivery', {
    duration: 2000, 
    origin: 'left', 
    distance: '50px',
    delay: 700, 
    reset: false,
});

// Initialize ScrollReveal for the contact
ScrollReveal().reveal('.contact', {
    duration: 2000, 
    origin: 'bottom', 
    distance: '50px',
    delay: 600, 
    reset: false,
});




