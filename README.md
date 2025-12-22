# 🎄 Merry Christmas — 3D Christmas Tree Gallery

A modern **3D Christmas Tree Gallery** built with **Three.js**, featuring interactive ornaments that display images and details in a smooth animated modal.

This project focuses on **clean architecture**, **JSON-driven content**, and a **maintainable ES-module structure**, making it easy to customize and extend.

![Demo](demo.gif)

---

## ✨ Features

- 🎄 **3D Christmas Tree**
  Optimized geometry with soft, festive lighting

- 🖼️ **Interactive Ornaments**
  Clickable image planes attached to the tree

- 🎥 **Smooth Camera Animations**
  Seamless transitions using `@tweenjs/tween.js`

- 🧾 **JSON-Driven Content**
  Images, positions, and metadata defined in `images.json`

- 📱 **Responsive Design**
  Works on desktop and mobile devices

- 🧩 **Clean Architecture**
  Clear separation between core, objects, UI, and interaction logic

---

## 🚀 Quick Start

### Prerequisites

- Node.js **v14+**
- npm or yarn

---

### Installation

```bash
git clone https://github.com/KatsukiiNeko/Mery_Christmas.git
cd Mery_Christmas

Start the development server:
npm install

Create the textures directory and placeholder images:
mkdir -p assets/textures

for i in {1..6}; do
  echo "placeholder" > "assets/textures/image$i.jpg"
done

npm start

---

 📁 Project Structure
project/
├── index.html              # Main HTML entry
├── styles/
│   └── main.css            # Global styles
├── src/
│   ├── main.js             # Application entry point
│   ├── config/
│   │   └── constants.js    # Configuration constants
│   ├── core/               # Three.js core setup
│   │   ├── renderer.js
│   │   ├── camera.js
│   │   ├── scene.js
│   │   └── lights.js
│   ├── objects/            # 3D objects
│   │   ├── tree.js
│   │   └── imagePlane.js
│   ├── controls/
│   │   └── orbitControls.js
│   ├── interaction/
│   │   ├── raycaster.js
│   │   └── cameraAnimator.js
│   ├── ui/
│   │   ├── modal.js
│   │   └── loader.js
│   ├── data/
│   │   └── imageLoader.js
│   └── utils/
│       └── helpers.js
├── assets/
│   ├── images.json         # Image configuration
│   └── textures/           # Image assets
├── package.json
└── README.md

🖼️ Adding Your Own Images
1. Add image files

Place your images in:

assets/textures/


Supported formats:

.jpg

.png

2. Update images.json

Edit assets/images.json:

[
  {
    "id": "unique-id",
    "src": "./assets/textures/your-image.jpg",
    "position": { "x": 2, "y": 3, "z": -1 },
    "scale": 1.0,
    "title": "Your Title",
    "description": "Your description here"
  }
]

Configuration Options
Field	Description
id	Unique image identifier
src	Path to image file
position	3D position { x, y, z }
scale	Size multiplier (default: 1.0)
title	Display title (optional)
description	Display description (optional)
🎮 Controls

Drag — Rotate camera

Scroll — Zoom in/out

Click — Select an image ornament

ESC — Close modal

🛠️ Development
Available Scripts
npm start     # Start development server
npm run build # Build for production

Key Dependencies

Three.js — 3D rendering

@tweenjs/tween.js — Smooth animations

serve — Static file server

🔧 Troubleshooting
Gallery stuck on “Loading…”

Check browser console (F12)

Validate assets/images.json

Ensure image files exist in assets/textures/

Images not showing

Verify image paths

Check for 404 errors

Confirm no CORS issues

3D scene not rendering

Ensure WebGL is supported

Verify Three.js loads correctly

Check console for JavaScript errors

Debug Helpers
fetch('/assets/images.json').then(r => r.json()).then(console.log)
fetch('/assets/textures/image1.jpg').then(r => console.log(r.status))

🎨 Customization
Tree Appearance

Edit src/config/constants.js:

export const TREE_CONFIG = {
  HEIGHT: 10,
  RADIUS: 3,
  COLOR: 0x2e7d32,
  SEGMENTS: 8
};

Camera Behavior
export const CAMERA_CONFIG = {
  FOV: 60,
  INITIAL_POSITION: { x: 0, y: 5, z: 15 }
};

Lighting

Adjust lighting in:

src/core/lights.js

📱 Browser Support

Chrome 60+

Firefox 55+

Safari 12+

Edge 79+

Requires WebGL support.

📄 License

MIT License — see LICENSE file for details.

🤝 Contributing

Fork the repository

Create a feature branch

git checkout -b feature/your-feature


Commit your changes

git commit -m "Add new feature"


Push to your branch

git push origin feature/your-feature


Open a Pull Request

🙏 Acknowledgments

Three.js community

Inspired by modern 3D portfolio galleries

Built with ❤️ for the holiday season 🎄


---

### ✅ What to do next

1. Save this as `README.md`
2. Commit it:
   ```bash
   git add README.md
   git commit -m "Add professional README"
   git push
