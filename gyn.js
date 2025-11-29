document.addEventListener('DOMContentLoaded', () => {
    
    /* =========================================
       1. SCROLL REVEAL ANIMATION (The "Wow" Factor)
       ========================================= */
    // Namma animate panna vendiya elements-a select panrom
    const revealElements = document.querySelectorAll('.service-card, .section-title, #about img, #about p, .hero-content, .class-table, .contact-form');

    // Ovvoru element-kum 'hidden' class add panrom (CSS la opacity: 0 iruku)
    revealElements.forEach(el => el.classList.add('hidden'));

    // Intersection Observer setup (Element screen la theriyudha nu paakum)
    const observerOptions = {
        threshold: 0.15, // 15% element therinja udane trigger aagum
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Screen la vandha udane 'visible' class add aagum
                entry.target.classList.add('visible');
                // Oru vaati vandha pothum, thirumba hide aaga vendam
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => revealOnScroll.observe(el));


    /* =========================================
       2. ACTIVE LINK HIGHLIGHTER (Scroll Spy)
       ========================================= */
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // User scroll panra edathula endha section iruku nu check panrom
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    });


    /* =========================================
       3. MOBILE MENU AUTO-CLOSE
       ========================================= */
    // Mobile la menu click pannadhum close aaganum, illana screen maraikum
    const navItems = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Bootstrap classes use panni menu va close panrom
            if (navbarCollapse.classList.contains('show')) {
                new bootstrap.Collapse(navbarCollapse).hide();
            }
        });
    });


    /* =========================================
       4. CONTACT FORM MOCK SUBMISSION
       ========================================= */
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Page reload aagaama thadukkom

            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;

            // Button Text Change Effect
            btn.innerText = 'Sending... 🚀';
            btn.style.opacity = '0.7';
            btn.disabled = true;

            // Fake delay (Server ku pora maari)
            setTimeout(() => {
                btn.innerText = 'Message Sent! ✅';
                btn.style.backgroundColor = '#28a745'; // Green color
                btn.style.borderColor = '#28a745';
                
                // Form clear panrom
                contactForm.reset();

                // 3 seconds kalichu button pazhaya nilaiku varum
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.backgroundColor = ''; // Reset to CSS default
                    btn.style.borderColor = '';
                    btn.style.opacity = '1';
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }

    /* =========================================
       5. NAVBAR BLUR EFFECT ON SCROLL
       ========================================= */
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
            navbar.style.padding = '10px 0'; // Konjam shrink aagum
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.9)'; // Default transparency
            navbar.style.padding = '1rem 0';
            navbar.style.boxShadow = 'none';
        }
    });

});