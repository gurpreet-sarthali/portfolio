// ===== Smooth Scrolling =====
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

// ===== Navbar Active Link =====
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===== CTA Buttons =====

const contactBtn = document.querySelector('.hero-buttons .btn-secondary');

const aboutBtn = document.querySelector('.about-btn');

if (aboutBtn) {
    aboutBtn.addEventListener('click', () => {
        document.querySelector('#about').scrollIntoView({
            behavior: 'smooth'
        });
    });
}

if (contactBtn) {
    contactBtn.addEventListener('click', () => {
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth'
        });
    });
}



// ===== Tech Stack Tabs =====
const techTabs = document.querySelectorAll('.tech-tab');
const techContents = document.querySelectorAll('.tech-tab-content');

techTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabName = tab.getAttribute('data-tab');
        
        // Remove active class from all tabs and contents
        techTabs.forEach(t => t.classList.remove('active'));
        techContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Add active class to corresponding content
        const activeContent = document.getElementById(tabName);
        if (activeContent) {
            activeContent.classList.add('active');
        }
    });
});

// ===== Skill Progress Animation =====
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target.querySelector('.skill-progress');
            if (progressBar) {
                progressBar.style.animation = 'slideIn 0.8s ease-out';
            }
            
            if (entry.target.classList.contains('project-card')) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out';
            }
        }
    });
}, observerOptions);

// Observe skill items
document.querySelectorAll('.skill-item').forEach(item => {
    observer.observe(item);
});

// Observe project cards
document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
});

// ===== Animation Keyframes =====
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { width: 0%; }
        to { width: inherit; }
    }
`;
document.head.appendChild(style);

// ===== Navbar Styling on Scroll =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 255, 136, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});


// ===== Carousel Navigation =====
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        console.log('Previous carousel item');
    });

    nextBtn.addEventListener('click', () => {
        console.log('Next carousel item');
    });
}


