const fs = require('fs');
const path = require('path');


const BREAKPOINTS = {
    sm: '600px',
    md: "750px",
    lg: "1024px",
    xl: "1400px"
};

const UTILITIES = fs.readFileSync("../src/utilities", "utf8");


function parseHTML(html) {
    const regex = /(\w+)-\[([^\]]+)\]/g;
    const matches = [...html.matchAll(regex)];

    const responsiveClasses = [];

    matches.forEach(match => {
        const breakpoint = match[1];
        const utilities = match[2].trim().split(/\s+/);


        if(BREAKPOINTS[breakpoint]) {
            responsiveClasses.push({
                breakpoint,
                utilities
            });
        }
    });

    return responsiveClasses;
}



function generateCSS(responsiveClasses) {
    const cssBlocks = [];

    const byBreakpoint = {};

    responsiveClasses.forEach(({ breakpoint, utilities }) => {
        if (!byBreakpoint[breakpoint]) {
            byBreakpoint[breakpoint] = [];
        }
        byBreakpoint[breakpoint].push(...utilities);
    });

    Object.entries(byBreakpoint).forEach(([breakpoint, utilities]) => {
        const uniqueUtilities = [...new Set(utilities)];

        const rules = uniqueUtilities.map( util => {
            const css = UTILITIES[util];

            if (!css) {
                return null;
            }
            return ` .${breakpoint}-\\[${util}\\]  {\n     ${css}\n}`;
        }).filter(Boolean).join('\n\n');


        if (rules) {
            cssBlocks.push(`/* ${breakpoint.toUpperCase()} Breakpoint (${BREAKPOINTS[breakpoint]}) */
            @media (min-width: ${BREAKPOINTS[breakpoint]}) {
            ${rules}
            }`)
        }
    })
}