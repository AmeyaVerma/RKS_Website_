const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

const srcHtmlPath = 'C:/Users/ameya/Downloads/Kinetic International Logistics & Shipping Company (23_02_2026 21：44：31).html';
const html = fs.readFileSync(srcHtmlPath, 'utf8');
const $ = cheerio.load(html);

// Find the services section
const servicesSection = $('section.services-section');
const imgs = servicesSection.find('img');

console.log(`Found ${imgs.length} images in the services section.`);

let jsxPath = 'C:/Users/ameya/OneDrive/Desktop/kit2/src/components/Services.jsx';
let jsxContent = fs.readFileSync(jsxPath, 'utf8');

imgs.each((index, el) => {
    let src = $(el).attr('src');
    if (src && src.startsWith('data:image')) {
        // Extract the base64 content
        let matches = src.match(/^data:image\/([a-zA-Z0-9+-]+);base64,(.+)$/);
        if (matches && matches.length === 3) {
            let ext = matches[1];
            if (ext === 'jpeg') ext = 'jpg';
            if (ext === 'svg+xml') ext = 'svg';

            let data = matches[2];
            let buffer = Buffer.from(data, 'base64');
            let filename = `service_${index + 1}.${ext}`;
            let outPath = path.join('C:/Users/ameya/OneDrive/Desktop/kit2/public/images/services', filename);

            fs.writeFileSync(outPath, buffer);
            console.log(`Saved ${outPath}`);

            // Now, we need to replace the n-th empty src="#" in the JSX with our new path.
            // Since our generate_components script replaced src="data:image..." with src="#"
            // Actually wait, let's verify what is in the JSX.
        } else {
            // Maybe it's not base64, eg literal svg?
            console.log(`Image ${index} data URI did not match base64 pattern.`);
        }
    } else {
        console.log(`Image ${index} is not a data URI: ${Math.min(src ? src.length : 0, 50)} chars`);
    }
});
