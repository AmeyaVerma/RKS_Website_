const fs = require('fs').promises;
const path = require('path');

const navbarHtml = `<header class="main-header header-style-one">
 
 <div class=header-lower>
 <div class=main-box>
 <div class=logo-box>
 <div class=logo><img src="/images/rks-logo.png" alt="RKS Global Logistics Logo"></div>
 </div>
 <div class=nav-outer>
 <nav class="nav main-menu">
 <ul class=navigation>
 <li class=current><a href="/">Home</a>
 </li>
 <li><a href="/#about">About</a>
 </li>
 <li class=dropdown><a href="/#services">Services <span class="nav-plus">+</span></a>
 <ul>
 <li><a href="/services/sea-freight.html">Sea Freight Solutions</a></li>
 <li><a href="/services/Warehousing.html">Warehousing Solutions</a></li>
 <li><a href="/services/container-freight.html">Container Freight Station</a></li>
 <li><a href="/services/odc-project-cargo.html">ODDC And Project Cargo</a></li>
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
 <a href="tel:+918655944515" class="info-btn-two">
 <span class="icon-wrap"><i class="fa fa-phone"></i></span>
 <span class="text-wrap">
 <small>Call for inquiry</small>
 <strong>+91 86559 44515</strong>
 </span>
 </a>

 
 <div class="mobile-nav-toggler sf-hidden"></div>
 </div>
 </div>
 </div>
 </header>`;

async function processFile(filePath) {
    if (!filePath.endsWith('.html')) return;

    try {
        let content = await fs.readFile(filePath, 'utf8');
        let originalContent = content;

        // 1. Remove ANY old header/sticky style blocks or legacy injections
        const headerIndex = content.indexOf('<header');
        if (headerIndex !== -1) {
            let headContent = content.substring(0, headerIndex);
            
            // Remove <!-- ==================== HEADER ==================== --> and its following <style> block
            const headerBlockRegex = /<!-- ==================== HEADER ==================== -->\s*<style>[\s\S]*?<\/style>/i;
            headContent = headContent.replace(headerBlockRegex, '<!-- ==================== HEADER ==================== -->');

            // Remove legacy logo containment injections
            const logoContRegex = /\/\* ===== NEW LOGO CONTAINMENT ===== \*\/[\s\S]*?\/\* =+ \*\//i;
            headContent = headContent.replace(logoContRegex, '');

            // Remove previous style overrides
            const stickyStyleRegex = /[\t ]*\/\* ===== STICKY HEADER ===== \*\/[\s\S]*?(@media [\s\S]*?\{[\s\S]*?\}[\s\S]*?)*?[\t ]*\/\* ===== PAGE TITLE ===== \*\//i;
            headContent = headContent.replace(stickyStyleRegex, '/* ===== PAGE TITLE ===== */');
            
            const oldInjectedStylesRegex = /<style id="global-header-overrides">[\s\S]*?<\/style>/i;
            headContent = headContent.replace(oldInjectedStylesRegex, '');

            content = headContent + content.substring(headerIndex);
        }

        // 2. Inject SINGLE GLOBAL LINK into head
        const sharedNavLink = `<link rel="stylesheet" href="/css/header-global.css" id="locked-nav-css">`;
        if (!content.includes('locked-nav-css')) {
            content = content.replace('</head>', `${sharedNavLink}\n</head>`);
        }

        // 3. Standardize Header HTML
        const headerRegex = /<header[^>]*class="[^"]*main-header[^"]*"[^>]*>([\s\S]*?)<\/header>/i;
        if (headerRegex.test(content)) {
            content = content.replace(headerRegex, navbarHtml);
        }

        if (content !== originalContent) {
            await fs.writeFile(filePath, content, 'utf8');
            console.log(`Locked & Synced: ${path.relative(process.cwd(), filePath)}`);
        }
    } catch (err) {
        console.error(`Error processing ${filePath}:`, err);
    }
}

async function walk(dir) {
    const files = await fs.readdir(dir);
    await Promise.all(files.map(async (file) => {
        const filePath = path.join(dir, file);
        const stats = await fs.stat(filePath);
        if (stats.isDirectory()) {
            await walk(filePath);
        } else {
            await processFile(filePath);
        }
    }));
}

const publicDir = 'c:/Users/ameya/OneDrive/Desktop/kit2/public';

console.log('Synchronizing all pages to Locked Global Navbar (80px Logo)...');
walk(publicDir)
    .then(() => console.log('Global Locked Navbar Sync Complete!'))
    .catch(err => console.error('Sync failed:', err));
