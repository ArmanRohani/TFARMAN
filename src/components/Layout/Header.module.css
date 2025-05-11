/* Header.module.css */
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--header-height);
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.85);
    z-index: 1000;
    transition: background-color 0.3s ease, box-shadow 0.3s ease, height 0.3s ease;
    border-bottom: 1px solid transparent;
}

.header.scrolled {
    background-color: rgba(255, 255, 255, 0.95); 
    backdrop-filter: blur(8px);
    box-shadow: var(--shadow-md);
    border-bottom: 1px solid var(--border-color);
}

.headerContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.logoLink {} /* Keep empty if no specific style needed */

.logoText {
    font-size: 1.6rem;
    font-weight: 800;
    background: linear-gradient(135deg, var(--primary-accent), var(--secondary-accent));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    letter-spacing: -0.5px;
}

.navLinks {
    display: flex;
    gap: 2.2rem;
    align-items: center;
}

.navLink {
    font-weight: 500;
    font-size: 0.95rem;
    position: relative;
    padding: 0.5rem 0.25rem;
    color: var(--text-primary);
    transition: color 0.2s ease;
}

.navLink::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary-accent);
    transition: width 0.3s ease;
}

.navLink:hover,
.navLinkActive { /* Assuming you might add an 'active' class via JS router later */
    color: var(--primary-accent);
}
.navLink:hover::after,
.navLinkActive::after {
    width: 100%;
}

.ctaButton {
    background: linear-gradient(135deg, var(--primary-accent), #0056b3); 
    color: var(--text-on-accent);
    padding: 0.65rem 1.4rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    cursor: pointer;
    border: none;
    box-shadow: var(--shadow-sm); 
    position: relative; 
    z-index: 1;
}
.ctaButton:hover {
    transform: translateY(-2px) scale(1.03);
    box-shadow: var(--shadow-md); 
}


.mobileMenuToggle {
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 28px;
    height: 22px;
    cursor: pointer;
    z-index: 1001;
    background: none;
    border: none;
}

.mobileMenuToggle span {
    display: block;
    height: 2.5px; 
    width: 100%;
    background-color: var(--text-primary);
    border-radius: 3px;
    transition: all 0.3s ease-in-out;
}

.mobileMenuToggle.active span:nth-of-type(1) { transform: translateY(9.75px) rotate(45deg); }
.mobileMenuToggle.active span:nth-of-type(2) { opacity: 0; }
.mobileMenuToggle.active span:nth-of-type(3) { transform: translateY(-9.75px) rotate(-45deg); }

.desktopOnlyCta { /* Initially visible */ }
.mobileOnlyCta { display: none !important; } /* Initially hidden */


@media (max-width: 768px) {
    .navLinks {
        position: fixed; top: var(--header-height); 
        right: -100%; width: min(80vw, 320px); height: calc(100vh - var(--header-height));
        background-color: var(--bg-main);
        flex-direction: column; align-items: flex-start; justify-content: flex-start;
        gap: 0; padding: 2rem 1.5rem;
        transition: right 0.35s cubic-bezier(0.23, 1, 0.32, 1);
        box-shadow: -3px 0 10px rgba(0,0,0,0.05);
        border-left: 1px solid var(--border-color);
        z-index: 999;
    }
    .navLinks.open { right: 0; }
    .navLink { font-size: 1.1rem; padding: 0.8rem 0; width: 100%; }
    .navLink::after { bottom: 0.3rem; }
    
    .desktopOnlyCta { display: none !important; }
    .mobileOnlyCta { display: block !important; margin-top:1.5rem; width: 100%; text-align: center;}
    .mobileMenuToggle { display: flex; }
}
