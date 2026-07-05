import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  {
    title: 'Sea Freight Solutions',
    img: '/images/services/sea-freight-premium.png',
    href: '/services/sea-freight',
  },
  {
    title: 'Warehousing Solutions',
    img: '/images/services/warehousing-premium.png',
    href: '/services/warehousing',
  },
  {
    title: 'Container Freight Station',
    img: '/images/services/cfs-premium.png',
    href: '/services/container-freight',
  },
  {
    title: 'ODC & Project Cargo Solutions',
    img: '/images/services/odc-premium.png',
    href: '/services/odc-project-cargo',
  },
  {
    title: 'Air Freight Solutions',
    img: '/images/services/air-freight-v2.png',
    href: '/services/air-freight',
  },
  {
    title: 'Custom Clearance Solutions',
    img: '/images/services/customs-premium.png',
    href: '/services/custom-clearance',
  },
  {
    title: 'Transport Solutions',
    img: '/images/services/transport-premium.png',
    href: '/services/transport-solutions',
  },
  {
    title: 'Value Added Solutions',
    img: '/images/services/value-added-premium.png',
    href: '/services/value-added-services',
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="auto-container">
        <div className="sec-title text-center d-flex justify-content-center">
          <div className="sub-title-outer col-lg-8">
            <h2>Logistics Solutions with Seamless Process</h2>
          </div>
        </div>
        <div className="carousel-outer" style={{ overflow: 'hidden' }}>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={10}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              320:  { slidesPerView: 1, spaceBetween: 10 },
              768:  { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.title}>
                <div className="project-block">
                  <a href={slide.href} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                  <div className="inner-box">
                    <figure className="image">
                      <img src={slide.img} alt={slide.title} />
                    </figure>
                    <div className="content-box">
                      <div className="shape-3"></div>
                      <div className="inner">
                        <h5 className="title">
                          {slide.title}
                        </h5>
                        <span className="theme-btn read-more">
                          <i className="fa fa-plus"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Services;
