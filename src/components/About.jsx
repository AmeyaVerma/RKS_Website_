import React from 'react';
import parse from 'html-react-parser';

const About = () => {
    const htmlString = `<section id="about" class=about-section>
 
 <div class=auto-container>
 <div class=outer-box>
 <div class=icon-dots></div>
 <div class=about2>
 <div class=row>
 <div class="content-column col-lg-6 wow fadeInLeft animated" style=visibility:visible;animation-name:fadeInLeft>
 <div class=inner-column>
 <div class=sec-title> <span class=sub-title>Who we are</span>
 
 </div>
 <div class=row>
 <div class="text mt-0">RKS Global Logistics is one of the leading logistics providers in the region with specialized and tailor - made freight management solutions to its esteemed customers. Our impending goal is to emerge as a leading global logistics provider of integrated supply chain solutions by continuously meeting and excelling the diverse requirements of the global customers with flexibility, reliability and cost effectiveness. </div>
 <div class="text mt-3">Our professional expertise, global agency network have always been expanded and upgraded in order to ensure and guarantee utmost satisfaction of our customers. We pride ourselves as the "onestop-shop" for all your logistics requirements.</div>
 <div class="text mt-3">Our Mission is to remain committed and consistently providing high-quality services and products to our customers thereby improving their productivity and profitability. </div>
 <div class="text mt-3">We are offering a wide range of services around the clock at all ports in India for all type of cargo in the more efficient manner. With a global outlook, we aim to provide quality services to enhance our growth with global standards, there by meeting the aspirations of all our customer's needs.</div>
 </div>
 </div>
 </div>
 <div class="image-column col-lg-6">
 <div class=inner-column>
 <div class=image-box>
 <figure class="image overlay-anim"><img src="/images/ship.jpg" alt=Image></figure>
 
 <div class="exp-box bounce-y">
 <div class=inner>
 <i class="icon flaticon-air-freight"></i>
 <h6 class=title>24/7 Delivery <br>Service</h6>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 
 <div class="vmv-section mt-5 pt-5">
    <div class="sec-title text-center mb-5">
        <span class="sub-title">Our Vision, Mission & Values</span>
    </div>
    <div class="row">
        <div class="col-lg-4 col-md-12 col-sm-12 mb-4">
            <div class="vmv-card p-4 h-100">
                <h5 class="vmv-title">Vision</h5>
                <p class="vmv-text">Our vision is to be the most trusted and preferred global logistics partner connecting businesses across borders.</p>
            </div>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12 mb-4">
            <div class="vmv-card p-4 h-100">
                <h5 class="vmv-title">Mission</h5>
                <p class="vmv-text">To deliver reliable, efficient, and compliant logistics solutions that simplify global trade and create value for our customers.</p>
            </div>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12 mb-4">
            <div class="vmv-card p-4 h-100">
                <h5 class="vmv-title">Core Values</h5>
                <p class="vmv-text">Our core values are rooted in honesty, transparency, reliability, accountability, and commitment.</p>
            </div>
        </div>
    </div>
</div>

 </div>
 </div>
 </section>`;
    return (
        <>
            {parse(htmlString)}
        </>
    );
};

export default About;
