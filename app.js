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

// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Get elements
    const searchInput = document.getElementById('searchInput');
    const clearSearch = document.getElementById('clearSearch');
    
    // Check if elements exist
    if (!searchInput || !clearSearch) {
        console.error('Search elements not found!');
        return;
    }
    
    console.log('Search script loaded successfully!');
    
    // Show/Hide clear button
    searchInput.addEventListener('input', function() {
        const hasText = this.value.trim().length > 0;
        clearSearch.style.display = hasText ? 'block' : 'none';
        performSearch(this.value);
    });
    
    // Clear search button click
    clearSearch.addEventListener('click', function() {
        searchInput.value = '';
        this.style.display = 'none';
        resetAllCards();
        searchInput.focus();
    });
    
    // Perform search function
    function performSearch(searchText) {
        const searchTerm = searchText.toLowerCase().trim();
        const allCards = document.querySelectorAll('.product-card');
        
        // If search is empty, show all cards
        if (searchTerm === '') {
            resetAllCards();
            return;
        }
        
        // Hide all cards first
        allCards.forEach(card => {
            card.style.display = 'none';
        });
        
        // Show only matching cards
        let foundAny = false;
        
        allCards.forEach(card => {
            // Get card content
            const title = card.querySelector('h3')?.textContent?.toLowerCase() || '';
            const desc = card.querySelector('p')?.textContent?.toLowerCase() || '';
            const price = card.querySelector('.price')?.textContent?.toLowerCase() || '';
            
            // Check if card matches search
            if (title.includes(searchTerm) || 
                desc.includes(searchTerm) || 
                price.includes(searchTerm)) {
                
                card.style.display = 'block';
                foundAny = true;
            }
        });
        
        // Show message if no results found
        showMessageIfNoResults(foundAny, searchTerm);
    }
    
    // Reset all cards to visible
    function resetAllCards() {
        const allCards = document.querySelectorAll('.product-card');
        allCards.forEach(card => {
            card.style.display = 'block';
        });
        
        // Hide any message
        hideNoResultsMessage();
    }
    
    // Show message if no results
    function showMessageIfNoResults(foundAny, searchTerm) {
        hideNoResultsMessage(); // Remove any existing message first
        
        if (!foundAny && searchTerm !== '') {
            // Create message div
            const messageDiv = document.createElement('div');
            messageDiv.id = 'noResultsMessage';
            messageDiv.innerHTML = `
                <div style="text-align: center; padding: 30px; background: #2a2d43; border-radius: 10px; margin: 20px auto; max-width: 500px; color: white;">
                    <i class="fas fa-search" style="font-size: 40px; color: #22ff00; margin-bottom: 15px;"></i>
                    <h3 style="color: #22ff00; margin-bottom: 10px;">No Products Found</h3>
                    <p style="margin-bottom: 5px;">Your search "<strong style="color: #22ff00;">${searchTerm}</strong>" did not match any products.</p>
                    <p style="color: #aaa; font-size: 14px;">Try different keywords like "Dell", "65W", "Apple", etc.</p>
                    <button onclick="clearSearchResults()" 
                            style="background: #22ff00; color: black; border: none; padding: 8px 20px; border-radius: 5px; margin-top: 15px; cursor: pointer; font-weight: bold;">
                        Clear Search
                    </button>
                </div>
            `;
            
            // Insert after the last card row
            const lastCardRow = document.querySelector('.card-row:last-of-type');
            if (lastCardRow) {
                lastCardRow.parentNode.insertBefore(messageDiv, lastCardRow.nextSibling);
            } else {
                document.body.appendChild(messageDiv);
            }
        }
    }
    
    // Hide no results message
    function hideNoResultsMessage() {
        const existingMsg = document.getElementById('noResultsMessage');
        if (existingMsg) {
            existingMsg.remove();
        }
    }
    
    // Global function to clear search
    window.clearSearchResults = function() {
        searchInput.value = '';
        clearSearch.style.display = 'none';
        resetAllCards();
    };
    
    // Escape key to clear search
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            this.value = '';
            clearSearch.style.display = 'none';
            resetAllCards();
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







