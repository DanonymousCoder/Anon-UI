const fs = require('fs');
const path = require('path');


const BREAKPOINTS = {
    sm: '600px',
    md: "750px",
    lg: "1024px",
    xl: "1400px"
};

const UTILITIES = {};
const utilityFiles = ['colors.css', 'layout.css', 'spacing.css', 'typography.css'];

utilityFiles.forEach(file => {
    const filePath = path.join(__dirname, '..', 'src', 'utilities', file);
    const content = fs.readFileSync(filePath, 'utf8');

    const classRegex = /\.([a-zA-Z0-9_-]+)\s*\{([^}]+)\}/g;
    let match;

    while ((match = classRegex.exec(content)) !== null) {
        UTILITIES[match[1]] = match[2].trim();
    }
});


function parseHTML(html) {
    const regex = /(?:class|className)=["']([^"']*)["']|(?:class|className)=\{["']([^"']*)["']\}/g;
    const matches = [...html.matchAll(regex)];

    const responsiveClasses = [];

    matches.forEach(match => {
        const classStr = match[1] || match[2];
        if (!classStr) return;

        const bracketRegex = /(\w+)-\[([^\]]+)\]/g;
        const bracketMatches = [...classStr.matchAll(bracketRegex)];

       /**
        *  const breakpoint = match[1];
        const utilities = match[2].trim().split(/\s+/);
        */


       bracketMatches.forEach(([, breakpoint, utilities]) => {
         if(BREAKPOINTS[breakpoint]) {
            responsiveClasses.push({
                breakpoint,
                utilities: utilities.trim().split(/\s+/)
            });
        }
       })
    });

    return responsiveClasses;
}



function generateCSS(responsiveClasses) {
    const cssBlocks = [];

    const byBreakpoint = {};

    // Flatten all utilities by breakpoint
    responsiveClasses.forEach(({ breakpoint, utilities }) => {
        if (!byBreakpoint[breakpoint]) {
            byBreakpoint[breakpoint] = [];
        }
        byBreakpoint[breakpoint].push(...utilities);
    });

    Object.entries(byBreakpoint).forEach(([breakpoint, utilities]) => {
        const uniqueUtilities = [...new Set(utilities)];

        const rules = uniqueUtilities.map(util => {
            const css = UTILITIES[util];
            if (!css) {
                console.warn(`Warning: Utility "${util}" not found`);
                return null;
            }


            // Use attribute selector to match the classes that contain the utility class within the square brackets

            /* 
             This makes it possible to use the syntax md-[test test1 test2] instead of having to rewrite every single
             time like this md-[test] md-[test1] md-[test2]
             */
            return ` [class*="${breakpoint}-["][class*="${util}"] {\n     ${css}\n}`;
        }).filter(Boolean).join('\n\n');

        if (rules) {
            cssBlocks.push(`/* ${breakpoint.toUpperCase()} Breakpoint (${BREAKPOINTS[breakpoint]}) */
@media (min-width: ${BREAKPOINTS[breakpoint]}) {
${rules}
}`);
        }
    });

    return cssBlocks.join('\n\n');
}



/**
 * Main CLI function
 */

function main() {
    const inputFile = process.argv[2];
    const outputFile = process.argv[3] || 'responsive.css';

    if(!inputFile) {
        console.error('Usage: node parse.js <input.html> [output.css]');
        process.exit(1);
    }

    const html = fs.readFileSync(inputFile, 'utf8');

    const responsiveClasses = parseHTML(html);

    if (responsiveClasses.length === 0) {
        console.log('No responsive classes found.');
        return;
    }

    const css = generateCSS(responsiveClasses);

    fs.writeFileSync(outputFile, css);

    console.log(`Generated ${outputFile}`);
    console.log(`Found ${responsiveClasses.length} responsive declarations`);
}


if (require.main === module) {
    main();
}


module.exports = function parse(inputFile, outputFile) {
    if (!fs.existsSync(inputFile)) {
        console.error(`File not found: ${inputFile}`);
        process.exit(1);
    }

    const html = fs.readFileSync(inputFile, 'utf8');
    const responsiveClasses = parseHTML(html);

     if (responsiveClasses.length === 0) {
        console.log('No responsive classes found');
        return;
    }

    const css = generateCSS(responsiveClasses);
    fs.writeFileSync(outputFile, css);

    console.log(`Generated ${outputFile}`);
    console.log(`Found ${responsiveClasses.length} responsive declarations`);
};


module.exports.parseHTML = parseHTML;
module.exports.generateCSS = generateCSS;