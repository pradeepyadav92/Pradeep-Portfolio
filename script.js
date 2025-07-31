
        // Create animated particle
        function createParticles() {
            const particles = document.getElementById('particles');
            const particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.width = particle.style.height = Math.random() * 4 + 2 + 'px';
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = Math.random() * 4 + 4 + 's';
                particles.appendChild(particle);
            }
        }
         function toggleNav() {
    document.querySelector('.nav-links').classList.toggle('active');
  }

  // Optional: Add scroll effect for background change
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 10) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Smooth scrolling for navigation links
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

        // Scroll animations
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

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Form submission
      document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const form = e.target;
    const messageDiv = document.querySelector('.form-message');
    const formData = new FormData(form);

    fetch('https://formspree.io/f/xjkowqkp', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            messageDiv.textContent = "✅ Thank you! Your message has been sent.";
            messageDiv.classList.remove('error');
            form.reset();
        } else {
            messageDiv.textContent = "❌ Oops! Something went wrong. Please try again.";
            messageDiv.classList.add('error');
        }
    })
    .catch(error => {
        console.error("Error:", error);
        messageDiv.textContent = "❌ Could not send your message. Please check your connection.";
        messageDiv.classList.add('error');
    });
});


        // Initialize particles
        createParticles();

        // Add typing effect to hero title
        function typeWriter(element, text, speed = 100) {
            let i = 0;
            element.innerHTML = '';
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            type();
        }

        // Initialize typing effect after page load
        window.addEventListener('load', () => {
            const heroTitle = document.querySelector('.hero h1');
            const originalText = heroTitle.textContent;
            setTimeout(() => {
                typeWriter(heroTitle, originalText, 100);
            }, 500);
        });