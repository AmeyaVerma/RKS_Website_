const fs = require('fs');
let html = fs.readFileSync('C:/Users/ameya/OneDrive/Desktop/kit2/clean_original_with_assets.html', 'utf8');

let count = 0;
html = html.replace(/src=\"data:image\/svg\+xml,\"<svg[^>]*>.*?<\/svg>'/g, () => {
    count++;
    return 'src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"';
});

html = html.replace(/src=\"data:image\/svg\+xml,\"<svg[^>]*>.*?<\/rect>'/g, () => {
    count++;
    return 'src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"';
});

fs.writeFileSync('C:/Users/ameya/OneDrive/Desktop/kit2/clean_original_with_assets.html', html);
console.log('Fixed ' + count + ' malformed SVG tags');
