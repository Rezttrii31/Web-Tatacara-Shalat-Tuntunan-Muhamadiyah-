// Audio Management
let currentAudio = null;
let currentButton = null;

// Audio data - dalam praktik nyata, file audio akan disediakan
const audioData = {
    'berdiri': {
        title: 'Posisi Berdiri',
        description: 'Penjelasan tentang posisi berdiri yang benar dalam sholat'
    },
    'takbir': {
        title: 'Takbiratul Ihram',
        description: 'Cara melakukan takbiratul ihram dengan benar'
    },
    'rukuk': {
        title: 'Gerakan Rukuk',
        description: 'Tata cara rukuk yang sesuai dengan sunnah'
    },
    'sujud': {
        title: 'Gerakan Sujud',
        description: 'Cara sujud yang benar dan doa yang dibaca'
    },
    'duduk': {
        title: 'Duduk Antara Dua Sujud',
        description: 'Posisi duduk dan doa yang dibaca'
    },
    'tahiyat': {
        title: 'Tahiyat Akhir',
        description: 'Cara duduk tahiyat dan bacaan yang benar'
    },
    'salam': {
        title: 'Gerakan Salam',
        description: 'Cara melakukan salam yang benar'
    }
};

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Ensure all navigation links work
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove any default behavior that might interfere
            e.preventDefault();
            
            const href = this.getAttribute('href');
            
            if (href && href !== '#') {
                // For external page links
                if (href.includes('.html')) {
                    window.location.href = href;
                } else {
                    // For anchor links
                    const targetId = href.split('#')[1];
                    const targetElement = document.getElementById(targetId);
                    
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            }
        });
    });
    
    // Also handle breadcrumb links
    const breadcrumbLinks = document.querySelectorAll('.breadcrumb-list a');
    breadcrumbLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                window.location.href = href;
            }
        });
    });
});

// Function to play audio
function playAudio(audioType) {
    const audioElement = document.getElementById(`audio-${audioType}`);
    const button = event.target.closest('.audio-btn');
    
    // Stop current audio if playing
    if (currentAudio && currentAudio !== audioElement) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        if (currentButton) {
            currentButton.classList.remove('playing');
            currentButton.innerHTML = '<i class="fas fa-volume-up"></i><span>Dengarkan</span>';
        }
    }
    
    // If same audio is clicked, toggle play/pause
    if (currentAudio === audioElement && !audioElement.paused) {
        audioElement.pause();
        button.classList.remove('playing');
        button.innerHTML = '<i class="fas fa-volume-up"></i><span>Dengarkan</span>';
        return;
    }
    
    // Play new audio
    if (audioElement) {
        // Show loading state
        button.innerHTML = '<div class="loading"></div><span>Loading...</span>';
        
        // Simulate audio loading (in real implementation, this would be actual audio)
        setTimeout(() => {
            audioElement.play().then(() => {
                button.classList.add('playing');
                button.innerHTML = '<i class="fas fa-pause"></i><span>Jeda</span>';
                currentAudio = audioElement;
                currentButton = button;
                
                // Add event listener for when audio ends
                audioElement.onended = () => {
                    button.classList.remove('playing');
                    button.innerHTML = '<i class="fas fa-volume-up"></i><span>Dengarkan</span>';
                    currentAudio = null;
                    currentButton = null;
                };
            }).catch(error => {
                console.log('Audio play failed:', error);
                // Show audio info instead of playing
                showAudioInfo(audioType, button);
            });
        }, 1000);
    } else {
        // If no audio file, show information
        showAudioInfo(audioType, button);
    }
}

// Function to show audio information when no audio file is available
function showAudioInfo(audioType, button) {
    const info = audioData[audioType];
    if (info) {
        button.innerHTML = '<i class="fas fa-info-circle"></i><span>Info</span>';
        button.style.background = '#4fc3f7';
        
        // Create tooltip or modal with information
        showModal(info.title, info.description);
        
        // Reset button after 3 seconds
        setTimeout(() => {
            button.innerHTML = '<i class="fas fa-volume-up"></i><span>Dengarkan</span>';
            button.style.background = 'rgba(255, 255, 255, 0.2)';
        }, 3000);
    }
}

// Modal function to show information
function showModal(title, description) {
    // Remove existing modal
    const existingModal = document.querySelector('.info-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'info-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>${title}</h3>
                <button class="modal-close" onclick="this.parentElement.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <p>${description}</p>
                <p><strong>Catatan:</strong> File audio akan tersedia dalam versi selanjutnya.</p>
            </div>
        </div>
    `;
    
    // Add modal styles
    const style = document.createElement('style');
    style.textContent = `
        .info-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        }
        
        .modal-content {
            background: white;
            border-radius: 15px;
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            animation: slideIn 0.3s ease;
        }
        
        .modal-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1.5rem;
            border-radius: 15px 15px 0 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .modal-header h3 {
            margin: 0;
            font-size: 1.3rem;
        }
        
        .modal-close {
            background: none;
            border: none;
            color: white;
            font-size: 1.2rem;
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 50%;
            transition: background 0.3s ease;
        }
        
        .modal-close:hover {
            background: rgba(255, 255, 255, 0.2);
        }
        
        .modal-body {
            padding: 2rem;
            line-height: 1.6;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideIn {
            from { transform: translateY(-50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(modal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Back to top functionality
window.addEventListener('scroll', function() {
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    }
});

// Back to top click handler
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add click event to back to top button
document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', scrollToTop);
    }
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add loading animation
document.addEventListener('DOMContentLoaded', function() {
    // Add loading class to body
    document.body.classList.add('loaded');
    
    // Remove loading class after page loads
    setTimeout(() => {
        document.body.classList.remove('loading');
    }, 1000);
});

// Add touch support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - could be used for next step
            console.log('Swiped left');
        } else {
            // Swipe right - could be used for previous step
            console.log('Swiped right');
        }
    }
}

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close any open modals
        const modals = document.querySelectorAll('.info-modal');
        modals.forEach(modal => modal.remove());
    }
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.step-section, .info-item, .requirement-item, .invalidator-item');
    animateElements.forEach(el => observer.observe(el));
});

// Utility function to format time
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Function to handle audio progress (for future implementation)
function updateAudioProgress(audioElement, progressBar) {
    if (audioElement.duration) {
        const progress = (audioElement.currentTime / audioElement.duration) * 100;
        progressBar.style.width = progress + '%';
    }
}

// Export functions for potential external use
window.SholatAudio = {
    playAudio,
    showAudioInfo,
    formatTime,
    updateAudioProgress
}; 

// FAQ Functionality
document.addEventListener('DOMContentLoaded', function() {
    // FAQ Toggle
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                alert('Mohon lengkapi semua field yang wajib diisi.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Mohon masukkan alamat email yang valid.');
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                alert('Terima kasih! Pesan Anda telah berhasil dikirim. Kami akan segera menghubungi Anda.');
                
                // Reset form
                this.reset();
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
}); 