#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function showHelp() {
    console.log(`
        AnonUI CLI v1.0.0

        Usage:
            anonui parse <input> [output]         Parse HTML and generate responsive CSS
            anonui watch <input> [output]        Watch HTML file for changes
            anonui init                                      Create anonui.config.js
            anonui --version                              Show version
            anonui --help                                  Show this help

        Documentation: 
        `);
}



const args = process.argv.slice(2);
const command = args[0];

if(!command || command === '--help' || command === '-h') {
    showHelp();
    process.exit(0);
}

if (command === '--version' || command === '-v') {
  const pkg = require('../package.json');
  console.log(`v${pkg.version}`);
  process.exit(0);
}

if (command === 'parse') {
  const inputFile = args[1];
  const outputFile = args[2] || 'responsive.css';
  
  if (!inputFile) {
    console.error('Error: Input file is required');
    console.log('Usage: anonui parse <input.html> [output.css]');
    process.exit(1);
  }
  
  require('./parse')(inputFile, outputFile);
}

if (command === 'watch') {
  const inputFile = args[1];
  const outputFile = args[2] || 'responsive.css';
  
  if (!inputFile) {
    console.error('Error: Input file is required');
    process.exit(1);
  }
  
  require('./watch')(inputFile, outputFile);
}

if (command === 'init') {
  const configContent = `module.exports = {
  input: 'src/**/*.{html,jsx}',
  output: 'dist/responsive.css',
  breakpoints: {
    sm: '600px',
    md: '750px',
    lg: '1024px',
    xl: '1400px'
  }
};`;
  
  fs.writeFileSync('anonui.config.js', configContent);
  console.log('Created anonui.config.js');
}