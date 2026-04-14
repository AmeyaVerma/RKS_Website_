const fs = require('fs');
const path = require('path');

const MASTER_FOOTER_TEMPLATE = (relativePath) => {
  const isServicesFolder = relativePath === '../';
  const servicesLinkPrefix = isServicesFolder ? '' : 'services/';
  const root = relativePath;

  return '<!-- ==================== FOOTER ==================== -->\n' +
'<footer class="main-footer footer-style-one">\n' +
'  <div class="bg bg-image" style="background-image:url(\'' + root + 'images/extracted/asset_59.webp\')"></div>\n' +
'  <div class="icon-plane-3 bounce-x"></div>\n' +
'  <div class="widgets-section">\n' +
'    <div class="auto-container">\n' +
'      <div class="row">\n' +
'        <div class="footer-column col-lg-4 col-md-6 col-sm-12">\n' +
'          <div class="footer-widget about-widget">\n' +
'            <div class="widget-content">\n' +
'              <div class="logo"><img src="' + root + 'images/rks-logo.png" alt="RKS Global Logistics Logo" style="width: 50%;"></div>\n' +
'              <div class="text">RKS Global Logistics provides customized services across all verticals, which are cost-effective and helpful in delivering the best logistical solutions.</div>\n' +
'            </div>\n' +
'          </div>\n' +
'        </div>\n' +
'        \n' +
'        <div class="footer-column col-lg-5 col-md-6 col-sm-12">\n' +
'          <div class="footer-widget links-widget">\n' +
'            <h5 class="widget-title">Our Services</h5>\n' +
'            <div class="widget-content service-2">\n' +
'              <ul class="user-links">\n' +
'                <li><i class="fa fa-angles-right"></i><a href="' + servicesLinkPrefix + 'sea-freight.html">Sea Freight Solutions</a></li>\n' +
'                <li><i class="fa fa-angles-right"></i><a href="' + servicesLinkPrefix + 'Warehousing.html">Warehousing Solutions</a></li>\n' +
'                <li><i class="fa fa-angles-right"></i><a href="' + servicesLinkPrefix + 'container-freight.html">Container Freight Station</a></li>\n' +
'                <li><i class="fa fa-angles-right"></i><a href="' + servicesLinkPrefix + 'odc-project-cargo.html">ODC And Project Cargo</a></li>\n' +
'                <li><i class="fa fa-angles-right"></i><a href="' + servicesLinkPrefix + 'custom-clearance.html">Custom Clearance</a></li>\n' +
'                <li><i class="fa fa-angles-right"></i><a href="' + servicesLinkPrefix + 'consolidation.html">Consolidation Services</a></li>\n' +
'              </ul>\n' +
'              <ul class="user-links">\n' +
'                <li><i class="fa fa-angles-right"></i><a href="' + servicesLinkPrefix + 'air-freight.html">Air Freight</a></li>\n' +
'                <li><i class="fa fa-angles-right"></i><a href="' + servicesLinkPrefix + 'transport-solutions.html">Transport Solutions</a></li>\n' +
'                <li><i class="fa fa-angles-right"></i><a href="' + servicesLinkPrefix + 'value-added-services.html">Value Added Services</a></li>\n' +
'                <li><i class="fa fa-angles-right"></i><a href="' + servicesLinkPrefix + 'nvocc.html">NVOCC Services</a></li>\n' +
'                <li><i class="fa fa-angles-right"></i><a href="' + servicesLinkPrefix + 'nrior.html">NR-IOR Services</a></li>\n' +
'              </ul>\n' +
'            </div>\n' +
'          </div>\n' +
'        </div>\n' +
'        \n' +
'        <div class="footer-column col-lg-3 col-md-6 col-sm-12">\n' +
'          <div class="footer-widget contact-widget">\n' +
'            <h5 class="widget-title">Contact Us</h5>\n' +
'            <div class="widget-content">\n' +
'              <ul class="contact-list-two">\n' +
'                <li><i class="fal fa-phone"></i> +91 86559 44515</li>\n' +
'                <li><i class="fal fa-envelope"></i> <span>kam@kintlog.com</span></li>\n' +
'                <li><i class="fal fa-map-marker-alt"></i> Crescent Business Square, Office No. 1009, 10th Floor, Opp Gundecha Onclave, Kherani Road, Saki Naka, Mumbai - 400076, India.</li>\n' +
'              </ul>\n' +
'            </div>\n' +
'          </div>\n' +
'        </div>\n' +
'      </div>\n' +
'    </div>\n' +
'  </div>\n' +
'  <div class="footer-bottom">\n' +
'    <div class="auto-container">\n' +
'      <div class="inner-container">\n' +
'        <div class="copyright-text">Copyright © 2026 RKS Global Logistics Pvt. Ltd. All Rights Reserved.</div>\n' +
'      </div>\n' +
'    </div>\n' +
'  </div>\n' +
'</footer>\n' +
'<!-- ==================== END FOOTER ==================== -->';
};

function processFile(filePath, isRoot = false) {
    console.log('Processing ' + filePath + '...');
    let content = fs.readFileSync(filePath, 'utf8');
    const relPath = isRoot ? './' : '../';
    const footerHtml = MASTER_FOOTER_TEMPLATE(relPath);
    const footerRegex = /<!-- ==================== FOOTER ==================== -->[\s\S]*?<!-- ==================== END FOOTER ==================== -->|<!-- ==================== FOOTER ==================== -->[\s\S]*?<\/footer>|<footer[\s\S]*?<\/footer>/;
    
    if (footerRegex.test(content)) {
        content = content.replace(footerRegex, footerHtml);
        fs.writeFileSync(filePath, content);
        console.log('Updated ' + filePath);
    } else {
        console.log('COULD NOT FIND FOOTER IN ' + filePath);
    }
}

// 1. Process Service Pages
const servicesDir = path.join(__dirname, '..', 'public', 'services');
if (fs.existsSync(servicesDir)) {
    const files = fs.readdirSync(servicesDir).filter(f => f.endsWith('.html'));
    files.forEach(file => {
        processFile(path.join(servicesDir, file), false);
    });
}

// 2. Process Root Pages
const rootDir = path.join(__dirname, '..', 'public');
const rootFiles = ['contact.html', 'networking.html'];
rootFiles.forEach(file => {
    const filePath = path.join(rootDir, file);
    if (fs.existsSync(filePath)) {
        processFile(filePath, true);
    }
});
