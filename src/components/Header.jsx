import React from 'react';
import parse from 'html-react-parser';

const Header = () => {
    const htmlString = `<header class="main-header header-style-one">
 
 <div class=header-lower>
 <div class=main-box>
 <div class=logo-box>
 <div class=logo><img src="/images/rks-logo.png" alt="RKS Global Logistics Logo" style="width: auto; mix-blend-mode: multiply;"></div>
 </div>
 <div class=nav-outer>
 <nav class="nav main-menu">
 <ul class=navigation>
 <li class=current><a href="/">Home</a>
 </li>
 <li><a href="/#about">About</a>
 </li>
 <li class=dropdown><a href="/#services">Services</a>
 <ul>
 <li><a href="/services/sea-freight.html">Sea Freight Solutions</a></li>
 <li><a href="/services/Warehousing.html">Warehousing Solutions</a></li>
 <li><a href="/services/container-freight.html">Container Freight Station</a></li>
 <li><a href="/services/odc-project-cargo.html">ODC And Project Cargo</a></li>
 <li><a href="/services/air-freight.html">Air Freight</a></li>
 <li><a href="/services/custom-clearance.html">Custom Clearance And Compliance</a></li>
 <li><a href="/services/transport-solutions.html">Transport Solutions</a></li>
 <li><a href="/services/value-added-services.html">Value Added Services</a></li>
 <li><a href="/services/consolidation.html">Consolidation Services</a></li>
 <li><a href="/services/nvocc.html">NVOCC Services</a></li>
 <li><a href="/services/nrior.html">NR-IOR Services</a></li>
 </ul>
 <div class="dropdown-btn sf-hidden"></div></li>
 <li><a href="/networking.html">Networking</a>
 </li>
 <li><a href="/contact.html">Contact</a></li>
 </ul>
 </nav>
 </div>
 <div class=outer-box>
 <span class="divider sf-hidden"></span>
 <span class=info-btn-two>
 <i class="icon icon-1 lnr-icon-phone-plus"></i>
 <small>Call for inquiry</small>
 <strong>+91 86559 44515</strong>
 </span>

 
 <div class="mobile-nav-toggler sf-hidden"></div>
 </div>
 </div>
 </div>
 <div class=mobile-menu>
 <div class=menu-backdrop></div>
 <nav class=menu-box>
 <div class=upper-box>
 <div class=nav-logo><img src="/images/rks-logo.png" alt="RKS Global Logistics Logo" style="max-height: 78px; width: auto; mix-blend-mode: multiply;"></div>
 <div class=close-btn><i class="icon fa fa-times"></i></div>
 </div>
 <ul class="navigation clearfix">
 
 <li class=current><a href="/">Home</a>
 </li>
 <li><a href="/#about">About</a>
 </li>
 <li class=dropdown><a href="/#services">Services</a>
 <ul class=sf-hidden>
 <li><a href="/services/sea-freight.html">Sea Freight Solutions</a></li>
 <li><a href="/services/Warehousing.html">Warehousing Solutions</a></li>
 <li><a href="/services/container-freight.html">Container Freight Station</a></li>
 <li><a href="/services/odc-project-cargo.html">ODC And Project Cargo</a></li>
 <li><a href="/services/air-freight.html">Air Freight</a></li>
 <li><a href="/services/custom-clearance.html">Custom Clearance And Compliance</a></li>
 <li><a href="/services/transport-solutions.html">Transport Solutions</a></li>
 <li><a href="/services/value-added-services.html">Value Added Services</a></li>
 <li><a href="/services/consolidation.html">Consolidation Services</a></li>
 <li><a href="/services/nvocc.html">NVOCC Services</a></li>
 <li><a href="/services/nrior.html">NR-IOR Services</a></li>
 </ul>
 <div class=dropdown-btn><i class="fa fa-angle-down"></i></div></li>
 <li><a href="/networking.html">Networking</a>
 </li>
 <li><a href="/contact.html">Contact</a></li>
 </ul>
 <ul class=contact-list-one>
 <li>
 <i class="icon lnr-icon-phone-handset"></i>
 <span class=title>Call Now</span>
 <div class=text>+91 86559 44515</span></div>
 </li>
 <li>
 <i class="icon lnr-icon-envelope1"></i>
 <span class=title>Send Email</span>
 <div class=text><span>kam@kintlog.com</span></span>
 </div>
 </li>
 <li>
 <i class="icon lnr-icon-map-marker"></i>
 <span class=title>Address</span>
 <div class=text>Office No. 710, Mayuresh Cosmos, Sec-11, Plot No. 37, CBD Belapur, Navi Mumbai, Maharashtra - 400614, India</div>
 </li>
 </ul>

 </nav>
 </div>
 <div class=search-popup>
 <span class=search-back-drop></span>
 <button class=close-search><span class="fa fa-times"></span></button>
 <div class=search-inner>
 <form method=get action="/">
 <div class=form-group>
 <input type=search name=search-field value placeholder=Search... required>
 <button type=submit><i class="fa fa-search"></i></button>
 </div>
 </form>
 </div>
 </div>
 <div class=sticky-header>
 <div class=auto-container>
 <div class=inner-container>
 <div class=logo>
 <img src="/images/rks-logo.png" alt="RKS Global Logistics Logo" style="max-height: 78px; width: auto; mix-blend-mode: multiply;">
 </div>
 <div class=nav-outer>
 <nav class=main-menu>
 <div class="navbar-collapse show collapse clearfix">
 <ul class="navigation clearfix">
 
 <li class=current>Home</span>
 </li>
 <li>About</span>
 </li>
 <li class=dropdown>Services</span>
 <ul>
 <li>Sea Frieght Solution</span></li>
 <li>Liner Agency</span></li>
 <li>Warehousing Solution</span></li>
 <li>Container Freight Station</span></li>
 <li>ODC And Project Cargo</span></li>
 <li>Air Freight</span></li>
 <li>Transport Solution</span></li>
 <li>Custom Clearance And Compliance</span></li>
 <li>Trading And Commodities</span></li>
 <li><a href="/services/consolidation.html">Consolidation Services</a></li>
 <li><a href="/services/nvocc.html">NVOCC Services</a></li>
 <li><a href="/services/nrior.html">NR-IOR Services</a></li>
 </ul>
 <div class="dropdown-btn sf-hidden"></div></li>
 <li><a href="/networking.html">Networking</a>
 </li>
 <li><a href="/contact.html">Contact</a></li>
 </ul>
 </div>
 </nav>
 <div class="mobile-nav-toggler sf-hidden"></div>
 </div>
 </div>
 </div>
 </div>
 </header>`;
    return (
        <>
            {parse(htmlString)}
        </>
    );
};

export default Header;
