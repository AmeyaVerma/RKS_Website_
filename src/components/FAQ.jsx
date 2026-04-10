import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// ─── EmailJS config ────────────────────────────────────────────────────────
// 1. Sign up free at https://www.emailjs.com  (200 emails/month)
// 2. Add an Email Service (Gmail / Outlook / SMTP) → copy its Service ID below
// 3. Create a Template (use the variable names: {{from_name}}, {{from_email}},
//    {{phone}}, {{message}}) → copy its Template ID below
// 4. Go to Account → API Keys → copy your Public Key below
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // e.g. 'AbCdEfGhIjKlMnOp'
// ───────────────────────────────────────────────────────────────────────────

const faqs = [
    {
        q: 'What sets RKS Global Logistics apart from other logistics companies?',
        a: 'RKS Global Logistics distinguishes itself through a combination of global research and local expertise. We leverage cutting-edge technology, provide personalized customer service, and deliver cost-effective logistics solutions. Our strong commitment to sustainability and operational excellence ensures reliable and responsible logistics services for our clients.',
    },
    {
        q: 'How can I request a quote?',
        a: 'You can request a quote by completing the inquiry form available on our website or by contacting our customer service team directly. Once we receive your request, our team will promptly review your requirements and provide a competitive quote tailored to your specific needs.',
    },
    {
        q: 'Are there any restrictions or regulations I need to be aware of for international shipping?',
        a: 'Yes, international shipping is subject to various regulations and restrictions, including customs procedures, import and export regulations, and specific documentation requirements. Our experienced team will guide you through these processes and ensure that your shipment complies with all applicable regulations.',
    },
    {
        q: 'What types of logistics services does RKS Global help manage?',
        a: 'RKS Global Logistics offers a comprehensive range of logistics services to ensure seamless cargo management. Our capabilities include cargo trading, container trading, international freight forwarding, container space provision and repairs, cargo consolidation, and handling of breakbulk cargo. We also provide inland transportation solutions. In addition, we offer innovative Flexi Tank solutions designed for the safe and efficient transportation of liquid cargo.',
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const [status, setStatus] = useState('idle'); // idle | sending | sent | error
    const formRef = useRef(null);

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
            .then(() => {
                setStatus('sent');
                formRef.current.reset();
            })
            .catch(() => setStatus('error'));
    };

    return (
        <section className="faq-section">
            <div className="auto-container">
                <div className="row g-0 row-1">
                    {/* FAQ accordion column */}
                    <div className="faq-column col-lg-6 order-lg-2">
                        <div className="inner-column">
                            <div className="sec-title">
                                <div className="sub-title-outer">
                                    <span className="sub-title">FAQs</span>
                                    <h2>Get Answers</h2>
                                </div>
                            </div>
                            <ul className="accordion-box">
                                {faqs.map((item, i) => {
                                    const isOpen = openIndex === i;
                                    return (
                                        <li key={i} className={`accordion block${isOpen ? ' active-tab' : ''}`}>
                                            <div
                                                className={`acc-btn${isOpen ? ' active' : ''}`}
                                                onClick={() => toggle(i)}
                                                style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
                                            >
                                                <h4 className="count" style={{ margin: 0, minWidth: '36px' }}>
                                                    {String(i + 1).padStart(2, '0')}.
                                                </h4>
                                                <span style={{ flex: 1 }}>{item.q}</span>
                                                <i className={`icon fa fa-angle-${isOpen ? 'up' : 'down'}`}></i>
                                            </div>
                                            {isOpen && (
                                                <div className="acc-content current">
                                                    <div className="content">
                                                        <div className="text">{item.a}</div>
                                                    </div>
                                                </div>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>

                    {/* Quote form column */}
                    <div className="form-column col-lg-6">
                        <div className="inner-column">
                            <div className="contact-form">
                                <div className="icon-lines-2"></div>
                                <h3 className="title">Request A Quote</h3>
                                <form ref={formRef} id="myform2" noValidate onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="mb-3">
                                                <input name="from_name" className="form-control" type="text" placeholder="Enter Name" required />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="mb-3">
                                                <input name="from_email" className="form-control" type="email" placeholder="Enter Email" required />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="mb-3">
                                                <input name="phone" className="form-control" type="text" placeholder="Enter Number" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <textarea name="message" className="form-control" rows={5} placeholder="Enter Message"></textarea>
                                    </div>
                                    {/* hidden field so EmailJS knows the recipient */}
                                    <input type="hidden" name="to_email" value="kam@kintlog.com" />
                                    <div className="mb-3">
                                        {status === 'sent' && (
                                            <p style={{ color: '#28a745', fontWeight: 600 }}>✓ Message sent successfully!</p>
                                        )}
                                        {status === 'error' && (
                                            <p style={{ color: '#e84040', fontWeight: 600 }}>✗ Failed to send. Please try again.</p>
                                        )}
                                    </div>
                                    <div className="mb-5">
                                        <button type="submit" className="theme-btn btn-style-one" disabled={status === 'sending'}>
                                            <span className="btn-title">
                                                {status === 'sending' ? 'Sending...' : 'Send message'}
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
