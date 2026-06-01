# Koffi

Koffi is a playful single-page coffee website built with plain HTML, CSS, and JavaScript. It explores a bold hero experience, tactile card interactions, custom SVG motion, and responsive mobile behavior without using any frameworks.

## Project Structure

```txt
koffi/
├── index.html
├── style.css
├── main.js
├── assets/
└── fonts/
```

## Features

- Responsive hero section with animated headline, subtitle, buttons, and illustration
- Mobile hamburger menu with animated icon and slide-down cream panel
- “Why Koffi Exists” section with animated heading reveal
- Interactive stacked cards with custom inline SVG animations
- Mobile tap-to-front card deck behavior
- Custom cursor follower for fine-pointer devices
- Reduced-motion support for animation-sensitive users

## Running Locally

From the `koffi` folder, start a static server:

```bash
node -e "const http=require('http'),fs=require('fs'),path=require('path');const root=process.cwd();const types={'.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png','.svg':'image/svg+xml','.woff2':'font/woff2'};http.createServer((req,res)=>{let p=decodeURIComponent(req.url.split('?')[0]);if(p==='/')p='/index.html';const file=path.join(root,p);fs.readFile(file,(err,data)=>{if(err){res.writeHead(404);return res.end('Not found')}res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream'});res.end(data)})}).listen(3000,'127.0.0.1')"
```

Then open:

```txt
http://localhost:3000/
```

## Design Notes

The visual system uses Koffi’s green, pink, cream, coffee, and dark tones as CSS custom properties. The typography pairs `Nimbu Demo` for expressive display text with `Poppins` for body and UI text.

Animations are CSS-driven where possible, with JavaScript only used for interaction state such as the mobile menu, card activation, section reveal, and cursor follower.

## Credits

Day 1 build room by Sylvester Marquant.
