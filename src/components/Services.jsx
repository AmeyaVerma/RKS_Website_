import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  {
    title: 'Sea Freight Solutions',
    img: '/images/extracted/asset_1.webp',
    href: '/services/sea-freight.html',
  },
  {
    title: 'Warehousing Solutions',
    img: '/images/extracted/asset_2.webp',
    href: '/services/Warehousing.html',
  },
  {
    title: 'Container Freight Station',
    img: '/images/services/container-cargo.jpg',
    href: '/services/container-freight.html',
  },
  {
    title: 'ODC And Project Cargo',
    img: '/images/extracted/asset_4.webp',
    href: '/services/odc-project-cargo.html',
  },
  {
    title: 'Air Freight',
    img: '/images/extracted/asset_6.webp',
    href: '/services/air-freight.html',
  },
  {
    title: 'Custom Clearance And Compliance',
    img: '/images/extracted/asset_5.webp',
    href: '/services/custom-clearance.html',
  },
  {
    title: 'Transport Solutions',
    img: '/images/extracted/asset_7.webp',
    href: '/services/transport-solutions.html',
  },
  {
    title: 'Value Added Services',
    img: '/images/services/value-img.jpeg',
    href: '/services/value-added-services.html',
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
              0:    { slidesPerView: 1 },
              768:  { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
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
