import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const features = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
        title: 'Global Reach',
        text: 'Access to international markets and logistics hubs worldwide.'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
        title: 'Strategic Partnerships',
        text: 'Long-term alliances with trusted agents across every major trade lane.'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
        title: 'Advanced Technology',
        text: 'State-of-the-art tracking systems and supply chain solutions.'
    }
];

const stats = [
    { num: '50+', label: 'Countries Covered' },
    { num: '200+', label: 'Global Partners' },
    { num: '25+', label: 'Years of Experience' },
    { num: '5000+', label: 'Shipments Delivered' }
];

const NetworkingPage = () => {
    return (
        <div className="page-wrapper">
            <div className="preloader" style={{ display: 'none' }}></div>
            <Header />
            {/* Page Title */}
            <section className="page-title" style={{
                backgroundImage: 'url("/images/ship.jpg")',
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
                <div className="overlay" style={{ position: 'absolute', inset: 0, background: 'rgba(10,20,50,0.72)', zIndex: 1 }}></div>
            </section>

            {/* Networking Section */}
            <section className="networking-section" style={{ padding: '80px 0 70px' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 30px' }}>
                    <div className="row align-items-center">
                        {/* Text Column (Left) */}
                        <div className="col-lg-6 col-md-12">
                            <div className="sec-title" style={{ marginBottom: '36px' }}>
                                <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#1a2a4a', margin: '0 0 10px', lineHeight: 1.25 }}>Global Partnerships &amp;<br />Collaborative Growth</h2>
                            </div>
                            <div className="text-block">
                                <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.8, marginBottom: '18px' }}>We pride ourselves on our extensive collaboration both within India and on a global scale. Through our robust agency network and strategic partnerships, we continuously strengthen our relationships with customers while expanding our global logistics reach. This collaborative approach not only enhances our business growth but also enables us to effectively serve our clients' needs across the globe.</p>
                                <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.8, marginBottom: '18px' }}>Our premier logistics network offers unparalleled access to new international markets, providing our clients with unparalleled opportunities for expansion and market penetration. By leveraging our network, clients can tap into new territories and unlock growth opportunities previously inaccessible.</p>
                                <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.8, marginBottom: 0 }}>At the heart of our approach is a commitment to fostering cooperation and collective success. We believe that by working together with our clients and partners, we can achieve greater outcomes and drive mutual growth. Through open communication, shared goals, and a dedication to excellence, we create an environment conducive to innovation and progress.</p>
                            </div>

                            <ul className="feature-list" style={{ listStyle: 'none', padding: 0, margin: '28px 0 0' }}>
                                {features.map((f) => (
                                    <li key={f.title} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px', fontSize: '15px', color: '#333' }}>
                                        <div className="icon-box" style={{ width: '38px', height: '38px', background: '#1a4799', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            {f.icon}
                                        </div>
                                        <div className="feat-text">
                                            <strong style={{ display: 'block', fontWeight: 700, color: '#1a2a4a', marginBottom: '2px' }}>{f.title}</strong>
                                            {f.text}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Image Column (Right) */}
                        <div className="col-lg-6 col-md-12">
                            <div className="net-image-wrap" style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.12)', position: 'relative' }}>
                                <img src="/images/networking-map" alt="Global Logistics Network Map" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '12px' }} />
                            </div>
                        </div>
                    </div>

                    {/* Second text block */}
                    <div className="row" style={{ marginTop: '60px' }}>
                        <div className="col-lg-10 offset-lg-1">
                            <div className="text-block">
                                <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.8, marginBottom: '18px' }}>Furthermore, we are dedicated to providing our customers with state-of-the-art tools and technology to empower their business growth. From advanced tracking systems to innovative supply chain solutions, we equip our clients with the resources they need to stay competitive in today's dynamic market landscape.</p>
                                <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.8, marginBottom: 0 }}>In essence, our collaborative approach, combined with our cutting-edge technology and global reach, positions us as a trusted partner for businesses looking to expand their horizons and achieve sustainable growth in an increasingly interconnected world.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Strip */}
            <div className="stats-strip" style={{ background: '#1a4799', padding: '36px 0' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 30px' }}>
                    <div className="stats-row" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                        {stats.map((s) => (
                            <div className="stat-item" key={s.label} style={{ textAlign: 'center' }}>
                                <div className="num" style={{ fontSize: '42px', fontWeight: 800, color: '#fff', lineHeight: 1 }}>{s.num}</div>
                                <div className="label" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '6px' }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default NetworkingPage;
