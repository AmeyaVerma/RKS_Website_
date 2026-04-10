import React from 'react';
import parse from 'html-react-parser';

const Footer = () => {
    const htmlString = `<footer class="main-footer footer-style-one">
 <div class="bg bg-image" style="background-image:url("/images/extracted/asset_59.webp")"></div>
 <div class="icon-plane-3 bounce-x"></div>
 <div class=widgets-section>
 <div class=auto-container>
 <div class=row>
 <div class="footer-column col-lg-4 col-md-6 col-sm-12">
 <div class="footer-widget about-widget">
 <div class=widget-content>
 <div class=logo><img src="/images/rks-logo.png" alt="RKS Global Logistics Logo" style="width: 50%;"></span></div>
 <div class=text>RKS Global Logistics provides customized services across all verticals, which are cost-effective and helpful in delivering the best logistical solutions.</div>
 
 </div>
 </div>
 </div>
 
 <div class="footer-column col-lg-5 col-md-6 col-sm-12">
 <div class="footer-widget links-widget">
 <h5 class=widget-title>Our Services</h5>
 <div class="widget-content service-2">
 <ul class=user-links>
 <li><i class="fa fa-angles-right"></i>Sea Freight Solutions</span></li>
 <li><i class="fa fa-angles-right"></i>Warehousing Solutions</span></li>
 <li><i class="fa fa-angles-right"></i>Container Freight Station</span></li>
 <li><i class="fa fa-angles-right"></i>ODC And Project Cargo</span></li>
 </ul>
 <ul class=user-links>
 <li><i class="fa fa-angles-right"></i>Air Freight</span></li>
 <li><i class="fa fa-angles-right"></i>Custom Clearance And Compliance</span></li>
 <li><i class="fa fa-angles-right"></i>Transport Solutions</span></li>
 <li><i class="fa fa-angles-right"></i>Value Added Services</span></li>
 </ul>
 </div>
 </div>
 </div>
 
 <div class="footer-column col-lg-3 col-md-6 col-sm-12">
 <div class="footer-widget contact-widget">
 <h5 class=widget-title>Contact Us</h5>
 <div class=widget-content>
 <ul class=contact-list-two>
 <li><i class="fal fa-phone"></i> +91 86559 44515</span></li>
 <li><i class="fal fa-envelope"></i> <span>kam@kintlog.com</span></span></li>
 <li><i class="fal fa-map-marker-alt"></i> Crescent Business Square, Office No. 1009, 10th Floor, Opp Gundecha Onclave, Kherani Road, Saki Naka, Mumbai - 400076, India.</li>
 </ul>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 <div class=footer-bottom>
 <div class=auto-container>
 <div class=inner-container>
 <div class=copyright-text>Copyright © 2026 RKS Global Logistics Pvt. Ltd. All
 Rights Reserved.</span> </div>
 </div>
 </div>
 </div>
 </footer>`;
    return (
        <>
            {parse(htmlString)}
        </>
    );
};

export default Footer;

