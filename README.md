# Anon UI

> Dark-first utility CSS framework with innovative bracket-based responsive syntax

[![npm version](https://img.shields.io/npm/v/anocss.svg)](https://www.npmjs.com/package/anon_ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## Why Anon UI?

- **Dark-First**: Built for dark mode by default
- **Utility-First**: Like Tailwind, but cleaner
- **Bracket Syntax**: Group responsive utilities: `md-[text-center bg-success p-4]`
- **Zero Config**: Works out of the box
- **Pure CSS**: No PostCSS required
- **Mobile-First**: Responsive by default

## Installation

### Demo Video


https://www.youtube.com/watch?v=r7hC9GpXKv4



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

### Layout

**Display & Flexbox**

```html
<!-- Display -->
<div class="flex">Flexbox container</div>
<div class="grid">Grid container</div>
<div class="block">Block element</div>
<div class="inline-block">Inline block</div>
<div class="none">Hidden element</div>

<!-- Flex Direction -->
<div class="flex flex-row">Horizontal flex</div>
<div class="flex flex-column">Vertical flex</div>
<div class="flex flex-row-reverse">Reversed horizontal</div>
<div class="flex flex-column-reverse">Reversed vertical</div>

<!-- Flex Wrap -->
<div class="flex flex-wrap">Wrapping flex items</div>
<div class="flex flex-nowrap">No wrapping</div>

<!-- Align Items -->
<div class="flex items-start">Align top</div>
<div class="flex items-center">Align center</div>
<div class="flex items-end">Align bottom</div>
<div class="flex items-stretch">Stretch items</div>
<div class="flex items-baseline">Align baseline</div>

<!-- Justify Content -->
<div class="flex justify-start">Justify start</div>
<div class="flex justify-center">Justify center</div>
<div class="flex justify-end">Justify end</div>
<div class="flex justify-between">Space between</div>
<div class="flex justify-around">Space around</div>
```

**Grid**

```html
<div class="grid grid-cols-2">2 columns</div>
<div class="grid grid-cols-3">3 columns</div>
<div class="grid grid-cols-4">4 columns</div>
<div class="grid grid-cols-5">5 columns</div>
```

**Width & Height**

```html
<!-- Width -->
<div class="w-full">Full width (100%)</div>
<div class="w-auto">Auto width</div>
<div class="w-screen">Viewport width (100vw)</div>

<!-- Max Width -->
<div class="max-w-sm">Small max width (600px)</div>
<div class="max-w-md">Medium max width (725px)</div>
<div class="max-w-lg">Large max width (1200px)</div>
<div class="max-w-xl">XL max width (1450px)</div>

<!-- Height -->
<div class="h-full">Full height (100%)</div>
<div class="h-auto">Auto height</div>
<div class="h-screen">Viewport height (100vh)</div>
<div class="min-h-screen">Min viewport height</div>
```

**Border Radius**

```html
<div class="rounded-sm">Small radius</div>
<div class="rounded-md">Medium radius</div>
<div class="rounded-lg">Large radius</div>
<div class="rounded-xl">XL radius</div>
<div class="rounded-full">Full radius (circle)</div>
<div class="rounded">Default radius</div>
```

### Spacing

**Padding**

```html
<!-- All sides -->
<div class="p-0">No padding</div>
<div class="p-1">Padding 1</div>
<div class="p-2">Padding 2</div>
<div class="p-4">Padding 4</div>
<div class="p-8">Padding 8</div>
<div class="p-12">Padding 12</div>
<div class="p-16">Padding 16</div>

<!-- Horizontal (left & right) -->
<div class="px-2">Horizontal padding</div>
<div class="px-4">Horizontal padding 4</div>
<div class="px-8">Horizontal padding 8</div>

<!-- Vertical (top & bottom) -->
<div class="py-2">Vertical padding</div>
<div class="py-4">Vertical padding 4</div>
<div class="py-8">Vertical padding 8</div>
```

**Margin**

```html
<!-- All sides -->
<div class="m-0">No margin</div>
<div class="m-2">Margin 2</div>
<div class="m-4">Margin 4</div>
<div class="m-8">Margin 8</div>

<!-- Horizontal (left & right) -->
<div class="mx-2">Horizontal margin</div>
<div class="mx-4">Horizontal margin 4</div>
<div class="mx-auto">Center with auto margins</div>

<!-- Vertical (top & bottom) -->
<div class="my-2">Vertical margin</div>
<div class="my-4">Vertical margin 4</div>
<div class="my-auto">Vertical auto margins</div>
```

**Gap (for Flex & Grid)**

```html
<div class="flex gap-1">Small gap</div>
<div class="flex gap-2">Gap 2</div>
<div class="flex gap-4">Gap 4</div>
<div class="flex gap-8">Gap 8</div>
<div class="grid gap-6">Grid gap 6</div>
```

### Typography

**Font Size**

```html
<p class="text-xs">Extra small text</p>
<p class="text-sm">Small text</p>
<p class="text-base">Base text (default)</p>
<p class="text-md">Medium text</p>
<p class="text-lg">Large text</p>
<p class="text-xl">XL text</p>
<p class="text-2xl">2XL text</p>
<p class="text-3xl">3XL text</p>
<p class="text-4xl">4XL text</p>
<p class="text-5xl">5XL text</p>
```

**Font Weight**

```html
<p class="light">Light (300)</p>
<p class="normal">Normal (400)</p>
<p class="medium">Medium (500)</p>
<p class="semibold">Semibold (600)</p>
<p class="bold">Bold (700)</p>
```

**Text Alignment**

```html
<p class="left">Left aligned</p>
<p class="center">Center aligned</p>
<p class="right">Right aligned</p>
```

**Text Transform**

```html
<p class="uppercase">UPPERCASE TEXT</p>
<p class="lowercase">lowercase text</p>
<p class="capitalize">Capitalized Text</p>
```

### Colors

**Background Colors**

```html
<div class="bg-primary">Primary background</div>
<div class="bg-secondary">Secondary background</div>
<div class="bg-tertiary">Tertiary background</div>
<div class="bg-accent">Accent background</div>
<div class="bg-neutral">Neutral background</div>
<div class="bg-success">Success background</div>
<div class="bg-warning">Warning background</div>
```

**Text Colors**

```html
<p class="text-primary">Primary text</p>
<p class="text-secondary">Secondary text</p>
<p class="text-tertiary">Tertiary text</p>
```

**Border Colors**

```html
<div class="border-primary">Primary border</div>
<div class="border-accent">Accent border</div>
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
