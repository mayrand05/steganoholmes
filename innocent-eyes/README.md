# Innocent Eyes

A free, open source, and privacy-focused browser extension to block "not safe for work" content across the web.

Built using TypeScript, TensorFlow.js, and [NSFWJS](https://github.com/infinitered/nsfwjs).

![Demo of NSFW filtering in action](demo/images/demo.gif)

---

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Development](#development)
- [Customization](#customization)
- [Credits](#credits)

---

## Overview

**Innocent Eyes** automatically scans and filters out NSFW (not safe for work) content—primarily images—on websites you visit. It does this entirely in your browser using machine learning models, keeping your data private and offline.

---

## Installation

You can use the extension by loading it manually in Chrome:

1. Build the project (see [Development](#development) below).  
2. Open `chrome://extensions/` in Chrome.  
3. Enable **Developer Mode** (toggle in top-right).  
4. Click **Load Unpacked** and select the `dist` folder.

---

# Development

Install dependencies by running:

```sh
npm install
```

Then build the project:

```sh
npm run build
```

To run the tests:

```sh
npm run test
```

To run a development version with live reload, run:

```sh
npm run dev:chrome
```
 Innocent Eyes is inspired by the original NSFW Filter project by [Navendu Pottekkat]. Built with a fresh perspective to further improve privacy and content filtering.

Or open Google Chrome and open the Extension Management page by navigating to ```chrome://extensions``` or by opening Settings and clicking Extensions from the bottom left.

Enable Developer Mode by clicking the toggle switch next to Developer mode.

Click the "Load Unpacked" button and select the extension directory(```.../dist```).

![Load extension to Chrome in developer mode](./demo/images/install-instructions.png)

