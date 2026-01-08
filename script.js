/* ============================================
   JOCELYN BELTRÁN - DISEÑADORA DE MODA
   JavaScript - Interactividad
   ============================================ */

// ==========================================
// IMAGE DATABASE - Categorized by section
// ==========================================
const imageDatabase = {
    logo: 'Fotos/LOGO.jpg',
    jocelyn: 'Fotos/GALERÍA JOCE 1.jpg',
    principal: [
        { src: 'Fotos/PRINCIPAL 1.jpg', alt: 'Diseño Principal 1' },
        { src: 'Fotos/PRINCIPAL 2.jpg', alt: 'Diseño Principal 2' },
        { src: 'Fotos/PRINCIPAL 3.jpg', alt: 'Diseño Principal 3' },
        { src: 'Fotos/PRINCIPAL 4.jpg', alt: 'Diseño Principal 4' },
        { src: 'Fotos/PRINCIPAL 5.jpg', alt: 'Diseño Principal 5' },
        { src: 'Fotos/PRINCIPAL 6.jpg', alt: 'Diseño Principal 6' },
        { src: 'Fotos/PRINCIPAL 7.jpg', alt: 'Diseño Principal 7' },
        { src: 'Fotos/PRINCIPAL 8.jpg', alt: 'Diseño Principal 8' }
    ],
    runway: [
        { src: 'Fotos/RUNWAY 1.jpg', alt: 'Runway Look 1' },
        { src: 'Fotos/RUNWAY 2.jpg', alt: 'Runway Look 2' },
        { src: 'Fotos/RUNWAY 3.jpg', alt: 'Runway Look 3' },
        { src: 'Fotos/RUNWAY 4.jpg', alt: 'Runway Look 4' },
        { src: 'Fotos/RUNWAY 5.jpg', alt: 'Runway Look 5' },
        { src: 'Fotos/RUNWAY 6.jpg', alt: 'Runway Look 6' },
        { src: 'Fotos/RUNWAY 7.jpg', alt: 'Runway Look 7' },
        { src: 'Fotos/RUNWAY 8.jpg', alt: 'Runway Look 8' }
    ],
    gallery: [
        { src: 'Fotos/GALERÍA MELANY 1.jpg', alt: 'Sesión Melany 1', category: 'melany' },
        { src: 'Fotos/GALERÍA MELANY 2.jpg', alt: 'Sesión Melany 2', category: 'melany' },
        { src: 'Fotos/GALERÍA MELANY 3.jpg', alt: 'Sesión Melany 3', category: 'melany' },
        { src: 'Fotos/GALERÍA MELANY 4.jpg', alt: 'Sesión Melany 4', category: 'melany' },
        { src: 'Fotos/GALERÍA MODELO 1.jpg', alt: 'Sesión Modelo 1', category: 'modelo' },
        { src: 'Fotos/GALERÍA MODELO 2.jpg', alt: 'Sesión Modelo 2', category: 'modelo' },
        { src: 'Fotos/GALERÍA MODELO 3.jpg', alt: 'Sesión Modelo 3', category: 'modelo' },
        { src: 'Fotos/GALERÍA MODELO 4.jpg', alt: 'Sesión Modelo 4', category: 'modelo' },
        { src: 'Fotos/GALERÍA MODELO 5.jpg', alt: 'Sesión Modelo 5', category: 'modelo' },
        { src: 'Fotos/GALERÍA SHER 1.jpg', alt: 'Sesión Sher 1', category: 'sher' },
        { src: 'Fotos/GALERÍA SHER 2.jpg', alt: 'Sesión Sher 2', category: 'sher' },
        { src: 'Fotos/GALERÍA SHER 3.jpg', alt: 'Sesión Sher 3', category: 'sher' },
        { src: 'Fotos/GALERÍA SHER 4.jpg', alt: 'Sesión Sher 4', category: 'sher' },
        { src: 'Fotos/GALERÍA SHER 5.jpg', alt: 'Sesión Sher 5', category: 'sher' },
        { src: 'Fotos/GALERÍA SHER 6.jpg', alt: 'Sesión Sher 6', category: 'sher' },
        { src: 'Fotos/GALERÍA VANE 1.jpg', alt: 'Sesión Vane 1', category: 'vane' },
        { src: 'Fotos/GALERÍA VANE 2.jpg', alt: 'Sesión Vane 2', category: 'vane' },
        { src: 'Fotos/GALERÍA VANE 3.jpg', alt: 'Sesión Vane 3', category: 'vane' },
        { src: 'Fotos/GALERÍA VANE 4.jpg', alt: 'Sesión Vane 4', category: 'vane' },
        { src: 'Fotos/GALERÍA VANE 5.jpg', alt: 'Sesión Vane 5', category: 'vane' },
        { src: 'Fotos/GALERÍA VANE 6.jpg', alt: 'Sesión Vane 6', category: 'vane' }
    ]
};

// ==========================================
// DOM Elements
// ==========================================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const principalGrid = document.getElementById('principalGrid');
const runwayGrid = document.getElementById('runwayGrid');
const galleryGrid = document.getElementById('galleryGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

// State
let currentLightboxImages = [];
let currentLightboxIndex = 0;

// ==========================================
// Initialize
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    loadPrincipalImages();
    loadRunwayImages();
    loadGalleryImages();
    initNavigation();
    initLightbox();
    initScrollAnimations();
    initSmoothScroll();
});

// ==========================================
// Load Images Dynamically
// ==========================================
function loadPrincipalImages() {
    imageDatabase.principal.forEach((image, index) => {
        const item = document.createElement('div');
        item.className = `principal-item fade-in${index === 0 ? ' featured' : ''}`;
        item.innerHTML = `
            <img src="${image.src}" alt="${image.alt}" loading="lazy">
        `;
        item.addEventListener('click', () => openLightbox(imageDatabase.principal, index));
        principalGrid.appendChild(item);
    });
}

function loadRunwayImages() {
    imageDatabase.runway.forEach((image, index) => {
        const item = document.createElement('div');
        item.className = 'runway-item fade-in';
        item.innerHTML = `
            <img src="${image.src}" alt="${image.alt}" loading="lazy">
            <div class="runway-overlay">
                <span class="runway-number">${String(index + 1).padStart(2, '0')}</span>
            </div>
        `;
        item.addEventListener('click', () => openLightbox(imageDatabase.runway, index));
        runwayGrid.appendChild(item);
    });
}

function loadGalleryImages(filter = 'all') {
    galleryGrid.innerHTML = '';
    
    const filteredImages = filter === 'all' 
        ? imageDatabase.gallery 
        : imageDatabase.gallery.filter(img => img.category === filter);
    
    filteredImages.forEach((image, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item fade-in';
        item.dataset.category = image.category;
        item.innerHTML = `
            <img src="${image.src}" alt="${image.alt}" loading="lazy">
            <div class="gallery-item-overlay">
                <div class="gallery-item-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="11" y1="8" x2="11" y2="14"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                </div>
            </div>
        `;
        item.addEventListener('click', () => openLightbox(filteredImages, index));
        galleryGrid.appendChild(item);
    });
    
    // Reinitialize scroll animations for new elements
    initScrollAnimations();
}

// ==========================================
// Navigation
// ==========================================
function initNavigation() {
    // Scroll effect for navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active link based on scroll position
        updateActiveNavLink();
    });
    
    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Gallery filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            loadGalleryImages(btn.dataset.filter);
        });
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 150;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ==========================================
// Lightbox
// ==========================================
function initLightbox() {
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', prevImage);
    lightboxNext.addEventListener('click', nextImage);
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                prevImage();
                break;
            case 'ArrowRight':
                nextImage();
                break;
        }
    });
    
    // Touch swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    lightbox.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextImage();
            } else {
                prevImage();
            }
        }
    }
}

function openLightbox(images, index) {
    currentLightboxImages = images;
    currentLightboxIndex = index;
    
    lightboxImg.src = images[index].src;
    lightboxImg.alt = images[index].alt;
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    updateNavButtons();
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function prevImage() {
    if (currentLightboxIndex > 0) {
        currentLightboxIndex--;
        updateLightboxImage();
    }
}

function nextImage() {
    if (currentLightboxIndex < currentLightboxImages.length - 1) {
        currentLightboxIndex++;
        updateLightboxImage();
    }
}

function updateLightboxImage() {
    const image = currentLightboxImages[currentLightboxIndex];
    
    // Add fade effect
    lightboxImg.style.opacity = '0';
    
    setTimeout(() => {
        lightboxImg.src = image.src;
        lightboxImg.alt = image.alt;
        lightboxImg.style.opacity = '1';
    }, 200);
    
    updateNavButtons();
}

function updateNavButtons() {
    lightboxPrev.style.opacity = currentLightboxIndex === 0 ? '0.3' : '1';
    lightboxNext.style.opacity = currentLightboxIndex === currentLightboxImages.length - 1 ? '0.3' : '1';
}

// ==========================================
// Scroll Animations
// ==========================================
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// ==========================================
// Smooth Scroll
// ==========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==========================================
// Lazy Loading Enhancement
// ==========================================
if ('loading' in HTMLImageElement.prototype) {
    // Native lazy loading is supported
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        img.classList.add('loading');
        img.onload = () => img.classList.remove('loading');
    });
} else {
    // Fallback for older browsers
    const lazyLoadScript = document.createElement('script');
    lazyLoadScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(lazyLoadScript);
}

// ==========================================
// Performance: Debounce scroll events
// ==========================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
window.addEventListener('scroll', debounce(() => {
    updateActiveNavLink();
}, 10));

// ==========================================
// Console Welcome Message
// ==========================================
console.log('%c Jocelyn Beltrán ', 'background: #D4AF37; color: #000; font-size: 24px; font-weight: bold; padding: 10px;');
console.log('%c Diseñadora de Moda - Culiacán, Sinaloa ', 'color: #888; font-size: 14px;');
console.log('%c Desarrollado con ❤️ ', 'color: #D4AF37; font-size: 12px;');
