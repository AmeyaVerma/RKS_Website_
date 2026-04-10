const fs = require('fs');
const path = 'C:/Users/ameya/Downloads/Kinetic International Logistics & Shipping Company (23_02_2026 21：44：31).html';
let html = fs.readFileSync(path, 'utf8');
html = html.replace(/src=\"data:image[^\"]+\"/g, 'src=\"#\"');
html = html.replace(/url\(\"data:image[^\"]+\"\)/g, 'url(\"#\")');
fs.writeFileSync('C:/Users/ameya/OneDrive/Desktop/kit2/clean_original.html', html);
console.log('Cleaned length: ' + html.length);
