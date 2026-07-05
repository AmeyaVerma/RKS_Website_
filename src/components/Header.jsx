import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = (e) => {
        if (e) e.preventDefault();
        console.log('Toggle Menu Clicked');
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('mobile-menu-visible');
        } else {
            document.body.classList.remove('mobile-menu-visible');
        }
    }, [isMenuOpen]);

    return (
        <header className={`main-header header-style-one ${isMenuOpen ? 'mobile-menu-visible' : ''}`}>
            <div className="header-lower">
                <div className="main-box">
                    <div className="logo-box">
                        <div className="logo">
                            <a href="/"><img src="/images/rks-logo.png" alt="RKS Logo" style={{ width: 'auto', mixBlendMode: 'multiply' }} /></a>
                        </div>
                    </div>
                    <div className="nav-outer">
                        <nav className="nav main-menu">
                            <ul className="navigation">
                                <li className="current"><a href="/">Home</a></li>
                                <li><a href="/#about">About</a></li>
                                <li className="dropdown"><a href="/#services">Services</a>
                                    <ul>
                                        <li><Link to="/services/sea-freight">Sea Freight Solutions</Link></li>
                                        <li><Link to="/services/warehousing">Warehousing Solutions</Link></li>
                                        <li><Link to="/services/container-freight">Container Freight Station</Link></li>
                                        <li><Link to="/services/odc-project-cargo">ODC & Project Cargo</Link></li>
                                        <li><Link to="/services/air-freight">Air Freight</Link></li>
                                        <li><Link to="/services/custom-clearance">Custom Clearance</Link></li>
                                        <li><Link to="/services/transport-solutions">Transport Solutions</Link></li>
                                        <li><Link to="/services/value-added-services">Value Added Services</Link></li>
                                        <li><Link to="/services/consolidation">Consolidation</Link></li>
                                        <li><Link to="/services/nvocc">NVOCC</Link></li>
                                        <li><Link to="/services/nrior">NR-IOR</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/networking">Networking</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="outer-box">
                        <a href="tel:+918655944515" className="info-btn-two" style={{ textDecoration: 'none' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#0F52BA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '32px', height: '32px', position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)' }}>
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                <path d="M14.05 2a9 9 0 0 1 8 7.94"/>
                                <path d="M14.05 6A5 5 0 0 1 18 10"/>
                            </svg>
                            <small style={{ display: 'block', color: '#0B3C5D', fontSize: '12px', fontWeight: '500' }}>Call for inquiry</small>
                            <strong style={{ display: 'block', color: '#0B3C5D', fontSize: '16px', fontWeight: '700' }}>+91 86559 44515</strong>
                        </a>
                        <div className="mobile-nav-toggler" onClick={toggleMenu} style={{ cursor: 'pointer', display: 'flex' }}>
                            <span className="icon lnr-icon-bars" style={{ fontSize: '30px' }}></span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className="mobile-menu" style={{ display: isMenuOpen ? 'block' : 'none' }}>
                <div className="menu-backdrop" onClick={closeMenu} style={{ display: isMenuOpen ? 'block' : 'none' }}></div>
                <nav className="menu-box">
                    <div className="upper-box">
                        <div className="nav-logo">
                            <img src="/images/rks-logo.png" alt="Logo" style={{ maxHeight: '60px' }} />
                        </div>
                        <div className="close-btn" onClick={closeMenu}><i className="icon fa fa-times"></i></div>
                    </div>
                    <ul className="navigation clearfix">
                        <li><a href="/" onClick={closeMenu}>Home</a></li>
                        <li><a href="/#about" onClick={closeMenu}>About</a></li>
                        <li><a href="/#services" onClick={closeMenu}>Services</a></li>
                        <li><Link to="/networking" onClick={closeMenu}>Networking</Link></li>
                        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
            
            <style jsx>{`
                .mobile-menu-visible .mobile-menu {
                    right: 0 !important;
                    visibility: visible !important;
                    opacity: 1 !important;
                }
                .mobile-menu {
                    position: fixed !important;
                    right: -300px;
                    top: 0;
                    width: 300px;
                    height: 100%;
                    z-index: 999999 !important;
                    transition: all 0.3s ease;
                    background: #fff !important;
                }
                .menu-backdrop {
                    position: fixed !important;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.5);
                    z-index: -1;
                }
                @media (max-width: 768px) {
                    .mobile-nav-toggler {
                        display: flex !important;
                        background: #0B3C5D !important;
                        color: #fff !important;
                        padding: 10px;
                        border-radius: 5px;
                    }
                    .mobile-nav-toggler::before {
                        content: '☰';
                        font-size: 24px;
                    }
                }
            `}</style>
        </header>
    );
};

export default Header;
