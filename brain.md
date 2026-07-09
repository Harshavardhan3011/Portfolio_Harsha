# Project Brain: Harsha Vardhan's Portfolio

Welcome to the project memory database for Harsha's Portfolio website. This document contains information about the developer, tech stack, architecture, page layouts, components, and development instructions to guide any AI agent or developer working on this project.

---

## 👤 Developer Profile
- **Name**: Harsha Vardhan
- **Role**: Full-Stack Developer & Product Designer
- **Current Education**: B.Tech final-year student (Graduation 2026) at **Avanthi Engineering College**
- **Prior Education**:
  - Intermediate (2020-2022) at **Sri Chaitanya Junior College**
  - SSC (2019) at **Pragathi English Medium High School**
- **Core Competencies**:
  - React, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS
  - Programming in C and Python
  - Visual UI/UX design, UX research, Figma prototyping
  - Git/GitHub workflow, REST APIs, responsive design

---

## 🛠️ Technology Stack
The application is built on top of a modern, fast frontend setup:
1. **Framework & Tooling**: [React 18](https://react.dev/) + [Vite](https://vite.dev/)
2. **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) + [PostCSS](https://postcss.org/) for modular responsive classes
3. **Routing**: [React Router DOM v7](https://reactrouter.com/) for single-page routing
4. **Third-Party Libraries**:
   - `@emailjs/browser`: Handles contact form submissions directly from the frontend
   - `react-icons` & `lucide-react`: SVG icon packages
   - `react-slick` & `slick-carousel`: Slick sliders for portfolio previews and testimonials
   - `aos` (Animate On Scroll): Smooth scroll animation effects

---

## 📁 Directory Structure
```text
portfolio-main/
├── README.md                      # Short description of the repository
├── index.html                     # Entry HTML template for Vite mounting
├── package.json                   # Scripts and project dependencies
├── postcss.config.js              # PostCSS config
├── tailwind.config.js             # Tailwind CSS theme setup
├── vercel.json                    # Configuration for Vercel deployment
├── vite.config.js                 # React Vite plugin setup
└── src/
    ├── App.jsx                    # Routing mapping and site wrapper footer
    ├── index.css                  # Core CSS & Tailwind imports
    ├── main.jsx                   # React root hydration
    ├── ScrollToTop.jsx            # Routing helper resetting scroll position
    ├── assets/                    # Project screenshots and images (e.g. HRMS images, portfolioimg.png)
    ├── data/
    │   └── projects.js            # Standardized project schema and constants list
    ├── layout/
    │   ├── Layout.jsx             # Sticky Nav Header, Outlet router container, CV downloads
    │   ├── Logo.png               # Brand logo image with drop shadow filters
    │   ├── harsha_vardhan_resume.pdf # The developer resume PDF
    │   └── Layout-cards/
    │       ├── Carousel.jsx       # Nested image slideshow for detail views
    │       ├── PortfolioCard.jsx  # Interactive portfolio list, filter, search, & detail drawer
    │       └── Images/            # Specific layouts assets (Todo screenshots)
    └── pages/
        ├── About.jsx              # Timeline, metrics details, resume link, skills progress bars
        ├── Contact.jsx            # Formik-like visual inputs linked with EmailJS
        ├── Home.jsx               # Landing page aggregating key components
        ├── onSkills.jsx           # Categorized breakdown of levels for C, React, Node, etc.
        ├── Portfolio.jsx          # Slick slider carousel with preview cards
        ├── Projects.jsx           # Clean container wrapping PortfolioCard filter
        ├── Reviews.jsx            # Layout cards styling client reviews
        ├── Skills.jsx             # Visual cards summarizing core value propositions (Visual Design, UX, Prototype)
        └── Testimonial.jsx        # Blockquote feedback display with custom SVG quote marks
```

---

## 🔌 Routes Map
Configured inside [App.jsx](file:///c:/Users/harsha/Downloads/portfolio-main/portfolio-main/src/App.jsx):

| Route Path | Component Name | Description |
| :--- | :--- | :--- |
| `/` | `Home` ([Home.jsx](file:///c:/Users/harsha/Downloads/portfolio-main/portfolio-main/src/pages/Home.jsx)) | Landing page detailing hero section, key metrics, Skills cards, Portfolio preview carousel, Testimonials, and Contact form. |
| `/About` | `About` ([About.jsx](file:///c:/Users/harsha/Downloads/portfolio-main/portfolio-main/src/pages/About.jsx)) | Detailed metrics, profile picture, skills progress bars, and high school to B.Tech timeline. |
| `/onSkills` | `OnSkills` ([onSkills.jsx](file:///c:/Users/harsha/Downloads/portfolio-main/portfolio-main/src/pages/onSkills.jsx)) | Categorized list of technical skills (Frontend, Backend, Tools, Languages) with dynamic progress bar ratings. |
| `/Projects` | `Projects` ([Projects.jsx](file:///c:/Users/harsha/Downloads/portfolio-main/portfolio-main/src/pages/Projects.jsx)) | Wraps [PortfolioCard](file:///c:/Users/harsha/Downloads/portfolio-main/portfolio-main/src/layout/Layout-cards/PortfolioCard.jsx) search and filter tag component. |
| `/Testimonials` | `Testimonials` ([Testimonial.jsx](file:///c:/Users/harsha/Downloads/portfolio-main/portfolio-main/src/pages/Testimonial.jsx)) | Renders user testimonials quotes block. |
| `/Contact` | `Contact` ([Contact.jsx](file:///c:/Users/harsha/Downloads/portfolio-main/portfolio-main/src/pages/Contact.jsx)) | Direct messaging terminal. |

---

## 🎨 Design Tokens & Aesthetics
- **Theme Color**: Green/Emerald gradient vibes (`text-green-500`, `bg-green-600`, `border-green-100`).
- **Layout Styling**: Sticky navigation header with modern drop-shadow brand filter logo, glassmorphism overlays (`backdrop-blur-xl bg-white/70`), and pulse animations.
- **Card Design**: Clean borders, hover zoom effects, and micro-interactions.

---

## 📂 Project Data Schema (`src/data/projects.js`)
All projects displayed in the work sections are represented as objects with the following keys:
```javascript
{
  slug: string,        // Unique lowercase identifier
  title: string,       // Display title
  desc: string,        // Short descriptive paragraph
  images: Array,       // Resolved URLs mapping to project screenshots
  link: string,        // Live deployment URL
  tech: Array,         // Tech tag strings (e.g. ["React", "Tailwind", "Vite"])
  year: number,        // Completion year
  type: string,        // "web" | "ui" | "tool" (for tag filtering)
}
```

---

## ⚡ Development Runbook

### Prerequisites
Make sure dependencies are installed inside the inner `portfolio-main` folder:
```bash
cd portfolio-main
npm install
```

### Dev Server
Starts the Vite dev server locally at `http://localhost:5173`:
```bash
npm run dev
```

### Build for Production
Builds the static bundle assets inside `dist/`:
```bash
npm run build
```

### Preview Production Build
Runs a local server to preview the build output:
```bash
npm run preview
```
