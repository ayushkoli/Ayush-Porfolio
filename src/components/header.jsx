import React, { useEffect, useState } from 'react';
import '../index.css';

const Header = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isLightMode, setIsLightMode] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Sun and Moon icons
    const sunIcon = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
    );

    const moonIcon = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12.79A9 9 0 0 1 12.21 3a7 7 0 1 0 8.79 9.79z" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
    );

    // Initialize theme from localStorage or default to dark
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            setIsLightMode(true);
            document.body.classList.add('light-mode');
        }
    }, []);

    // Scroll progress tracking
    useEffect(() => {
        const updateScrollProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            setScrollProgress(scrollPercent);
        };

        // Add scroll event listener
        window.addEventListener('scroll', updateScrollProgress);
        
        // Initial call to set progress
        updateScrollProgress();

        // Cleanup event listener
        return () => window.removeEventListener('scroll', updateScrollProgress);
    }, []);

    // Theme toggle function
    const toggleTheme = () => {
        const newTheme = !isLightMode;
        setIsLightMode(newTheme);
        
        if (newTheme) {
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        }
    };

    // Mobile menu toggle function
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Close mobile menu when clicking on a link
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav>
            <div className="container">
                <div className="nav-container">
                    <div className="logo">AK</div>
                    
                    {/* Desktop Navigation */}
                    <ul className="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>

                    {/* Mobile Hamburger Button */}
                    <button
                        className="hamburger-menu"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
                        <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
                        <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
                    </button>

                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label="Toggle light/dark mode"
                        title="Toggle light/dark mode"
                    >
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                            {isLightMode ? moonIcon : sunIcon}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul className="mobile-nav-links">
                    <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
                    <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
                    <li><a href="#skills" onClick={closeMobileMenu}>Skills</a></li>
                    <li><a href="#projects" onClick={closeMobileMenu}>Projects</a></li>
                    <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
                </ul>
            </div>

            <div className="nav-progress-bar">
                <div 
                    className="nav-progress-bar-fill"
                    style={{ width: `${scrollProgress}%` }}
                ></div>
            </div>
        </nav>
    );
};

export default Header;
