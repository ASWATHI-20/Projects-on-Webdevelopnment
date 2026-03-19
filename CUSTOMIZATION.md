# Customizing Your Portfolio

This portfolio is fully custom-coded and designed to be easily extensible. 

## 1. Changing Theme Colors
Open `src/styles/variables.css`. 
You can completely change the look of your portfolio by modifying the HEX values under `:root` (Light Mode) and `[data-theme='dark']` (Dark Mode).
Focus on changing:
- `--primary-color` (e.g., set to `#e53e3e` for a red theme)
- `--bg-color` / `--bg-surface`

## 2. Updating Personal Content
Navigate to the following files to update your personal info:
- **`src/components/Hero.jsx`**: Change the `fullText` variable, your name, and the description paragraph.
- **`src/components/About.jsx`**: Replace the generic paragraphs with your actual background. Update the image placeholder with an `<img>` tag pointing to your photo.
- **`src/components/Contact.jsx`**: Update the `mailto:` link and your location.

## 3. Updating Data Arrays
The skills, projects, and experiences are generated from arrays inside the components.
- **`src/components/Skills.jsx`**: Edit the `skillCategories` array.
- **`src/components/Projects.jsx`**: Edit the `projectsData` array. Replace placeholder Links.
- **`src/components/Experience.jsx`**: Edit the `experienceData` array.

## 4. Setting up Form Submission
Currently, the Contact form uses mock validation. To make it send real emails without needing a backend:
1. Sign up for a service like [EmailJS](https://www.emailjs.com/) or [Formspree](https://formspree.io/).
2. For Formspree, change the `<form>` tag in `Contact.jsx` to: 
   `<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">`
   (Remove the `onSubmit={handleSubmit}` handler).
