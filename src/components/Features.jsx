import React from 'react';
import parse from 'html-react-parser';

const Features = () => {
    const htmlString = `<style>
  .features-section .bg-pattern-2 { display: none !important; }
  .features-section .bg-map-2 { display: none !important; }
</style>
<section class="features-section p-0">
 <div class="icon-plane-4 bounce-y"></div>
 <div class=auto-container>
 <div class=outer-box>
 <div class="bg bg-pattern-2"></div>
 <div class="sec-title text-center">
 <div class=sub-title-outer> <span class=sub-title>Why RKS Global Logistics</span>
 <h2 class="scrub-each-word text-split" style=opacity:1>Your logistics need seamless delivery</h2>
 </div>
 </div>
 <div class="row g-0">
 <div class="features-column col-lg-8 col-md-12 order-2 wow fadeInRight animated" style=visibility:visible;animation-name:fadeInRight>
 <div class="inner-column kinetic-energy">
 <div class="row g-0">
 <div class="feature-block col-lg-6 col-md-6 col-sm-12">
 <div class=inner-box>
 <div class=bg-map-2></div>
 <div class=icon-box><img class=icon src="/images/extracted/asset_21.webp" alt></div>
 <h5 class=title>Global Reach, Local Expertise</span></h5>
 <div class=text>Worldwide logistics solutions, backed by local expertise
 for seamless operations.</div>
 </div>
 </div>
 <div class="feature-block col-lg-6 col-md-6 col-sm-12">
 <div class=inner-box>
 <div class=bg-map-2></div>
 <div class=icon-box><img class=icon src="/images/extracted/asset_22.webp" alt></div>
 <h5 class=title>Cutting-Edge Technology</span> </h5>
 <div class=text>The latest logistics tech ensures efficient and reliable
 delivery.</div>
 </div>
 </div>
 <div class="feature-block col-lg-6 col-md-6 col-sm-12">
 <div class=inner-box>
 <div class=bg-map-2></div>
 <div class=icon-box><img class=icon src="/images/extracted/asset_23.webp" alt></div>
 <h5 class=title>Cost-Effective Solutions</span></h5>
 <div class=text> Cost-effective logistics solutions through strategic
 partnerships and innovative approaches.</div>
 </div>
 </div>
 <div class="feature-block col-lg-6 col-md-6 col-sm-12">
 <div class=inner-box>
 <div class=bg-map-2></div>
 <div class=icon-box><img class=icon src="/images/extracted/asset_24.webp" alt></div>
 <h5 class=title>Commitment to Sustainability</span></h5>
 <div class=text>Eco-friendly shipping options &amp; efforts to reduce carbon
 footprint demonstrate our commitment to sustainability.</div>
 </div>
 </div>
 </div>
 </div>
 </div>
 <div class="info-banner col-lg-4 col-md-12 col-sm-12 wow fadeInLeft animated" style=visibility:visible;animation-name:fadeInLeft>
 <div class=content-box>
 <div class=image-box>
 <figure class=image><img src="/images/extracted/asset_25.webp" alt=Image>
 </figure>
 <div class=icon-lines></div>
 </div>
 <i class="icon-two flaticon-delivery-6"></i>
 <h4 class=title>Your Cargo, <span>Our Responsibility </span></h4>
 <span class=info-btn-two><i class="icon fal fa-envelope"></i> <small>Write email</small> <strong>kam@kintlog.com</strong> </span>
 <span class=info-btn-two><i class="icon fal fa-phone"></i> <small>Call for
 inquiry</small> <strong>+91 86559 44515</strong> </span>
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

export default Features;

