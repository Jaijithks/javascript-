/* ========== CUSTOM CURSOR ========== */
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // Dot follows exactly
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Outline follows with a slight delay
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Add hover effect to links and buttons
const interactables = document.querySelectorAll('a, button, .glass-card');
interactables.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorOutline.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
        cursorOutline.classList.remove('hover');
    });
});

/* ========== SHOW MENU ========== */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/* ========== REMOVE MENU MOBILE ========== */
const navLink = document.querySelectorAll('.nav-link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ========== CHANGE BACKGROUND HEADER ========== */
const scrollHeader = () =>{
    const header = document.querySelector('.header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* ========== SCROLL SECTIONS ACTIVE LINK ========== */
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active')
        }else{
            sectionsClass.classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* ========== SCROLL REVEAL ANIMATION ========== */
const revealElements = document.querySelectorAll('.reveal');

const reveal = () => {
    for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 100; // Trigger point

        if (elementTop < windowHeight - elementVisible) {
            revealElements[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', reveal);
// Trigger once on load
reveal();

/* ========== CONTACT FORM ========== */
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // Simulate sending form
    const submitBtn = contactForm.querySelector('button');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = 'Sending... <i class="ri-loader-4-line ri-spin"></i>';
    
    setTimeout(() => {
        contactMessage.textContent = 'Message sent successfully ✅'
        contactMessage.style.color = 'var(--primary-color)'
        
        setTimeout(() => {
            contactMessage.textContent = ''
            submitBtn.innerHTML = originalText;
            contactForm.reset()
        }, 5000)
    }, 2000);
}

contactForm.addEventListener('submit', sendEmail)
