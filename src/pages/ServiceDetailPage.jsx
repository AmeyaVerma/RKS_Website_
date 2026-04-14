import React from 'react';
import { useParams, Link } from 'react-router-dom';
import servicesData from '../data/servicesData';
import Header from '../components/Header';

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
                backgroundImage: `url(${service.image || 'https://kintlog.com/images/resource/Sea-d.webp'})`,
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
                        </ul>
                    </div>
                </div>
                <div className="overlay" style={{ position: 'absolute', inset: 0, background: 'rgba(10,20,50,0.65)', zIndex: 1 }}></div>
            </section>

            {/* Service Detail Section */}
            <section className="service-details" style={{ padding: '80px 0' }}>
                <div className="auto-container">
                    <div className="row">
                        {/* Content Area */}
                        <div className="content-side col-lg-8 col-md-12 col-sm-12">
                            <div className="service-details__content">
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
                                <div className="sidebar-widget service-list" style={{ background: '#f8fafc', padding: '30px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                                    <h5 style={{ fontWeight: 800, marginBottom: '20px', color: '#1a2a4a' }}>All Services</h5>
                                    <ul className="service-categories" style={{ listStyle: 'none', padding: 0 }}>
                                        {servicesData.map((s) => (
                                            <li key={s.slug} style={{ marginBottom: '10px' }}>
                                                <Link to={`/services/${s.slug}`} style={{ 
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
        </div>
    );
};

export default ServiceDetailPage;
