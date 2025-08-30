# Professional Portfolio Website

A clean, modern, and responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Modern UI**: Clean and professional design with subtle animations
- **Component-Based**: Modular architecture for easy customization
- **Performance Optimized**: Built with Vite for fast development and production builds
- **Accessibility**: Focus on usability and accessibility best practices
- **Contact Form**: Integration ready for Formspree or custom backend

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header with smooth scroll
│   ├── Hero.tsx           # Hero section with intro and CTA
│   ├── About.tsx          # About section with bio and stats
│   ├── Projects.tsx       # Projects showcase grid
│   ├── Skills.tsx         # Skills and competencies
│   ├── Contact.tsx        # Contact form and information
│   └── Footer.tsx         # Footer with social links
├── App.tsx               # Main application component
├── main.tsx              # Application entry point
└── index.css             # Global styles and animations
```

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Adding Your Content

### Images Setup
All image placeholders are located in the `public/` folder. Simply replace these files with your actual images:

1. **Profile Photos**:
   - `public/profile.jpg` - Hero section profile image (400x400px recommended)
   - `public/about-profile.jpg` - About section image (600x600px recommended)

2. **Project Screenshots**:
   - `public/project1.jpg` through `public/project6.jpg` (800x600px recommended)
   - Use landscape format for best display

3. **CV/Resume**:
   - `public/cv.pdf` - Your resume file for download

### Image Guidelines
- **Format**: Use .jpg, .jpeg, .png, or .webp
- **Quality**: High resolution but web-optimized (under 1MB per image)
- **Profile Images**: Square format works best
- **Project Images**: Landscape format (4:3 or 16:9 ratio)

## Customization Guide

### Personal Information
- **Name & Tagline**: Update in `src/components/Hero.tsx`
- **Bio & About**: Modify content in `src/components/About.tsx`
- **Contact Details**: Change information in `src/components/Contact.tsx` and `src/components/Footer.tsx`

### Projects
- Edit the `projects` array in `src/components/Projects.tsx`
- Replace placeholder images with your actual project screenshots
- Update GitHub and demo URLs

### Skills
- Modify `skillCategories` and `coreSkills` arrays in `src/components/Skills.tsx`
- Adjust skill levels and categories as needed

### Styling & Colors
- **Primary Colors**: Update Tailwind classes (currently using blue-600, blue-700, etc.)
- **Custom Animations**: Modify in `src/index.css`
- **Layout**: Adjust spacing and sizing in component files

### Contact Form Setup
1. **For Formspree**:
   - Sign up at [Formspree.io](https://formspree.io)
   - Get your form endpoint
   - Replace `YOUR_FORM_ID` in `src/components/Contact.tsx`

2. **For Custom Backend**:
   - Update the `handleSubmit` function in `src/components/Contact.tsx`
   - Point to your own API endpoint

### Images
- Replace placeholder images with your actual photos
- Use high-quality images (recommended: 800x600px for projects, 400x400px for profile)
- Optimize images for web before adding

## Deployment

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Build and deploy: `npm run build && npm run deploy`

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **ESLint** - Code linting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the MIT License.