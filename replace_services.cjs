const fs = require('fs');
let code = fs.readFileSync('C:/Users/ameya/OneDrive/Desktop/kit2/src/components/Services.jsx', 'utf8');

let index = 1;
// Replace each src="#" with src="/images/services/service_X.webp"
code = code.replace(/src=\"#\"/g, () => 'src="/images/services/service_' + (index++) + '.webp"');

fs.writeFileSync('C:/Users/ameya/OneDrive/Desktop/kit2/src/components/Services.jsx', code);
console.log('Services.jsx updated. Replacements:', index - 1);
