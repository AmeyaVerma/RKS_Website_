const fs = require('fs');
const cheerio = require('cheerio');

const htmlPath = 'C:/Users/ameya/Downloads/Kinetic International Logistics & Shipping Company (23_02_2026 21：44：31).html';
const html = fs.readFileSync(htmlPath, 'utf8');

const $ = cheerio.load(html);

let cssContent = '';
$('style').each((i, el) => {
    cssContent += $(el).text() + '\n\n';
});

fs.writeFileSync('C:/Users/ameya/OneDrive/Desktop/kit2/src/raw_kintlog.css', cssContent);
console.log('CSS extracted length:', cssContent.length);
