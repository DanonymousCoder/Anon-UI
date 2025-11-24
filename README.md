# Anon UI

> Dark-first utility CSS framework with innovative bracket-based responsive syntax

[![npm version](https://img.shields.io/npm/v/anocss.svg)](https://www.npmjs.com/package/anon_ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## Why AnoCSS?

- **Dark-First**: Built for dark mode by default
- **Utility-First**: Like Tailwind, but cleaner
- **Bracket Syntax**: Group responsive utilities: `md-[text-center bg-success p-4]`
- **Zero Config**: Works out of the box
- **Pure CSS**: No PostCSS required
- **Mobile-First**: Responsive by default

## Installation

### Via npm

```bash
npm install anon_ui
```

### Via CDN

```html
<link rel="stylesheet" href="https://unpkg.com/ano_ui/dist/ano_ui.css" />
```

## Quick Start

### 1. Install the framework

```bash
npm install anon_ui
```

### 2. Link in your HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="node_modules/anon_ui/dist/anon_ui.css" />
  </head>
  <body class="bg-primary text-primary">
    <h1 class="text-2xl font-bold">Hello Anon UI!</h1>
  </body>
</html>
```

### 3. Use responsive bracket syntax

```html
<div class="md-[center bg-success p-6] lg-[left bg-danger p-8]">
  Changes style at different breakpoints!
</div>
```

### 4. Generate responsive CSS

```bash
npx anocss parse index.html responsive.css
```

### 5. Link generated CSS

```html
<link rel="stylesheet" href="responsive.css" />
```

## Syntax Comparison

**Tailwind:**

```html
<div
  class="center md:left lg:right bg-red-500 md:bg-blue-500 lg:bg-green-500"
></div>
```

**Anon UI:**

```html
<div class="md-[left bg-blue-500] lg-[right bg-green-500]"></div>
```

- [ X ] Cleaner
- [ X ] Less repetition
- [ X ] Grouped by breakpoint

## CLI Commands

```bash

# Parse HTML and generate responsive CSS

anon_ui parse index.html responsive.css

# Watch mode (auto-rebuild on changes)

anon_ui watch index.html responsive.css

# Create config file

anon_ui init

# Show version

anon_ui --version
```

## Utility Classes

### Colors

```html
<div class="bg-primary text-accent">Dark by default</div>
<div class="bg-success text-white">Success state</div>
```

### Spacing

```html
<div class="p-4 m-2 gap-3">Padding, margin, gap</div>
```

### Typography

```html
<h1 class="text-4xl font-bold">Large heading</h1>
<p class="text-base text-secondary">Body text</p>
```

### Layout

```html
<div class="flex items-center justify-between">Flexbox</div>
<div class="grid grid-cols-3 gap-4">Grid layout</div>
```

## Dark Mode

Anon UI is **dark by default**. For light mode, add `.light` class:

```html
<body class="light">
  <!-- Light theme enabled -->
</body>
```

Toggle with JavaScript:

```javascript
document.body.classList.toggle("light");
```

## Customization

Create `anon_ui.config.js`:

```javascript
module.exports = {
  input: "src/*_/_.html",
  output: "dist/responsive.css",
  breakpoints: {
    sm: "600px",
    md: "750px",
    lg: "1024px",
    xl: "1400px",
  },
};
```

### Docs Link: https://anon-ui.netlify.app/
