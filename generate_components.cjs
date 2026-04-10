const fs = require('fs');
const parse = require('node-html-parser').parse;

const html = fs.readFileSync('C:/Users/ameya/OneDrive/Desktop/kit2/clean_original_with_assets.html', 'utf8');
const root = parse(html);

// Find the 11 main tags. We know what they are based on the previous scan.
const tags = [
    { selector: 'header.main-header', name: 'Header' },
    { selector: 'section.main-slider', name: 'MainSlider' },
    { selector: 'section.services-section', name: 'Services' },
    { selector: 'section.about-section', name: 'About' },
    { selector: 'section.funfacts-section', name: 'Funfacts' },
    { selector: 'section.countries-section', name: 'Countries' },
    { selector: 'section.features-section', name: 'Features' },
    { selector: 'section.video-section', name: 'VideoSection' },
    { selector: 'section.faq-section', name: 'FAQ' },
    { selector: 'section.subscribe-section', name: 'Subscribe' },
    { selector: 'footer.main-footer', name: 'Footer' }
];

tags.forEach(tag => {
    const el = root.querySelector(tag.selector);
    if (el) {
        // Output as a raw string inside html-react-parser
        let outerHtml = el.toString()
            // Fix backticks
            .replace(/`/g, '\\`')
            // Fix unescaped script closing tags
            .replace(/<\/script>/g, '<\\/script>');

        const jsx = `import React from 'react';
import parse from 'html-react-parser';

const ${tag.name} = () => {
    const htmlString = \`${outerHtml}\`;
    return (
        <>
            {parse(htmlString)}
        </>
    );
};

export default ${tag.name};
`;
        fs.writeFileSync(`C:/Users/ameya/OneDrive/Desktop/kit2/src/components/${tag.name}.jsx`, jsx);
        console.log(`Generated ${tag.name}.jsx`);
    } else {
        console.log(`Could not find ${tag.selector}`);
    }
});
