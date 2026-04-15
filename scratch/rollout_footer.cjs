const fs = require('fs');
const path = require('path');

const MASTER_FOOTER_TEMPLATE = (relativePath) => {
  const isServicesFolder = relativePath === '../';
  const servicesLinkPrefix = isServicesFolder ? '' : 'services/';
  const root = relativePath;

  // Localized SVGs to replace broken font icons
  const svgAngleRight = '<svg class="footer-svg-icon" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 221.3h-343c-17.7 0-32.1 14.4-32.1 32.1s14.4 32.1 32.1 32.1h343L233.4 397.7c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>';
  const svgPhone = '<svg class="footer-svg-icon-contact" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 359c7 4.5 15.6 5.4 23.3 2.4s13.4-9.1 15.3-17.1c11.7-48.8 31-94.4 57.1-135.2c5-7.8 6-17.4 2.8-26s-10.4-14.8-19.3-16.7c-7.2-1.5-14.1-4.1-20.5-7.6l-50.6-27.4c-13.3-7.2-19.5-22.6-14.6-36.9l36.3-104.5z"/></svg>';
  const svgEnvelope = '<svg class="footer-svg-icon-contact" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>';
  const svgMapMarker = '<svg class="footer-svg-icon-contact" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>';

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
'                <li>' + svgAngleRight + '<a href="' + servicesLinkPrefix + 'sea-freight.html">Sea Freight Solutions</a></li>\n' +
'                <li>' + svgAngleRight + '<a href="' + servicesLinkPrefix + 'Warehousing.html">Warehousing Solutions</a></li>\n' +
'                <li>' + svgAngleRight + '<a href="' + servicesLinkPrefix + 'container-freight.html">Container Freight Station</a></li>\n' +
'                <li>' + svgAngleRight + '<a href="' + servicesLinkPrefix + 'odc-project-cargo.html">ODC And Project Cargo</a></li>\n' +
'                <li>' + svgAngleRight + '<a href="' + servicesLinkPrefix + 'custom-clearance.html">Custom Clearance</a></li>\n' +
'                <li>' + svgAngleRight + '<a href="' + servicesLinkPrefix + 'consolidation.html">Consolidation Services</a></li>\n' +
'              </ul>\n' +
'              <ul class="user-links">\n' +
'                <li>' + svgAngleRight + '<a href="' + servicesLinkPrefix + 'air-freight.html">Air Freight</a></li>\n' +
'                <li>' + svgAngleRight + '<a href="' + servicesLinkPrefix + 'transport-solutions.html">Transport Solutions</a></li>\n' +
'                <li>' + svgAngleRight + '<a href="' + servicesLinkPrefix + 'value-added-services.html">Value Added Services</a></li>\n' +
'                <li>' + svgAngleRight + '<a href="' + servicesLinkPrefix + 'nvocc.html">NVOCC Services</a></li>\n' +
'                <li>' + svgAngleRight + '<a href="' + servicesLinkPrefix + 'nrior.html">NR-IOR Services</a></li>\n' +
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
'                <li>' + svgPhone + ' +91 86559 44515</li>\n' +
'                <li>' + svgEnvelope + ' <span>kam@kintlog.com</span></li>\n' +
'                <li>' + svgMapMarker + ' Crescent Business Square, Office No. 1009, 10th Floor, Opp Gundecha Onclave, Kherani Road, Saki Naka, Mumbai - 400076, India.</li>\n' +
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
        const cssLink = relPath + 'css/footer.css';
        if (!content.includes(cssLink)) {
            content = content.replace('</head>', '  <link rel="stylesheet" href="' + cssLink + '">\n</head>');
        }
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
