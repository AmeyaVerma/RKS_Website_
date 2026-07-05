import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const services = [
  {
    title: 'Sea Freight Solutions',
    href: '/services/sea-freight',
    img: 'https://api.iconify.design/mdi/ferry.svg?color=%23e84040&width=80&height=80',
  },
  {
    title: 'Warehousing Solutions',
    href: '/services/warehousing',
    img: 'https://api.iconify.design/mdi/warehouse.svg?color=%23e84040&width=80&height=80',
  },
  {
    title: 'Container Freight Station',
    href: '/services/container-freight',
    img: 'https://api.iconify.design/mdi/train-car-container.svg?color=%23e84040&width=80&height=80',
  },
  {
    title: 'ODC And Project Cargo',
    href: '/services/odc-project-cargo',
    img: 'https://api.iconify.design/mdi/crane.svg?color=%23e84040&width=80&height=80',
  },
  {
    title: 'Air Freight',
    href: '/services/air-freight',
    img: 'https://api.iconify.design/mdi/airplane.svg?color=%23e84040&width=80&height=80',
  },
  {
    title: 'Custom Clearance & Compliance',
    href: '/services/custom-clearance',
    img: 'https://api.iconify.design/mdi/file-certificate.svg?color=%23e84040&width=80&height=80',
  },
  {
    title: 'Transport Solutions',
    href: '/services/transport-solutions',
    img: 'https://api.iconify.design/mdi/truck-delivery.svg?color=%23e84040&width=80&height=80',
  },
  {
    title: 'Value Added Services',
    href: '/services/value-added-services',
    img: 'https://api.iconify.design/mdi/star-circle.svg?color=%23e84040&width=80&height=80',
  },
];

const Countries = () => {
  return (
    <section className="countries-section">
      <div className="auto-container">
        <div className="sec-title text-center">
          <div className="sub-title-outer">
            <span className="sub-title">What we do</span>
            <h2>Tailor made end to end integrated and reliable supply chain solutions to manage complex demands</h2>
          </div>
        </div>

        <div className="carousel-outer" style={{ marginTop: '40px' }}>
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            loop={false}
            pagination={{ clickable: true }}
            breakpoints={{
              0:    { slidesPerView: 1 },
              576:  { slidesPerView: 2 },
              768:  { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
            style={{ paddingBottom: '40px' }}
          >
            {services.map((svc) => (
              <SwiperSlide key={svc.title} style={{ height: 'auto' }}>
                <a href={svc.href} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                  <div className="country-block" style={{ height: '100%', marginBottom: 0 }}>
                    <div className="inner-box" style={{ height: '100%', minHeight: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', padding: '24px 16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100px', height: '100px', border: '1px solid #f2edeb', borderRadius: '10px', background: '#fff', flexShrink: 0 }}>
                        <img src={svc.img} alt={svc.title} style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                      </div>
                      <div className="content-box" style={{ textAlign: 'center' }}>
                        <h6 className="title" style={{ fontWeight: 700, marginBottom: '8px', fontSize: '14px' }}>{svc.title}</h6>
                        <i className="icon fa fa-long-arrow-right" style={{ color: '#e84040' }}></i>
                      </div>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};


export default Countries;
