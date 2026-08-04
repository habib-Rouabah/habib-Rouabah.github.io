// ===== Language Switcher =====
let currentLang = localStorage.getItem('portfolio-lang') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.lang = lang;

    // Update all translatable elements
    document.querySelectorAll('[data-en][data-fr]').forEach(el => {
        const text = el.getAttribute(`data-${lang}`);
        if (text) {
            // For elements that use innerHTML (like footer with &copy;)
            if (el.getAttribute(`data-${lang}`).includes('&')) {
                el.innerHTML = text;
            } else {
                el.textContent = text;
            }
        }
    });

    // Update active state on toggle buttons
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === lang);
    });

    // Update page title
    document.title = lang === 'fr' 
        ? 'Hadj Habib Rouabah — Ingénieur IA' 
        : 'Hadj Habib Rouabah — AI Engineer';
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
});

// Language toggle click handler
const langToggle = document.getElementById('langToggle');
langToggle.addEventListener('click', (e) => {
    const option = e.target.closest('.lang-option');
    if (option) {
        setLanguage(option.dataset.lang);
    } else {
        // Toggle between languages if clicking the button itself
        setLanguage(currentLang === 'en' ? 'fr' : 'en');
    }
});

// ===== Mobile Navigation Toggle =====
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile nav on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// ===== Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all animatable elements
document.querySelectorAll('.timeline-item, .project-card, .skill-category, .education-card, .stat-card, .about-text, .contact-content').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ===== Navbar scroll effect =====
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ===== Active nav link on scroll =====
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
        
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.style.color = '#2563eb';
            } else {
                navLink.style.color = '';
            }
        }
    });
});

// ===== Smooth scroll for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
