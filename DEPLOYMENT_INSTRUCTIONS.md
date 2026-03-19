# Deployment Instructions

This portfolio is built using Vite + React. Follow these steps to deploy it live.

## Deploying to Vercel (Recommended)
Vercel is perfectly optimized for React applications.

1. Create a free account at [Vercel](https://vercel.com/).
2. Install the Vercel CLI or connect your GitHub account.
3. **If using GitHub:**
   - Push this repository to GitHub.
   - Go to Vercel dashboard and click "Add New Project".
   - Import your GitHub repository.
   - Vercel will auto-detect Vite. The Build Command should be `npm run build` and Output Directory should be `dist`.
   - Click "Deploy".
4. **If using Vercel CLI:**
   - Run `npm i -g vercel` in your terminal.
   - Run `vercel` in the project root directory.
   - Follow the prompts to deploy.

## Deploying to Netlify
1. Create a free account at [Netlify](https://netlify.com/).
2. Push your project to GitHub.
3. On Netlify, click "Add new site" -> "Import an existing project".
4. Connect GitHub and select your repository.
5. Build settings: 
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site".

## Local Build Testing
Before deploying, you can test the production build locally:
`npm run build`
`npm run preview`
