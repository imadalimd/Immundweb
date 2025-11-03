// =================== Menu Icon Toggle ===================
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('.header');

// Toggle menu visibility
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// =================== Header Sticky and Active Link ===================
window.addEventListener('scroll', () => {
    // Sticky Header
    if (window.scrollY > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
    
    // Active Link on Scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');
    
    let current = '';
    sections.forEach(sec => {
        const sectionTop = sec.offsetTop;
        const sectionHeight = sec.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = sec.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// =================== Contact Form Handling ===================
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Create email content
    const emailContent = `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
    `.trim();
    
    // Create mailto link
    const mailtoLink = `mailto:imadaliwork01@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailContent)}`;
    
    // Open default email client
    window.open(mailtoLink, '_blank');
    
    // Show success message
    showSuccessMessage();
    
    // Reset form
    this.reset();
});

function showSuccessMessage() {
    // Create success message element
    const successMsg = document.createElement('div');
    successMsg.className = 'success-message';
    successMsg.innerHTML = `
        <i class='bx bx-check-circle'></i>
        <span>Message prepared! Please check your email client to send.</span>
    `;
    
    // Style the success message
    successMsg.style.cssText = `
        background: #00ffaa;
        color: #000;
        padding: 15px 20px;
        border-radius: 10px;
        margin: 20px 0;
        text-align: center;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        animation: fadeIn 0.5s ease-in;
    `;
    
    // Add to contact form
    const contactForm = document.getElementById('contactForm');
    contactForm.parentNode.insertBefore(successMsg, contactForm.nextSibling);
    
    // Remove after 5 seconds
    setTimeout(() => {
        successMsg.style.animation = 'fadeOut 0.5s ease-out';
        setTimeout(() => {
            successMsg.remove();
        }, 500);
    }, 5000);
}

// Add fadeOut animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-10px); }
    }
`;
document.head.appendChild(style);

// =================== Copyright Section Animations ===================
const copyrightObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1
});

// Observe copyright section elements
document.querySelectorAll('.service-card, .step, .story').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  copyrightObserver.observe(el);
});

// WhatsApp click tracking for copyright service
document.querySelectorAll('.btn-whatsapp').forEach(btn => {
  btn.addEventListener('click', function() {
    console.log('Copyright help requested via WhatsApp');
  });
});

// =================== Scroll Reveal Animation ===================
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
    reset: true
});

ScrollReveal().reveal('.home-content, .heading', { 
    origin: 'top',
    interval: 200
});

ScrollReveal().reveal('.home-img, .home-logo-mobile, .hobbies-container, .project-box, .contact-container', { 
    origin: 'bottom',
    interval: 200
});

ScrollReveal().reveal('.home-content h1, .about-img', { 
    origin: 'left'
});

ScrollReveal().reveal('.home-content p, .about-content', { 
    origin: 'right'
});

// =================== Typed JS (Typing Text Effect) ===================
const typed = new Typed('#element', {
    strings: ['WhatsApp Bot Developer', 'Web Developer', 'Video Editor', 'App Maker', 'Copyright Expert'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// =================== Smooth Scrolling ===================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// =================== Loading Animation ===================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Initial body opacity
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease-in';
