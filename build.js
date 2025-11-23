const fs = require("fs");
const path = require("path");


const preset = fs.readFileSync("src/core/preset.css", 'utf8');
const variables = fs.readFileSync("src/core/variables.css", "utf8");

const colors = fs.readFileSync("src/utilities/colors.css", "utf8");
const layout = fs.readFileSync("src/utilities/layout.css", "utf8");
const spacing = fs.readFileSync("src/utilities/spacing.css", "utf8");
const typography  = fs.readFileSync("src/utilities/typography.css", "utf8");


const framework = `/* Anon UI v0.1.0 - Dark-First Utility and Component based framework */\n\n${variables}\n\n${preset}\n\n${spacing}\n\n${colors}\n\n${typography}\n\n${layout}`;

if (!fs.existsSync("dist")) {
    fs.mkdirSync("dist");
}

fs.writeFileSync("dist/anon_ui.css", framework);

console.log("Built dist/anon_ui.css successfully");