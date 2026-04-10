const fs = require('fs');
const path = require('path');

const srcHtmlPath = 'C:/Users/ameya/Downloads/Kinetic International Logistics & Shipping Company (23_02_2026 21：44：31).html';
let html = fs.readFileSync(srcHtmlPath, 'utf8');

let assetCount = 0;

function replacer(match, p1, offset, string) {
    if (p1.startsWith('data:image')) {
        let matches = p1.match(/^data:image\/([a-zA-Z0-9+-]+);base64,(.+)$/);
        if (matches && matches.length === 3) {
            let ext = matches[1];
            if (ext === 'jpeg') ext = 'jpg';
            if (ext === 'svg+xml') ext = 'svg';

            let data = matches[2];
            let buffer = Buffer.from(data, 'base64');

            let filename = `asset_${assetCount++}.${ext}`;
            let outPath = path.join('C:/Users/ameya/OneDrive/Desktop/kit2/public/images/extracted', filename);

            fs.writeFileSync(outPath, buffer);
            console.log(`Saved ${outPath}`);
            return `/images/extracted/${filename}`;
        }
    }
    return p1; // Fallback to original if not base64 parseable
}

// Replace src="..." and src=...
html = html.replace(/src=[\"\']?([a-zA-Z0-9\+\/\:\;\,=\.\-]+)[\"\']?/g, (match, p1) => {
    let replaced = replacer(match, p1);
    return `src="${replaced}"`;
});

// Replace url("...") and url(...)
html = html.replace(/url\([\"\']?([^\)\"\']+)[\"\']?\)/g, (match, p1) => `url("${replacer(match, p1)}")`);

fs.writeFileSync('C:/Users/ameya/OneDrive/Desktop/kit2/clean_original_with_assets.html', html);
console.log('Extracted ' + assetCount + ' assets to clean_original_with_assets.html');
