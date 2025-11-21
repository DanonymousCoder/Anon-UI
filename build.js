const fs = require(fs);
const path = require(path);

const  preset = fs.readFileSync("src/core/preset.css", 'utf8');
const variables = fs.readFileSync("src/core/variables.css", "utf8");

const colors = fs.readFileSync("src/utilities/colors.css");