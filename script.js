        const menuHamburger = document.querySelector(".menu-hamburger")
        const navLinks = document.querySelector(".nav-links")

        menuHamburger.addEventListener('click',()=>(
        navLinks.classList.toggle('mobile-menu')
        ))

    const images = [
         "assets/imagee/dev.png",     
         "assets/imagee/gamer.png",   
         "assets/imagee/night.png"   
        ];

    let index = 0;
        const heroImage = document.getElementById("heroImage");

    setInterval(() => {
        index = (index + 1) % images.length;
        heroImage.src = images[index];
        }, 3000);

        
    (function(){
    const btn = document.querySelector('.mag-btn');
    const shape = btn.querySelector('.shape');
    const text = btn.querySelector('.text');

    const STRENGTH = 0.18;

    function setOffset(tx, ty){
        shape.style.setProperty('--tx', tx + 'px');
        shape.style.setProperty('--ty', ty + 'px');
    }

    window.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        const dx = e.clientX - cx;
        const dy = e.clientY - cy;

        const tx = dx * STRENGTH;
        const ty = dy * STRENGTH;

        if (!btn.classList.contains('active')) {
            setOffset(tx, ty);
        }
    });

    text.addEventListener('mouseenter', () => {
        btn.classList.add('active');
        setOffset(0, 0);
    });

    text.addEventListener('mouseleave', () => {
        btn.classList.remove('active');
    });

    setOffset(0, 0);
})();


const sentences = [
    "I turn ideas into functional, responsive web experiences.",
    "Specializing in Modern Web & Mobile interfaces with clean, sharp UI.",
    "Focused on building fast, scalable, user-centered digital products."
];

let currentSentence = 0;
let currentChar = 0;
let typingSpeed = 60;   
let erasingSpeed = 35;  
let delayBetween = 1000; 

const typingText = document.getElementById("typingText");

function type() {
    if (currentChar < sentences[currentSentence].length) {
        typingText.textContent += sentences[currentSentence].charAt(currentChar);
        currentChar++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetween);
    }
}

function erase() {
    if (currentChar > 0) {
        typingText.textContent = sentences[currentSentence].substring(0, currentChar - 1);
        currentChar--;
        setTimeout(erase, erasingSpeed);
    } else {
        currentSentence = (currentSentence + 1) % sentences.length;
        setTimeout(type, 300);
    }
}

type();

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-up");
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
});



document.querySelectorAll('.project-wrapper').forEach(wrapper => {
  const card = wrapper.querySelector('.project-card');
  const beam = card.querySelector('.light-beam');
  const image = card.querySelector('img');
  const leftCard = wrapper.querySelector('.left-card');
  const rightCard = wrapper.querySelector('.right-card');

  wrapper.addEventListener('mouseenter', () => {
    gsap.to(beam, {opacity: 1, duration: 0.1});
    gsap.fromTo(beam, {x: '-150%'}, {x: '150%', duration: 0.6, ease: "power2.out"});

    // center image
    gsap.to(image, {filter: 'brightness(100%)', duration: 0.6, delay: 0.2});

    // side cards
    gsap.to(leftCard, {opacity: 1, scale: 1, x: '-20px', duration: 0.5});
    gsap.to(rightCard, {opacity: 1, scale: 1, x: '20px', duration: 0.5});
  });

  wrapper.addEventListener('mouseleave', () => {
    // Hide beam
    gsap.to(beam, {opacity: 0, duration: 0.2, x: '-150%'});
    gsap.to(image, {filter: 'brightness(10%)', duration: 0.4});

    // Hide side cards
    gsap.to(leftCard, {opacity: 0, scale: 0.8, x: '0px', duration: 0.3});
    gsap.to(rightCard, {opacity: 0, scale: 0.8, x: '0px', duration: 0.3});
  });
});
