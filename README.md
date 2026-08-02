# 🚀 Ashutosh Ulape — Interactive 3D Developer Portfolio

A cutting-edge, visually stunning, and highly interactive personal portfolio built for **Ashutosh Ulape** (Frontend & Fullstack Developer). Built with **React 19**, **Vite**, **Tailwind CSS v4**, **Three.js**, **React Three Fiber & Rapier Physics**, **GSAP**, and custom **WebGL / OGL Shaders**.

---

## 📄 Overview

This project showcases fullstack projects, technical expertise, and personal background through immersive 3D graphics, physics simulations, dynamic typography, and fluid scroll animations.

### Key Highlights
- 🎴 **Physics-Based 3D Lanyard**: Real-time rigid-body physics simulation using `@react-three/rapier` and `@react-three/fiber` rendering an interactive ID card hanging from a string.
- 🎨 **Custom WebGL Shaders**: High-performance WebGL graphics created with `OGL` (Color Bends, Plasma, Volumetric Light Pillars, and 3D Infinite Menu wheel).
- 🍱 **Interactive Magic Bento Grid**: Custom Bento Grid on the About Me page with spotlight tracking, magnetic tilt physics, glowing borders, and particle emissions.
- 📜 **GSAP ScrollTrigger & Kinematic Text**: Smooth scroll-linked character animations, kinetic text pressure, and split text transitions.
- 📱 **3D iPhone Mockups & Responsive Showcase**: Dynamic project detail presentation featuring interactive iPhone frames and live project demos.
- 🔄 **Fluid Page Transitions**: Custom page slide wipes built with Framer Motion (`motion`).

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
- **[clsx](https://github.com/lukeed/clsx) & [tailwind-merge](https://github.com/dcastil/tailwind-merge)**: Dynamic utility class merging.

---

## 🌐 Application Architecture & Pages

The application consists of 5 main pages configured with `React Router DOM`:

| Route | Page | Key Features |
| :--- | :--- | :--- |
| `/` | **Home** | Interactive 3D Lanyard, WebGL `ColorBends` background, cursor bulge `DotField`, `RotatingText`, `SpecularButton`, `LogoSlide` marquee. |
| `/about` | **About Me** | Dynamic `TextPressure` heading, interactive `MagicBento` grid, `SideRays` canvas background, infinite `Scrolltext` marquee. |
| `/projects` | **Projects** | `HorizontalScroll` card slider, `LightPillar` WebGL shader, detailed cards with 3D `Iphone` mockups, GSAP ScrollTrigger features. |
| `/contact` | **Contact** | Interactive WebGL `Plasma` background, `GlassSurface` container, direct links for Email, Phone/WhatsApp, and LinkedIn. |
| `/Infinity` | **Infinity Menu** | 3D infinite WebGL menu wheel rendered with `OGL` and `gl-matrix` for alternative navigation. |

---

## 📁 Repository Structure

```
motion/
├── public/                 # Static assets (favicons, SVGs)
├── src/
│   ├── assets/             # 3D models (.glb), texture atlases, project screenshots, icons
│   ├── components/         # Interactive UI & Shader Components
│   │   ├── ui/             # Core UI elements (3D iPhone mockup, grid patterns, scroll velocity)
│   │   ├── CardNav.jsx     # Navigation card component
│   │   ├── CardSwap.jsx    # Card swapping animation component
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
│   │   ├── ProjectDetails.jsx # Detailed project cards with GSAP scroll animation
│   │   ├── ProjectFooter.jsx  # Footer call-to-action on projects page
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
│   ├── index.css           # Global styles and CSS utilities
│   └── main.jsx            # Application entry point
├── eslint.config.js        # ESLint rules
├── index.html              # Main HTML entry document
├── package.json            # Project dependencies & scripts
├── tailwind.config.js      # Tailwind CSS configuration
└── vite.config.js          # Vite build configuration
```

---

## 💼 Featured Projects in Portfolio

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
