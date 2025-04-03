---
title: Tailwind CSS v4 summary
description: Summarize changes from previous version.
date: 2025-03-01T10:31:32
tags:
  - tailwindcss
---

The most notable change is in version 4, Tailwind CSS no longer use `tailwind.config.ts` configuration file.

To add custom color or other customisation, we define variables under `@theme` directive inside CSS file.

```css
/* index.css */
import "tailwindcss";

@theme {
  --color-prime-teal: #008080;
  --font-poppins: Poppins, sans-serif;
}
```

There are set of predefined variable prefixes which they call [theme variable namespace](https://tailwindcss.com/docs/theme#theme-variable-namespaces).

```css
--color-*
--font-*
--text-*
...
```

Each prefix will generate its corresponding utility classes.

```html
<p class="color-prime-teal font-poppins">Prime Teal</p>
```
