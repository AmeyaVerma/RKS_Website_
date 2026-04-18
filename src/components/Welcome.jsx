import React from 'react';

const Welcome = () => {
    return (
        <section className="welcome-section pt-5 pb-0 bg-white d-flex justify-content-center">
        <div className="container text-center">
                <span className="welcome-eyebrow d-block mb-2" style={{ color: '#0F52BA', fontSize: '13px', fontWeight: '600', letterSpacing: '4px', textTransform: 'uppercase' }}>
                    Welcome To
                </span>
                <h2 className="welcome-title fw-bold mb-4" style={{ color: '#0F172A', fontSize: '42px', fontWeight: '800' }}>
                    RKS GLOBAL
                </h2>
                <p className="welcome-text mx-auto" style={{ maxWidth: '800px', color: '#475569', fontSize: '16px', lineHeight: '1.8' }}>
                    At RKS Global Logistics, we take complete ownership of your shipments, so you can focus on what matters most. Backed by years of expertise in documentation and freight management, we deliver seamless, reliable, and efficient solutions tailored to your global trade needs.
                </p>
            </div>
        </section>
    );
};

export default Welcome;
