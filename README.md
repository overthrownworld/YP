# Aromatica Cafe - Gulp Project

This is a modern, responsive website for Aromatica Cafe, built with Gulp, SCSS, and HTML5.

## Project Structure
- `src/`: Source files
  - `html/`: HTML pages and partials
  - `scss/`: SCSS modules (components, pages, base)
  - `js/`: JavaScript modules
  - `img/`: Images
- `dist/`: Compiled production ready files

## Features
- **Multi-page**: Home, About, Menu, Contact.
- **Components**: Modal, Accordion, Mobile Menu, Theme Switcher, Forms.
- **Styling**: SCSS with BEM-like structure, responsive design, Dark/Light modes.
- **Automation**: Gulp for compiling Sass, including HTML partials, and syncing browser.

## How to Run

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm start
   ```
   This will start the Gulp watch task and open the site in your browser.

3. **Build for Production**:
   ```bash
   npm run build
   ```
   This compiles everything to the `dist/` folder.

## Technologies
- HTML5
- SCSS (Sass)
- Gulp 4
- Vanilla JavaScript
