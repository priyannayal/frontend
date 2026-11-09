# COSMO — Full Frontend

A polished React + Vite frontend prototype for **COSMO — AI-Powered Learning Universe**.

## Pages
- Home
- Explore
- Learn
- AI Reel
- Quiz
- Progress
- Profile
- 404 / Lost in Space

## Theme
All pages share one visual system:
- Cosmic / deep-space background
- Glassmorphism cards
- Violet + cyan neon accents
- CSS 3D planet and orbit effects
- Hover depth and glow
- Responsive mobile layout
- Consistent navigation and interactions

## Run
```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Important
This is the **frontend only**. AI, FastAPI, database, authentication and real generated content are intentionally not connected yet. The UI uses mock content so the complete product flow can be demonstrated before backend integration.

## Next integration
1. Connect search form to `/api/analyze`
2. Connect lesson generation to `/api/lesson`
3. Replace mock lesson SceneCards with validated Scene JSON
4. Connect quiz to `/api/quiz`
5. Connect progress/history to database
6. Connect AI Reel generation/playback
