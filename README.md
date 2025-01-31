# My Valentine 💝

An interactive Valentine's Day proposal web application built with Astro.js. This playful and romantic web app features an engaging "Will you be my Valentine?" question with interactive buttons, animations, and celebratory effects.

## Features

- 💖 Interactive "Yes/No" buttons with playful interactions
- 🎉 Celebratory confetti effects when accepted
- 🎵 Delightful sound effects (music box and confetti sounds)
- 💕 Floating heart animations and emojis
- 📱 Fully responsive design (optimized for mobile devices)
- 🎨 Beautiful gradient background with custom styling

## Technologies Used

- [Astro.js](https://astro.build/) - The web framework for content-driven websites
- [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) - For celebratory effects
- TypeScript - For type-safe JavaScript
- CSS3 - For animations and responsive design

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:4321`

## Available Commands

- `npm run dev` - Start the development server
- `npm run build` - Build the production site
- `npm run preview` - Preview the production build locally

## Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── astro.svg
│   │   ├── background.svg
│   │   ├── confetti.wav
│   │   ├── musicbox.wav
│   │   └── us.png
│   ├── components/
│   │   └── Welcome.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

## Features in Detail

- **Interactive Buttons**: The "No" button playfully moves away when the user tries to click it
- **Progressive Response**: The "Yes" button changes its text and triggers celebration effects
- **Animations**: Includes floating hearts and emojis with varying animation patterns
- **Sound Effects**: Features both a music box melody and confetti sound effects
- **Responsive Design**: Optimized for various screen sizes, including specific adjustments for iPhone 14 Pro
