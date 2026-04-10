const fs = require('fs');
const path = require('path');

const publicDir = 'c:/Users/ameya/OneDrive/Desktop/kit2/public';
const servicesDir = path.join(publicDir, 'services');

function fixLogoStyles(filePath) {
    if (!fs.existsSync(filePath)) return;
    
    let html = fs.readFileSync(filePath, 'utf8');
    
    const oldCssStart = html.indexOf('/* ===== NEW LOGO CONTAINMENT ===== */');
    if (oldCssStart !== -1) {
       const oldCssEnd = html.indexOf('/* ===== PAGE TITLE', oldCssStart);
       if (oldCssEnd !== -1) {
           html = html.substring(0, oldCssStart) + html.substring(oldCssEnd);
       }
    }
    
    const newCss = `
    /* ===== NEW LOGO CONTAINMENT ===== */
    .main-header .header-lower { height: 80px !important; max-height: 80px !important; }
    .main-header .header-lower .main-box { height: 80px !important; padding-top: 0 !important; padding-bottom: 0 !important; align-items: center !important; }
    .main-header .header-lower .logo-box { height: 100% !important; padding: 0 !important; margin: 0 !important; display: flex; align-items: center; overflow: hidden !important; }
    .main-header .logo { height: 100%; display: flex; align-items: center; }
    .main-header .logo img { max-height: none !important; height: 130px !important; width: auto !important; object-fit: contain; transform: none !important; margin: 0 !important; }
    /* ============================== */
    /* ===== PAGE TITLE`;
    
    html = html.replace(/\/\*\s*=====\s*PAGE TITLE/g, newCss.trim());
    fs.writeFileSync(filePath, html);
    
}

// Fix services
if (fs.existsSync(servicesDir)) {
    const files = fs.readdirSync(servicesDir).filter(f => f.endsWith('.html'));
    files.forEach(f => fixLogoStyles(path.join(servicesDir, f)));
}

// Fix other pages
['contact.html', 'networking.html'].forEach(f => fixLogoStyles(path.join(publicDir, f)));

console.log("Logo containment CSS updated (130px) to all HTML pages!");
