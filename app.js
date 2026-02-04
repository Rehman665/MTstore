// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (navLinks) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Newsletter Form Submission (Fixed Template Literals)
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput) {
                const email = emailInput.value;
                if (email) {
                    // Yahan backticks (`) use karein
                    alert(`Thank you for subscribing with email: ${email}`);
                    this.reset();
                } else {
                    alert("Please enter a valid email address.");
                }
            }
        });
    }

    // Cart Feedback (Fixed Template Literals)
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('card-button')) {
            // Visual feedback
            const originalText = e.target.textContent;
            e.target.textContent = 'Added!';
            e.target.style.backgroundColor = '#28a745';
            
            setTimeout(() => {
                e.target.textContent = originalText;
                if (e.target.classList.contains('charger-button')) {
                    e.target.style.backgroundColor = 'var(--accent2)';
                } else if (e.target.classList.contains('perfume-button')) {
                    e.target.style.backgroundColor = 'var(--accent1)';
                }
            }, 1500);
        }
    });
});