import React, { useState, useEffect } from 'react';
import styles from './Header.module.css'; // CSS Module

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
    document.body.classList.toggle('mobile-menu-open', !isMobileMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove('mobile-menu-open');
  };

  const handleNavLinkClick = (e, targetId) => {
    // Basic smooth scroll for demo. For robust smooth scrolling with offset:
    // You might use a library or more complex logic.
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        const headerOffset = document.getElementById('header-nav')?.offsetHeight || 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 20;
      
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
    if (isMobileMenuOpen) closeMenu();
  };

  return (
    <header id="header-nav" className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerContainer}`}>
        <a href="#hero" onClick={(e) => handleNavLinkClick(e, '.hero')} className={styles.logoLink}>
          <div className={styles.logoText}>TRADEFOLIO</div>
        </a>
        <nav className={`${styles.navLinks} ${isMobileMenuOpen ? styles.open : ''}`}>
          <a href="#features" onClick={(e) => handleNavLinkClick(e, '#features')} className={styles.navLink}>Features</a>
          <a href="#algo-engine" onClick={(e) => handleNavLinkClick(e, '#algo-engine')} className={styles.navLink}>Algo Engine</a>
          <a href="#marketplace" onClick={(e) => handleNavLinkClick(e, '#marketplace')} className={styles.navLink}>Marketplace</a>
          <a href="#contact" onClick={(e) => handleNavLinkClick(e, '#contact')} className={styles.navLink}>Contact</a>
          <a href="#login" onClick={(e) => handleNavLinkClick(e, '#login')} className={styles.navLink}>Login</a>
          <button className={`${styles.ctaButton} ${styles.mobileOnlyCta}`} style={{ display: isMobileMenuOpen ? 'block' : 'none' }}>Get Started</button>
        </nav>
        <button className={`${styles.ctaButton} ${styles.desktopOnlyCta}`}>Get Started</button>
        <button 
          className={`${styles.mobileMenuToggle} ${isMobileMenuOpen ? styles.active : ''}`}
          aria-label="Toggle menu" 
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
