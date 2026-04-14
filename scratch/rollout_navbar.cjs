const fs = require('fs');
const path = require('path');

const MASTER_HEADER_BASE = (relativePath, activeItem = 'services') => {
  const isServices = relativePath === '../';
  const servicesPath = isServices ? '' : 'services/';
  const getCls = (item) => (activeItem === item ? 'current' : '');

  return '<!-- ==================== HEADER ==================== -->\n' +
'<header class="main-header header-style-one">\n' +
'  <div class="header-lower">\n' +
'    <div class="main-box">\n' +
'      <div class="logo-box">\n' +
'        <div class="logo"><a href="' + relativePath + 'index.html"><img src="' + relativePath + 'images/rks-logo.png" alt="RKS Global Logistics Logo" style="width: auto; mix-blend-mode: multiply;"></a></div>\n' +
'      </div>\n' +
'      <div class="nav-outer">\n' +
'        <nav class="nav main-menu">\n' +
'          <ul class="navigation">\n' +
'            <li class="' + getCls('home') + '"><a href="' + relativePath + 'index.html">Home</a></li>\n' +
'            <li><a href="' + relativePath + 'index.html#about">About</a></li>\n' +
'            <li class="dropdown ' + getCls('services') + '"><a href="' + relativePath + 'index.html#services">Services</a>\n' +
'              <ul>\n' +
'                <li><a href="' + servicesPath + 'sea-freight.html">Sea Freight Solutions</a></li>\n' +
'                <li><a href="' + servicesPath + 'Warehousing.html">Warehousing Solutions</a></li>\n' +
'                <li><a href="' + servicesPath + 'container-freight.html">Container Freight Station</a></li>\n' +
'                <li><a href="' + servicesPath + 'odc-project-cargo.html">ODC And Project Cargo</a></li>\n' +
'                <li><a href="' + servicesPath + 'air-freight.html">Air Freight</a></li>\n' +
'                <li><a href="' + servicesPath + 'custom-clearance.html">Custom Clearance And Compliance</a></li>\n' +
'                <li><a href="' + servicesPath + 'transport-solutions.html">Transport Solutions</a></li>\n' +
'                <li><a href="' + servicesPath + 'value-added-services.html">Value Added Services</a></li>\n' +
'                <li><a href="' + servicesPath + 'consolidation.html">Consolidation Services</a></li>\n' +
'                <li><a href="' + servicesPath + 'nvocc.html">NVOCC Services</a></li>\n' +
'                <li><a href="' + servicesPath + 'nrior.html">NR-IOR Services</a></li>\n' +
'              </ul>\n' +
'              <div class="dropdown-btn sf-hidden"></div>\n' +
'            </li>\n' +
'            <li class="' + getCls('networking') + '"><a href="' + relativePath + 'networking.html">Networking</a></li>\n' +
'            <li class="' + getCls('contact') + '"><a href="' + relativePath + 'contact.html">Contact</a></li>\n' +
'          </ul>\n' +
'        </nav>\n' +
'      </div>\n' +
'      <div class="outer-box">\n' +
'        <span class="divider sf-hidden"></span>\n' +
'        <a href="tel:+918655944515" class="info-btn-two">\n' +
'          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">\n' +
'            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12a19.79 19.79 0 0 1-3-8.59A2 2 0 0 1 3 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>\n' +
'            <line x1="19" y1="5" x2="19" y2="11"></line>\n' +
'            <line x1="16" y1="8" x2="22" y2="8"></line>\n' +
'          </svg>\n' +
'          <span style="display:flex;flex-direction:column;align-items:flex-start;">\n' +
'            <small>Call for inquiry</small>\n' +
'            <strong>+91 86559 44515</strong>\n' +
'          </span>\n' +
'        </a>\n' +
'        <div class="mobile-nav-toggler sf-hidden"></div>\n' +
'      </div>\n' +
'    </div>\n' +
'  </div>\n' +
'  <div class="mobile-menu">\n' +
'    <div class="menu-backdrop"></div>\n' +
'    <nav class="menu-box">\n' +
'      <div class="upper-box">\n' +
'        <div class="nav-logo"><a href="' + relativePath + 'index.html"><img src="' + relativePath + 'images/rks-logo.png" alt="RKS Global Logistics Logo" style="max-height: 78px; width: auto; mix-blend-mode: multiply;"></a></div>\n' +
'        <div class="close-btn"><i class="icon fa fa-times"></i></div>\n' +
'      </div>\n' +
'      <ul class="navigation clearfix">\n' +
'        <li class="' + getCls('home') + '"><a href="' + relativePath + 'index.html">Home</a></li>\n' +
'        <li><a href="' + relativePath + 'index.html#about">About</a></li>\n' +
'        <li class="dropdown ' + getCls('services') + '"><a href="' + relativePath + 'index.html#services">Services</a>\n' +
'          <ul class="sf-hidden">\n' +
'            <li><a href="' + servicesPath + 'sea-freight.html">Sea Freight Solutions</a></li>\n' +
'            <li><a href="' + servicesPath + 'Warehousing.html">Warehousing Solutions</a></li>\n' +
'            <li><a href="' + servicesPath + 'container-freight.html">Container Freight Station</a></li>\n' +
'            <li><a href="' + servicesPath + 'odc-project-cargo.html">ODC And Project Cargo</a></li>\n' +
'            <li><a href="' + servicesPath + 'air-freight.html">Air Freight</a></li>\n' +
'            <li><a href="' + servicesPath + 'custom-clearance.html">Custom Clearance And Compliance</a></li>\n' +
'            <li><a href="' + servicesPath + 'transport-solutions.html">Transport Solutions</a></li>\n' +
'            <li><a href="' + servicesPath + 'value-added-services.html">Value Added Services</a></li>\n' +
'            <li><a href="' + servicesPath + 'consolidation.html">Consolidation Services</a></li>\n' +
'            <li><a href="' + servicesPath + 'nvocc.html">NVOCC Services</a></li>\n' +
'            <li><a href="' + servicesPath + 'nrior.html">NR-IOR Services</a></li>\n' +
'          </ul>\n' +
'          <div class="dropdown-btn"><i class="fa fa-angle-down"></i></div>\n' +
'        </li>\n' +
'        <li class="' + getCls('networking') + '"><a href="' + relativePath + 'networking.html">Networking</a></li>\n' +
'        <li class="' + getCls('contact') + '"><a href="' + relativePath + 'contact.html">Contact</a></li>\n' +
'      </ul>\n' +
'    </nav>\n' +
'  </div>\n' +
'  <div class="sticky-header">\n' +
'    <div class="auto-container">\n' +
'      <div class="inner-container">\n' +
'        <div class="logo">\n' +
'          <a href="' + relativePath + 'index.html"><img src="' + relativePath + 'images/rks-logo.png" alt="RKS Global Logistics Logo" style="max-height: 78px; width: auto; mix-blend-mode: multiply;"></a>\n' +
'        </div>\n' +
'        <div class="nav-outer">\n' +
'          <nav class="main-menu">\n' +
'            <div class="navbar-collapse show collapse clearfix">\n' +
'              <ul class="navigation clearfix">\n' +
'                <li class="' + getCls('home') + '"><a href="' + relativePath + 'index.html">Home</a></li>\n' +
'                <li><a href="' + relativePath + 'index.html#about">About</a></li>\n' +
'                <li class="dropdown ' + getCls('services') + '"><a href="' + relativePath + 'index.html#services">Services</a>\n' +
'                  <ul>\n' +
'                    <li><a href="' + servicesPath + 'sea-freight.html">Sea Freight Solutions</a></li>\n' +
'                    <li><a href="' + servicesPath + 'Warehousing.html">Warehousing Solutions</a></li>\n' +
'                    <li><a href="' + servicesPath + 'container-freight.html">Container Freight Station</a></li>\n' +
'                    <li><a href="' + servicesPath + 'odc-project-cargo.html">ODC And Project Cargo</a></li>\n' +
'                    <li><a href="' + servicesPath + 'air-freight.html">Air Freight</a></li>\n' +
'                    <li><a href="' + servicesPath + 'custom-clearance.html">Custom Clearance And Compliance</a></li>\n' +
'                    <li><a href="' + servicesPath + 'transport-solutions.html">Transport Solutions</a></li>\n' +
'                    <li><a href="' + servicesPath + 'value-added-services.html">Value Added Services</a></li>\n' +
'                    <li><a href="' + servicesPath + 'consolidation.html">Consolidation Services</a></li>\n' +
'                    <li><a href="' + servicesPath + 'nvocc.html">NVOCC Services</a></li>\n' +
'                    <li><a href="' + servicesPath + 'nrior.html">NR-IOR Services</a></li>\n' +
'                  </ul>\n' +
'                </li>\n' +
'                <li class="' + getCls('networking') + '"><a href="' + relativePath + 'networking.html">Networking</a></li>\n' +
'                <li class="' + getCls('contact') + '"><a href="' + relativePath + 'contact.html">Contact</a></li>\n' +
'              </ul>\n' +
'            </div>\n' +
'          </nav>\n' +
'        </div>\n' +
      '</div>\n' +
    '</div>\n' +
  '</div>\n' +
'</header>\n' +
'<!-- ==================== END HEADER ==================== -->';
};

function processFile(filePath, isRoot = false) {
    console.log('Processing ' + filePath + '...');
    let content = fs.readFileSync(filePath, 'utf8');
    
    let activeItem = 'services';
    if (filePath.endsWith('contact.html')) activeItem = 'contact';
    else if (filePath.endsWith('networking.html')) activeItem = 'networking';
    else if (filePath.endsWith('index.html')) activeItem = 'home';
    
    const relPath = isRoot ? './' : '../';
    const headerHtml = MASTER_HEADER_BASE(relPath, activeItem);
    
    // Using string matching for replacement instead of complex regex to avoid syntax errors
    const startTag = '<!-- ==================== HEADER ==================== -->';
    const endTag = '<!-- ==================== END HEADER ==================== -->';
    
    const startIndex = content.indexOf(startTag);
    const endIndex = content.indexOf(endTag);
    
    if (startIndex !== -1 && endIndex !== -1) {
        const preHeader = content.substring(0, startIndex);
        const postHeader = content.substring(endIndex + endTag.length);
        content = preHeader + headerHtml + postHeader;
        fs.writeFileSync(filePath, content);
        console.log('Updated ' + filePath + ' [Active: ' + activeItem + ']');
    } else {
        console.log('COULD NOT FIND HEADER COMMENTS IN ' + filePath);
    }
}

const servicesDir = path.join(__dirname, '..', 'public', 'services');
if (fs.existsSync(servicesDir)) {
    const files = fs.readdirSync(servicesDir).filter(f => f.endsWith('.html'));
    files.forEach(file => {
        processFile(path.join(servicesDir, file), false);
    });
}

const rootDir = path.join(__dirname, '..', 'public');
const rootFiles = ['contact.html', 'networking.html'];
rootFiles.forEach(file => {
    const filePath = path.join(rootDir, file);
    if (fs.existsSync(filePath)) {
        processFile(filePath, true);
    }
});
