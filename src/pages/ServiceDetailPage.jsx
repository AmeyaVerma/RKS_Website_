import React from 'react';
import { useParams, Link } from 'react-router-dom';
import servicesData from '../data/servicesData';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ServiceDetailPage = () => {
    const { slug } = useParams();
    const service = servicesData.find(s => s.slug === slug);

    if (!service) {
        return (
            <div className="container text-center" style={{ padding: '100px 0' }}>
                <h2>Service Not Found</h2>
                <Link to="/" className="theme-btn btn-style-one mt-4">Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="page-wrapper">
            <div className="preloader" style={{ display: 'none' }}></div>
            <Header />
            {/* Page Title */}
            <section className="page-title" style={{ 
                backgroundImage: `url(${service.image || '/images/ship.jpg'})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '130px 0 80px',
                position: 'relative',
                color: '#fff',
                textAlign: 'center'
            }}>
                <div className="auto-container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="title-outer text-center">
                        <h1 className="title" style={{ fontSize: '42px', fontWeight: 700, textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>{service.title}</h1>
                        <ul className="page-breadcrumb" style={{ display: 'flex', justifyContent: 'center', listStyle: 'none', gap: '8px', padding: 0 }}>
                            <li><Link to="/" style={{ color: '#fff', fontWeight: 600 }}>Home</Link></li>
                            <li style={{ color: 'rgba(255,255,255,0.8)' }}>/</li>
                            <li style={{ color: 'rgba(255,255,255,0.8)' }}>Services</li>
                            <li style={{ color: 'rgba(255,255,255,0.8)' }}>/</li>
                            <li style={{ color: 'rgba(255,255,255,0.8)' }}>{service.title}</li>
                        </ul>
                    </div>
                </div>
                <div className="overlay" style={{ position: 'absolute', inset: 0, background: 'rgba(10,20,50,0.72)', zIndex: 1 }}></div>
            </section>

            {/* Service Detail Section */}
            <section className="service-details" style={{ padding: '80px 0' }}>
                <div className="auto-container">
                    <div className="row">
                        {/* Content Area */}
                        <div className="content-side col-lg-8 col-md-12 col-sm-12">
                            <div className="service-details__content">
                                {service.image && (
                                    <figure className="image" style={{ marginBottom: '28px' }}>
                                        <img src={service.image} alt={service.title} style={{ width: '100%', borderRadius: '6px' }} />
                                    </figure>
                                )}
                                <h2 style={{ color: '#1a2a4a', fontWeight: 800, marginBottom: '24px' }}>{service.title}</h2>
                                {service.content.map((item, idx) => {
                                    if (item.type === 'paragraph') {
                                        return <p key={idx} style={{ fontSize: '17px', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>{item.text}</p>;
                                    } else if (item.type === 'subheading') {
                                        return <h4 key={idx} style={{ color: '#0F52BA', fontWeight: 700, marginTop: '30px', marginBottom: '15px' }}>{item.text}</h4>;
                                    }
                                    return null;
                                })}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
                            <aside className="sidebar">
                                <div className="call-away-card" style={{
                                    background: 'linear-gradient(145deg, #1a4799 0%, #153a80 100%)',
                                    borderRadius: '14px', padding: '40px 30px 36px', textAlign: 'center',
                                    position: 'relative', overflow: 'hidden', marginBottom: '30px'
                                }}>
                                    <h3 style={{ color: '#fff', fontSize: '26px', fontWeight: 700, lineHeight: 1.3, marginBottom: '20px' }}>We're just a<br />call away</h3>
                                    <div className="phone-circle" style={{
                                        width: '68px', height: '68px', background: '#1a2a4a', borderRadius: '50%',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', position: 'relative', zIndex: 1
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12a19.79 19.79 0 0 1-3-8.59A2 2 0 0 1 3 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                    </div>
                                    <p style={{ color: 'rgba(255,255,255,0.80)', fontSize: '13px', marginBottom: '6px' }}>Need help? Talk to an expert</p>
                                    <a href="tel:+918655944515" style={{ color: '#fff', fontSize: '24px', fontWeight: 700, textDecoration: 'none', display: 'block', position: 'relative', zIndex: 1 }}>+91 86559 44515</a>
                                </div>

                                <div className="contact-form-box" style={{ background: '#f6f8fb', borderRadius: '10px', padding: '28px 24px', marginBottom: '30px' }}>
                                    <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1a2a4a', marginBottom: '20px' }}>Contact Form</h3>
                                    <form id="serviceContactForm" action="javascript:void(0);" method="post">
                                        <input name="name" type="text" placeholder="Enter Name" required style={{ border: '1px solid #dde5f0', borderRadius: '6px', padding: '11px 14px', fontSize: '14px', marginBottom: '14px', width: '100%', background: '#fff' }} />
                                        <input name="email" type="email" placeholder="Enter Email" required style={{ border: '1px solid #dde5f0', borderRadius: '6px', padding: '11px 14px', fontSize: '14px', marginBottom: '14px', width: '100%', background: '#fff' }} />
                                        <input name="mobile" type="tel" placeholder="Enter Phone" style={{ border: '1px solid #dde5f0', borderRadius: '6px', padding: '11px 14px', fontSize: '14px', marginBottom: '14px', width: '100%', background: '#fff' }} />
                                        <textarea name="message" rows="5" placeholder="Enter Message" style={{ border: '1px solid #dde5f0', borderRadius: '6px', padding: '11px 14px', fontSize: '14px', marginBottom: '14px', width: '100%', background: '#fff', resize: 'none' }}></textarea>
                                        <button type="submit" style={{
                                            background: '#1a4799', color: '#fff', border: 'none', borderRadius: '6px', padding: '13px 0',
                                            fontSize: '14px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer', width: '100%'
                                        }}>Send Message</button>
                                    </form>
                                </div>

                                <div className="sidebar-widget service-list" style={{ background: '#f8fafc', padding: '30px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                                    <h5 style={{ fontWeight: 800, marginBottom: '20px', color: '#1a2a4a' }}>All Services</h5>
                                    <ul className="service-categories" style={{ listStyle: 'none', padding: 0 }}>
                                        {servicesData.map((s) => (
                                            <li key={s.slug} style={{ marginBottom: '10px' }}>
                                                <Link to={`/services/${s.slug}`} className={s.slug === slug ? 'active-service-link' : ''} style={{
                                                    display: 'block', padding: '12px 18px', background: s.slug === slug ? '#0F52BA' : '#fff',
                                                    color: s.slug === slug ? '#fff' : '#444', borderRadius: '6px', fontWeight: 600,
                                                    border: '1px solid #e2e8f0', textDecoration: 'none'
                                                }}>
                                                    {s.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ServiceDetailPage;
