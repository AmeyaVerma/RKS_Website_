import React from 'react';
import parse from 'html-react-parser';

const Footer = () => {
    // Note: Links for the React app use root-relative paths. 
    // The rollout script will convert these to relative paths for static files.
    const htmlString = `<footer class="main-footer footer-style-one">
  <div class="bg bg-image" style="background-image:url('/images/extracted/asset_59.webp')"></div>
  <div class="icon-plane-3 bounce-x"></div>
  <div class="widgets-section">
    <div class="auto-container">
      <div class="row">
        <div class="footer-column col-lg-4 col-md-6 col-sm-12">
          <div class="footer-widget about-widget">
            <div class="widget-content">
              <div class="logo"><img src="/images/rks-logo.png" alt="RKS Global Logistics Logo" style="width: 50%;"></div>
              <div class="text">RKS Global Logistics provides customized services across all verticals, which are cost-effective and helpful in delivering the best logistical solutions.</div>
            </div>
          </div>
        </div>
        
        <div class="footer-column col-lg-5 col-md-6 col-sm-12">
          <div class="footer-widget links-widget">
            <h5 class="widget-title">Our Services</h5>
            <div class="widget-content service-2">
              <ul class="user-links">
                <li><i class="fa fa-angles-right"></i><a href="/services/sea-freight.html">Sea Freight Solutions</a></li>
                <li><i class="fa fa-angles-right"></i><a href="/services/Warehousing.html">Warehousing Solutions</a></li>
                <li><i class="fa fa-angles-right"></i><a href="/services/container-freight.html">Container Freight Station</a></li>
                <li><i class="fa fa-angles-right"></i><a href="/services/odc-project-cargo.html">ODC And Project Cargo</a></li>
                <li><i class="fa fa-angles-right"></i><a href="/services/custom-clearance.html">Custom Clearance</a></li>
                <li><i class="fa fa-angles-right"></i><a href="/services/consolidation.html">Consolidation Services</a></li>
              </ul>
              <ul class="user-links">
                <li><i class="fa fa-angles-right"></i><a href="/services/air-freight.html">Air Freight</a></li>
                <li><i class="fa fa-angles-right"></i><a href="/services/transport-solutions.html">Transport Solutions</a></li>
                <li><i class="fa fa-angles-right"></i><a href="/services/value-added-services.html">Value Added Services</a></li>
                <li><i class="fa fa-angles-right"></i><a href="/services/nvocc.html">NVOCC Services</a></li>
                <li><i class="fa fa-angles-right"></i><a href="/services/nrior.html">NR-IOR Services</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="footer-column col-lg-3 col-md-6 col-sm-12">
          <div class="footer-widget contact-widget">
            <h5 class="widget-title">Contact Us</h5>
            <div class="widget-content">
              <ul class="contact-list-two">
                <li><i class="fal fa-phone"></i> +91 86559 44515</li>
                <li><i class="fal fa-envelope"></i> <span>kam@kintlog.com</span></li>
                <li><i class="fal fa-map-marker-alt"></i> Crescent Business Square, Office No. 1009, 10th Floor, Opp Gundecha Onclave, Kherani Road, Saki Naka, Mumbai - 400076, India.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="auto-container">
      <div class="inner-container">
        <div class="copyright-text">Copyright © 2026 RKS Global Logistics Pvt. Ltd. All Rights Reserved.</div>
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
