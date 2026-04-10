import React, { useEffect, useRef, useState } from 'react';

const stats = [
    { icon: '/images/extracted/asset_12.webp', target: 10000, label: 'Projects Done' },
    { icon: '/images/extracted/asset_13.webp', target: 1500,  label: 'Container Fleets' },
    { icon: '/images/extracted/asset_14.webp', target: 25,    label: 'Years of Experience' },
];

function useCountUp(target, duration = 2500, started) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!started) return;
        let startTime = null;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // ease-out
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [started, target, duration]);
    return count;
}

function Counter({ icon, target, label }) {
    const [started, setStarted] = useState(false);
    const ref = useRef(null);
    const count = useCountUp(target, 2500, started);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="counter-block col-lg-4 col-md-4 col-sm-12">
            <div className="inner-box">
                <div className="icon-box">
                    <img className="icon" src={icon} alt="" />
                </div>
                <div className="content-box">
                    <div className="count-box counted">
                        <span className="count-text">{count.toLocaleString()}</span>+
                    </div>
                    <div className="counter-title">{label}</div>
                </div>
            </div>
        </div>
    );
}

const Funfacts = () => (
    <section className="funfacts-section">
        <div className="bg bg-pattern-1"></div>
        <div className="auto-container">
            <div className="fact-counter">
                <div className="row">
                    {stats.map((s) => (
                        <Counter key={s.label} icon={s.icon} target={s.target} label={s.label} />
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default Funfacts;
