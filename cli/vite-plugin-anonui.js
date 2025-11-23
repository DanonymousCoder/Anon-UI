const { parseHTML, generateCSS } = require('./parse');

module.exports = function anonuiPlugin(options = {}) {
    return {
        name: 'vite-plugin-anonui',

        transformIndexHtml(html) {
            const responsiveClasses = parseHTML(html);
            const css = generateCSS(responsiveClasses);

            return html.replace(
                '</head>',
                `<style id="anonui-responsive">${css}</style></head>`
            );
        },

        handleHotUpdate({ file, server }) {
            if (file.endsWith('.html') || file.endsWith('.jsx')) {
                server.ws.send({
                    type: 'full-reload'
                })
            }
        }
    };
}