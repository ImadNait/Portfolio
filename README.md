# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and responsive design
- 🌙 Dark/Light mode toggle
- 📱 Mobile-friendly navigation
- ✨ Smooth animations with Framer Motion
- 📧 Contact form with email functionality
- 🎯 SEO optimized
- ⚡ Fast performance with Next.js

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Email:** Nodemailer
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Gmail account (for contact form)

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Set up environment variables:
Create a `.env.local` file in the root directory and add:
\`\`\`env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
\`\`\`

**Important:** For Gmail, you need to:
- Enable 2-factor authentication on your Google account
- Generate an app password (not your regular password)
- Use the app password in the `EMAIL_PASS` variable

4. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Email Setup

To enable the contact form functionality:

1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Go to Security > 2-Step Verification > App passwords
4. Generate a new app password for "Mail"
5. Use this app password in your `.env.local` file

## Customization

### Personal Information
Update the following files with your information:
- `components/hero.tsx` - Name, title, description
- `components/about.tsx` - About section content
- `components/contact.tsx` - Contact information
- `components/footer.tsx` - Footer details
- `app/layout.tsx` - Site metadata

### Profile Picture
Replace the image at `public/images/profile.jpeg` with your own photo.

### Skills
Update the skills array in `components/skills.tsx` with your technologies.

### Projects
Modify the projects array in `components/projects.tsx` with your work.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## Project Structure

\`\`\`
portfolio/
├── app/
│   ├── api/contact/route.ts    # Contact form API
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── components/
│   ├── ui/                     # shadcn/ui components
│   ├── about.tsx               # About section
│   ├── contact.tsx             # Contact section
│   ├── footer.tsx              # Footer
│   ├── hero.tsx                # Hero section
│   ├── navbar.tsx              # Navigation
│   ├── projects.tsx            # Projects section
│   ├── skills.tsx              # Skills section
│   └── theme-provider.tsx      # Theme provider
├── lib/
│   └── utils.ts                # Utility functions
├── public/
│   └── images/
│       └── profile.jpeg        # Profile picture
├── .env.local                  # Environment variables
├── package.json
├── tailwind.config.ts
└── tsconfig.json
\`\`\`

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Feel free to reach out if you have any questions or suggestions!

- Email: naitmihoubimzd@gmail.com
- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]
