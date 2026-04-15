import React, { useState, useEffect } from 'react';

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
                                        <li><a href="/services/sea-freight.html">Sea Freight Solutions</a></li>
                                        <li><a href="/services/Warehousing.html">Warehousing Solutions</a></li>
                                        <li><a href="/services/container-freight.html">Container Freight Station</a></li>
                                        <li><a href="/services/odc-project-cargo.html">ODC & Project Cargo</a></li>
                                        <li><a href="/services/air-freight.html">Air Freight</a></li>
                                        <li><a href="/services/custom-clearance.html">Custom Clearance</a></li>
                                        <li><a href="/services/transport-solutions.html">Transport Solutions</a></li>
                                        <li><a href="/services/value-added-services.html">Value Added Services</a></li>
                                        <li><a href="/services/consolidation.html">Consolidation</a></li>
                                        <li><a href="/services/nvocc.html">NVOCC</a></li>
                                        <li><a href="/services/nrior.html">NR-IOR</a></li>
                                    </ul>
                                </li>
                                <li><a href="/networking.html">Networking</a></li>
                                <li><a href="/contact.html">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="outer-box">
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
                        <li><a href="/networking.html" onClick={closeMenu}>Networking</a></li>
                        <li><a href="/contact.html" onClick={closeMenu}>Contact</a></li>
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
