const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('C:/Users/ameya/OneDrive/Desktop/kit2/clean_original.html', 'utf8');
const $ = cheerio.load(html);

console.log('--- ALL SECTIONS ---');
let sectionCount = 0;
$('header, section, footer').each((i, el) => {
    const $el = $(el);
    const tagName = el.tagName.toLowerCase();
    const className = $el.attr('class') || '';
    const id = $el.attr('id') || '';

    // Get high level structure
    console.log(`[${sectionCount}] <${tagName}${id ? ` id="${id}"` : ''}${className ? ` class="${className}"` : ''}>`);

    // For sections, extract the text of primary headings to map content
    const heading = $el.find('h1, h2, h3').first().text().replace(/\s+/g, ' ').trim();
    if (heading) {
        console.log(`    Heading: "${heading.substring(0, 50)}"`);
    }

    // Check for forms
    if ($el.find('form').length > 0) {
        console.log(`    Contains: FORM`);
    }

    sectionCount++;
});

console.log('\n--- TEXT EXTRACTION COMPLETED ---');
