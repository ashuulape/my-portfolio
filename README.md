# 🚀 Ashutosh Ulape — Interactive 3D Developer Portfolio

A cutting-edge, visually stunning, and highly interactive personal portfolio built for **Ashutosh Ulape** (Frontend & Fullstack Developer). Built with **React 19**, **Vite**, **Tailwind CSS v4**, **Three.js**, **React Three Fiber & Rapier Physics**, **GSAP**, and custom **WebGL / OGL Shaders**.

---

## 📄 Overview

This project showcases fullstack projects, technical expertise, and personal background through immersive 3D graphics, physics simulations, dynamic typography, and fluid scroll animations.

### Key Highlights
- 🎴 **Physics-Based 3D Lanyard**: Real-time rigid-body physics simulation using `@react-three/rapier` and `@react-three/fiber` rendering an interactive ID card hanging from a string.
- 🎨 **Custom WebGL Shaders**: High-performance WebGL graphics created with `OGL` (Color Bends, Plasma, Volumetric Light Pillars, 3D Circular Gallery, and Infinite Menu wheel).
- 🍱 **Interactive Magic Bento Grid**: Custom Bento Grid on the About Me page with spotlight tracking, magnetic tilt physics, glowing borders, and particle emissions.
- 📜 **GSAP ScrollTrigger & Kinematic Text**: Smooth scroll-linked slide-in animations, kinetic text pressure, and character-split transitions.
- 📱 **3D iPhone Mockups & Responsive Showcase**: Dynamic project detail presentation featuring interactive iPhone frames and live project demos.
- 🔄 **Fluid Page Transitions**: Custom page slide wipes built with Framer Motion (`motion`).
- 🖼️ **Circular Gallery with Click-to-Link**: A responsive OGL-powered WebGL circular image gallery for the "Other Projects" section, with drag-to-scroll and tap-to-open-link support.

---

## 🛠️ Tech Stack & Dependencies

### Core Framework & Build Tools
- **[React 19](https://react.dev/)**: Modern UI library with latest concurrent features.
- **[Vite 7](https://vitejs.dev/)**: Next-generation, lightning-fast frontend build tool and dev server.
- **[React Router DOM v7](https://reactrouter.com/)**: Declarative client-side routing.

### 3D, WebGL & Physics Engines
- **[Three.js](https://threejs.org/)**: 3D JavaScript engine.
- **[@react-three/fiber (R3F)](https://r3f.docs.pmnd.rs/)**: React renderer for Three.js.
- **[@react-three/drei](https://github.com/pmndrs/drei)**: Useful helpers and abstractions for R3F.
- **[@react-three/rapier](https://github.com/pmndrs/react-three-rapier)**: Real-time 3D physics engine for React Three Fiber.
- **[OGL](https://github.com/oamap/ogl)**: Ultra-lightweight WebGL library used for custom fragment and vertex shaders.
- **[gl-matrix](https://glmatrix.net/)**: Matrix and vector math for WebGL 3D transforms.
- **[meshline](https://github.com/utsuboco/meshline)**: Smooth thick line rendering in WebGL for 3D lanyard rope.

### Animations & Interactive FX
- **[GSAP (GreenSock)](https://gsap.com/)**: Professional animation engine with `ScrollTrigger` and `SplitText`.
- **[@gsap/react](https://gsap.com/resources/React/)**: React hooks for GSAP animations.
- **[Framer Motion / Motion](https://motion.dev/)**: Production-ready animation library for page transitions and micro-interactions.

### Styling & Design System
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Utility-first CSS framework with Vite plugin integration.
- **[React Icons](https://react-icons.github.io/react-icons/) & [Phosphor Icons](https://phosphoricons.com/)**: Brand & tech icon libraries.
- **[Geist](https://vercel.com/font) & [JetBrains Mono](https://www.jetbrains.com/lp/mono/)**: Modern variable typography fonts.
- **Custom Local Fonts**: Akira Expanded, Schabo Condensed, Galano Grotesque, WS Lowen — loaded via `@font-face` in CSS.
- **[clsx](https://github.com/lukeed/clsx) & [tailwind-merge](https://github.com/dcastil/tailwind-merge)**: Dynamic utility class merging.

---

## 🌐 Application Architecture & Pages

The application consists of 5 main pages configured with `React Router DOM`:

| Route | Page | Key Features |
| :--- | :--- | :--- |
| `/` | **Home** | Interactive 3D Lanyard, WebGL `ColorBends` background, cursor bulge `DotField`, `RotatingText`, `SpecularButton`, `LogoSlide` marquee. |
| `/about` | **About Me** | Dynamic `TextPressure` heading, interactive `MagicBento` grid, `SideRays` canvas background, infinite `Scrolltext` marquee. |
| `/projects` | **Projects** | `HorizontalScroll` card slider, `LightPillar` WebGL shader, GSAP scroll-linked `ProjectDetails` with 3D iPhone mockups, `CircularGallery` footer for other projects. |
| `/contact` | **Contact** | Interactive WebGL `Plasma` background, `GlassSurface` container, direct links for Email, Phone/WhatsApp, and LinkedIn. |
| `/Infinity` | **Infinity Menu** | 3D infinite WebGL menu wheel rendered with `OGL` and `gl-matrix` for alternative navigation. |

---

## 📁 Repository Structure

```
motion/
├── public/                 # Static assets (favicons, SVGs)
├── src/
│   ├── assets/             # 3D models (.glb), texture atlases, project screenshots, icons
│   │   └── projectImg/     # Project screenshots (PC & Mobile views)
│   ├── fonts/              # Custom local font files (.otf, .ttf)
│   │   ├── Akira Expanded Demo.otf
│   │   ├── SCHABO-Condensed.otf
│   │   ├── GalanoGrotesqueLightItalic.otf
│   │   └── WS Lowen Demo.ttf
│   ├── components/         # Interactive UI & Shader Components
│   │   ├── ui/             # Core UI elements (3D iPhone mockup, grid patterns, scroll velocity)
│   │   ├── CardNav.jsx     # Navigation card component
│   │   ├── CardSwap.jsx    # Card swapping animation component
│   │   ├── CircularGallery.jsx  # OGL WebGL circular draggable gallery with click-to-link & custom font support
│   │   ├── ColorBends.jsx  # Custom OGL fluid shader background
│   │   ├── DotField.jsx    # Canvas interactive dot repulsion grid
│   │   ├── GlassSurface.jsx# Frosted glass visual container
│   │   ├── HorizontalScroll.jsx # Horizontal card slider for projects
│   │   ├── InfiniteMenu.jsx# 3D infinite WebGL rotating menu
│   │   ├── Intro.jsx       # Page transition title overlay
│   │   ├── Lanyard.jsx     # R3F + Rapier physics 3D ID badge lanyard
│   │   ├── LightPillar.jsx # Volumetric WebGL light pillar shader
│   │   ├── LogoLoop.jsx    # Animated tech logo marquee
│   │   ├── LogoSlide.jsx   # Infinite text logo slider
│   │   ├── MagicBento.jsx  # Interactive Bento Grid (spotlight, magnetic tilt, particle emission)
│   │   ├── OptionWheel.jsx # Circular interactive menu wheel
│   │   ├── OrbitImages.jsx # Orbiting 3D image showcase
│   │   ├── Plasma.jsx      # Mouse-interactive WebGL plasma shader
│   │   ├── ProjectDetails.jsx # Scroll-animated project cards (slide-in GSAP + 16:9 iPhone frame)
│   │   ├── ProjectFooter.jsx  # "Other Projects" section using CircularGallery
│   │   ├── RotatingText.jsx# Typewriter text transition component
│   │   ├── ScrollFloat.jsx / ScrollReveal.jsx / ScrollVelocity.jsx / Scrolltext.jsx # Kinetic text scroll effects
│   │   ├── SideRays.jsx    # Radiant background ray burst
│   │   ├── SpecularButton.jsx # Interactive 3D specular shine button
│   │   ├── SplitText.jsx   # Character split helper for GSAP animations
│   │   ├── StaggeredMenu.jsx # Staggered navigation menu drawer
│   │   └── TextPressure.jsx  # Dynamic mouse pressure variable text renderer
│   ├── lib/                # Utility functions (`utils.js` for tailwind class merging)
│   ├── AboutMe.jsx         # About Me page view
│   ├── App.jsx             # Main routing setup
│   ├── Contact.jsx         # Contact page view
│   ├── Home.jsx            # Landing / Hero page view
│   ├── Infinity.jsx        # 3D Infinite menu page view
│   ├── Projects.jsx        # Projects showcase page view
│   ├── Slide.jsx           # Screen transition wipe effect
│   ├── index.css           # Global styles, CSS utilities, and @font-face declarations
│   └── main.jsx            # Application entry point
├── eslint.config.js        # ESLint rules
├── index.html              # Main HTML entry document
├── package.json            # Project dependencies & scripts
├── tailwind.config.js      # Tailwind CSS configuration
└── vite.config.js          # Vite build configuration
```

---

## 💼 Featured Projects in Portfolio

### Main Projects
1. **Uber Clone** ([Live Demo](https://myuber69.onrender.com/))
   - Real-time ride-hailing application with live GPS tracking and Socket.IO-powered ride matching.
   - Built with: React, Node.js, Express, MongoDB (Geospatial queries), Socket.IO, Leaflet maps, Geoapify API, JWT Auth.

2. **Banking System** ([Live Demo](https://nextbank69.onrender.com/))
   - Secure banking backend featuring a double-entry ledger for atomic, auditable transactions and JWT token blacklisting.
   - Built with: Node.js, Express, MongoDB Aggregation pipelines, Nodemailer OAuth2, React.

3. **GameFlix** ([Live Demo](https://gameflix69.netlify.app/))
   - Netflix-style game discovery portal powered by real-time data from the RAWG API.
   - Built with: JavaScript, HTML5, CSS3, RAWG API.

4. **3D Motion Portfolio** (This Project)
   - Interactive 3D portfolio featuring custom WebGL shaders, physics lanyard, and GSAP animations.

### Other Projects (CircularGallery Footer)
- **MDB** ([Live Demo](https://mdb69.netlify.app/)) — Search any movie and get every detail: cast, ratings, trailers, and more.
- **PokeCard** ([Live Demo](https://pokecard69.netlify.app/)) — A simple Pokémon card game to play with a friend.
- **Pinsearch** — A Pinterest-style image search app, built with Redux to sharpen state management skills.

---

## ✨ Recent Updates

### CircularGallery Component
- **Responsive sizing**: Desktop cards render at `1120×630` (16:9), mobile at `640×360` (16:9).
- **Click-to-link support**: Clicking/tapping any card detects the hit plane in WebGL world space and opens the card's `link` URL in a new tab.
- **Custom font via Vite import**: The font file is imported as a Vite asset (`import AkiraFont from "../fonts/Akira Expanded Demo.otf"`) and passed as `fontUrl` so the browser resolves the correct hashed URL at runtime.

### ProjectDetails Component
- **Redesigned layout**: Each project card now uses a 16:9 `aspect-video` layout with two panels — a left panel with title + tech stack + description, and a right panel with a 3D iPhone mockup.
- **New GSAP animations**: Cards slide in from the left (title) and right (phone), replacing the old scroll-scrubbed character animation.

### ProjectFooter Component
- Replaced `CardSwap` with `CircularGallery` for the "Other Projects" section, providing a draggable, circular WebGL gallery experience.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` or `yarn` / `pnpm`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ashuulape/my-portfolio.git
   cd motion
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

---

## 📜 Available Scripts

- `npm run dev`: Starts the Vite development server with HMR.
- `npm run build`: Bundles the application for production deployment.
- `npm run preview`: Previews the local production build.
- `npm run lint`: Runs ESLint to check for code quality and syntax issues.

---

## 👤 Author

**Ashutosh Ulape**
- **Email**: ashuulape@gmail.com
- **LinkedIn**: [Ashutosh Ulape](https://www.linkedin.com/in/ashutosh-ulape-6b43a4325)
- **WhatsApp**: [+91 8150950309](https://wa.me/918150950309)
