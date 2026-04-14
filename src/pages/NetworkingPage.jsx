import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const NetworkingPage = () => {
    return (
        <div className="page-wrapper">
            <div className="preloader" style={{ display: 'none' }}></div>
            <Header />
            {/* Page Title */}
            <section className="page-title" style={{ 
                backgroundImage: 'url("https://kintlog.com/images/resource/Network-d.webp")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '130px 0 80px',
                position: 'relative',
                color: '#fff',
                textAlign: 'center'
            }}>
                <div className="auto-container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="title-outer text-center">
                        <h1 className="title" style={{ fontSize: '42px', fontWeight: 700, textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>Networking</h1>
                        <ul className="page-breadcrumb" style={{ display: 'flex', justifyContent: 'center', listStyle: 'none', gap: '8px', padding: 0 }}>
                            <li><Link to="/" style={{ color: '#fff', fontWeight: 600 }}>Home</Link></li>
                            <li style={{ color: 'rgba(255,255,255,0.8)' }}>/</li>
                            <li style={{ color: 'rgba(255,255,255,0.8)' }}>Networking</li>
                        </ul>
                    </div>
                </div>
                <div className="overlay" style={{ position: 'absolute', inset: 0, background: 'rgba(10,20,50,0.65)', zIndex: 1 }}></div>
            </section>

            {/* Content Section */}
            <section className="networking-section" style={{ padding: '80px 0' }}>
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-content" style={{ fontSize: '18px', color: '#444', lineHeight: '1.8' }}>
                                <p style={{ marginBottom: '25px' }}>
                                    With our strong global network of more than 100 countries, we are dedicated to helping our clients in 
                                    expanding their horizon with simplified Logistics solutions and services. 
                                    Strong relations and contracts with global and local carriers with competitive prices are 
                                    what we strive for. Our agreements with some of the biggest names in the industry help us 
                                    provide unparalleled quality services in various parts of the world.
                                </p>
                                <p style={{ marginBottom: '25px' }}>
                                    Strongly rooted network across borders has assisted our customers to reduce the transit time 
                                    and have efficient costing without worrying about their goods and services.
                                </p>
                                <div style={{ background: '#f8fafc', padding: '40px', borderRadius: '15px', borderLeft: '5px solid #0F52BA', marginTop: '40px' }}>
                                    <h4 style={{ fontWeight: 800, color: '#1a2a4a', marginBottom: '20px' }}>Global Presence</h4>
                                    <p>Our presence in major trade lanes across Asia, Europe, Americas, and the Middle East ensures that your cargo is always in safe hands, regardless of the destination.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NetworkingPage;
