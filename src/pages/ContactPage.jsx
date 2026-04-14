import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const ContactPage = () => {
    return (
        <div className="page-wrapper">
            <div className="preloader" style={{ display: 'none' }}></div>
            <Header />
            <section className="page-title" style={{ 
                backgroundImage: 'url("https://kintlog.com/images/resource/contact-bg.webp")',
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
                padding: '130px 0 80px',
                position: 'relative',
                color: '#fff',
                textAlign: 'center'
            }}>
                <div className="auto-container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="title-outer text-center">
                        <h1 className="title" style={{ fontSize: '42px', fontWeight: 700, textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>Contact Us</h1>
                        <ul className="page-breadcrumb" style={{ display: 'flex', justifyContent: 'center', listStyle: 'none', gap: '8px', padding: 0 }}>
                            <li><Link to="/" style={{ color: '#fff', fontWeight: 600 }}>Home</Link></li>
                            <li style={{ color: 'rgba(255,255,255,0.8)' }}>/</li>
                            <li style={{ color: 'rgba(255,255,255,0.8)' }}>Contact</li>
                        </ul>
                    </div>
                </div>
                <div className="overlay" style={{ position: 'absolute', inset: 0, background: 'rgba(10,20,50,0.65)', zIndex: 1 }}></div>
            </section>

            <section className="contact-section" style={{ padding: '70px 0 60px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-7 col-md-12">
                            <div className="contact-form-main" style={{ 
                                background: '#fff', borderRadius: '10px', 
                                border: '1px solid #eaeef5', padding: '38px 36px' 
                            }}>
                                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#1a2a4a', marginBottom: '6px' }}>Send Us a Message</h3>
                                <p style={{ color: '#777', fontSize: '14px', marginBottom: '28px' }}>Fill in the form below and our team will get back to you within 24 hours.</p>

                                <form id="contactForm" action="javascript:void(0);" method="post">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <input type="text" name="name" className="form-control" placeholder="Your Full Name *" required style={{ background: '#f8fafd' }} />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <input type="email" name="email" className="form-control" placeholder="Your Email Address *" required style={{ background: '#f8fafd' }} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <input type="tel" name="phone" className="form-control" placeholder="Phone Number" style={{ background: '#f8fafd' }} />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <input type="text" name="subject" className="form-control" placeholder="Subject *" required style={{ background: '#f8fafd' }} />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <textarea name="message" className="form-control" rows="6" placeholder="Your Message *" required style={{ background: '#f8fafd' }}></textarea>
                                    </div>
                                    <button type="submit" className="theme-btn btn-style-one" style={{ 
                                        background: '#1a4799', color: '#fff', border: 'none', 
                                        padding: '14px 36px', borderRadius: '6px', fontWeight: 700 
                                    }}>
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="col-xl-5 col-lg-5 col-md-12">
                            <div style={{ paddingLeft: '24px' }}>
                                <div className="contact-info-card" style={{ display: 'flex', gap: '18px', marginBottom: '20px', padding: '24px', border: '1px solid #eaeef5', borderRadius: '10px' }}>
                                    <div style={{ width: '52px', height: '52px', background: '#1a4799', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12a19.79 19.79 0 0 1-3-8.59A2 2 0 0 1 3 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                    </div>
                                    <div>
                                        <h5 style={{ fontWeight: 700, margin: 0 }}>Call Us</h5>
                                        <a href="tel:+918655944515" style={{ color: '#555', textDecoration: 'none' }}>+91 86559 44515</a>
                                    </div>
                                </div>

                                <div className="contact-info-card" style={{ display: 'flex', gap: '18px', marginBottom: '20px', padding: '24px', border: '1px solid #eaeef5', borderRadius: '10px' }}>
                                    <div style={{ width: '52px', height: '52px', background: '#1a4799', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,4 12,13 2,4"/></svg>
                                    </div>
                                    <div>
                                        <h5 style={{ fontWeight: 700, margin: 0 }}>Email Us</h5>
                                        <a href="mailto:kam@kintlog.com" style={{ color: '#555', textDecoration: 'none' }}>kam@kintlog.com</a>
                                    </div>
                                </div>

                                <div className="contact-info-card" style={{ display: 'flex', gap: '18px', marginBottom: '20px', padding: '24px', border: '1px solid #eaeef5', borderRadius: '10px' }}>
                                    <div style={{ width: '52px', height: '52px', background: '#1a4799', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                                    </div>
                                    <div>
                                        <h5 style={{ fontWeight: 700, margin: 0 }}>Our Office</h5>
                                        <p style={{ color: '#555', margin: 0 }}>Crescent Business Square, No. 1009, Saki Naka, Mumbai.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
