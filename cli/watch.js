const fs = require("fs");
const path = require("path");
const { parseHTML, generateCSS } = require("./parse");

function watch(inputFile, outputFile) {
    console.log(`Watching ${inputFile}...`);

    fs.watch(inputFile, (eventType) => {
        if (eventType === 'change') {
            console.log('File changed, rebuilding...');

            const html = fs.readFileSync(inputFile, 'utf8');
            const responsiveClasses = parseHTML(html);
            const css = generateCSS(responsiveClasses);

            fs.writeFileSync(outputFile, css);
            console.log('Rebuilt');
        }
    });
}

module.exports = watch;

// Only run if called directly
if (require.main === module) {
    const inputFile = process.argv[2];
    const outputFile = process.argv[3] || 'responsive.css';
    watch(inputFile, outputFile);
}