# Pixel Portfolio

A modern, highly interactive personal portfolio for Software Engineers, designed with premium aesthetics and responsive UI.

## Features

- **Premium UI Design**: Built with a dark theme, utilizing vibrant gradients, glassmorphism, and subtle micro-animations (e.g., floating cards, pulse effects, blurred backdrops).
- **Interactive 3D Carousel**: A custom, CSS-only 3D rotating testimonial slider that auto-rotates and supports navigation dots.
- **Dynamic PDF Viewer Modal**: An integrated modal system to seamlessly view and download documents (e.g., CVs, Certifications) directly within the app without navigating away.
- **Multilingual Support**: Built-in translation toggle (Vietnamese `vi` and English `en`) supporting all localized strings across components.
- **Responsive Layout**: Designed to look great on all devices, dynamically adjusting grid layouts (e.g., from 2 columns to 1 column) on smaller screens (mobile / tablet).
- **Tech Stack Iconography**: Utilizes the `tech-stack-icons` library for crisp, scalable vectors of popular development tools and frameworks.

## Tech Stack

- **Framework**: React / Vite
- **Styling**: Vanilla CSS (CSS-in-JS inline objects pattern) + Scoped Animations
- **Icons**: `tech-stack-icons` & native SVG / Emojis


## Local Development

Ensure you have Node.js installed on your machine.

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd pixel-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    This will start the local server, typically running at `http://localhost:5173`.

4.  **Build for production:**
    ```bash
    npm run build
    # or
    yarn build
    ```

## Project Structure (Key Files)

- `src/Portfolio.jsx`: The monolithic entry point containing all components (`Navbar`, `Hero`, `About`, `Skills`, `Experience` with embedded PDF viewing, `Testimonials` 3D layout, `Projects`, `Blog`, `Contact`).
- `src/assets/`: Contains all static media files:
  - `resume/`: Holds the primary `resume.pdf`.
  - `certification/`: Contains `.pdf` files mapped to the cert cards.
  - `ai-logo/`: Graphics for AI stack visualization.

## Author

**LinhPN**
- Email: linhvodanh2004@gmail.com
- Role: Full-Stack Developer
