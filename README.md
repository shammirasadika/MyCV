# 🚀 Shammi Parussella - Portfolio Website

A modern, responsive portfolio website built with **Next.js 15**, **Shadcn/ui**, and **Tailwind CSS**, showcasing professional experience, skills, and projects with beautiful animations and dark mode support.

🌐 **Live Demo**: [https://my-cv-bay-two.vercel.app/]

![Portfolio Dark Mode Preview](./docs/screenshots/Dark Mode.png)

## 🎯 Project Overview

This portfolio website was developed to showcase Shammi Parussella's professional background as a Software Engineer and .NET Consultant. The project demonstrates modern web development practices, responsive design, and user experience optimization.

## 🤖 AI Generation Approach

This project was generated and enhanced using **GitHub Copilot** and AI-assisted development:

### 🔧 AI Development Process:
1. **Initial Setup**: Used AI to scaffold the Next.js 15 project structure
2. **Component Generation**: AI-generated Shadcn/ui components for consistent design
3. **Content Integration**: Automated conversion of resume content into structured React components
4. **Styling Enhancement**: AI-assisted Tailwind CSS styling and responsive design
5. **Animation Implementation**: Generated smooth animations and transitions
6. **Dark Mode**: AI-powered dark theme implementation with proper contrast
7. **Optimization**: Performance and accessibility improvements through AI suggestions

### 📊 v0.dev Integration:
- Generated initial component layouts using v0.dev
- Iterative refinement of UI components
- AI-powered design system implementation
- Responsive design patterns

## ✨ Features Implemented

### 🎨 **Visual Design**
- ✅ **Modern Dark Theme** (Default) with light mode toggle capability
- ✅ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- ✅ **Colorful Accent System** - Each section has its own color theme
- ✅ **Professional Typography** - Optimized fonts with proper hierarchy
- ✅ **Glass Morphism Effects** - Subtle card styling for modern appearance

### 🎭 **Animations & Interactions**
- ✅ **Left-to-Right Slide Animations** - Experience section with staggered delays
- ✅ **Hover Effects** - Interactive elements with smooth transitions
- ✅ **Fade-in Animations** - Page load animations for better UX
- ✅ **Smooth Scrolling** - Custom scrollbar styling
- ✅ **Transform Effects** - Cards translate on hover for engagement

### 🔗 **External Integrations**
- ✅ **LinkedIn Profile Link** - Direct connection to professional profile
- ✅ **GitHub Repository Link** - Showcase of coding projects
- ✅ **Company Website Links** - External links to all previous employers
- ✅ **Contact Information** - Phone, email, and location details

### 💼 **Professional Content**
- ✅ **Professional Summary** - Highlighting 4+ years of experience
- ✅ **Technical Skills Matrix** - Organized by technology categories
- ✅ **Work Experience Timeline** - Detailed career progression
- ✅ **Education Background** - Academic qualifications and certifications
- ✅ **Language Proficiency** - Communication skills showcase

### 🛠️ **Technical Features**
- ✅ **Next.js 15** - Latest framework with App Router
- ✅ **TypeScript** - Type-safe development
- ✅ **Shadcn/ui Components** - Consistent, accessible UI library
- ✅ **Tailwind CSS** - Utility-first styling approach
- ✅ **Lucide Icons** - Professional iconography
- ✅ **SEO Optimization** - Proper meta tags and descriptions

## 🚀 Technology Stack

### **Frontend Framework**
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React version with concurrent features
- **TypeScript** - Static type checking

### **UI & Styling**
- **Shadcn/ui** - Component library built on Radix UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Class Variance Authority** - Component variant management

### **Development Tools**
- **pnpm** - Fast, efficient package manager
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing

## 📱 Responsive Design

The portfolio is fully responsive across all device sizes:

- **Desktop (1200px+)**: Full layout with side-by-side content
- **Tablet (768px - 1199px)**: Adapted layout with proper spacing
- **Mobile (< 768px)**: Stacked layout optimized for touch interaction

## 🌙 Dark/Light Mode

![Dark Mode Portfolio](./docs/screenshots/dark-mode-portfolio.png)
*Dark mode showcase featuring gradient text, professional layout, and color-coded sections*

### Dark Mode (Default)
- Primary background: Deep slate (`#0f172a`)
- Card backgrounds: Slate 800 (`#1e293b`)
- Text: Light colors with proper contrast
- Accent colors: Bright variants for visibility

### Light Mode
- Clean white backgrounds
- Subtle gray tones for depth
- Dark text for readability
- Muted accent colors

## 📂 Project Structure

```
boiler-plate-next.js/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx            # Main portfolio page
├── components/
│   ├── Portfolio.tsx        # Main portfolio component
│   └── ui/                 # Shadcn/ui components
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       └── separator.tsx
├── lib/
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
├── docs/
│   └── screenshots/        # Documentation images
├── components.json         # Shadcn/ui configuration
├── next.config.ts         # Next.js configuration
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
└── tsconfig.json          # TypeScript configuration
```

## 🎨 Color Scheme

### Primary Colors
- **Blue**: Professional sections (Summary, LinkedIn)
- **Green**: Technical skills and achievements
- **Orange**: Experience and career progression
- **Purple**: Education and learning
- **Cyan**: Languages and communication

### Background Colors
- **Dark Mode**: Slate 900/800 gradients
- **Light Mode**: Subtle color tints (blue-50, green-50, etc.)

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shammirasadika/MyCV.git
   cd MyCV
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run development server**
   ```bash
   pnpm dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
# Build the project
pnpm build

# Start production server
pnpm start
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy automatically on every push

### Other Platforms
- **Netlify**: Works with build output
- **Cloudflare Pages**: Compatible with Next.js
- **AWS Amplify**: Supports Next.js applications

## 📊 Performance Features

- **Static Generation**: Pre-rendered pages for fast loading
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic bundle optimization
- **Tree Shaking**: Unused code elimination
- **CSS Optimization**: Minimal CSS bundle size

## 🔧 Customization

### Adding New Sections
1. Create component in `components/` directory
2. Import and add to `Portfolio.tsx`
3. Style with Tailwind CSS classes
4. Add animations using custom CSS classes

### Modifying Colors
1. Update color classes in components
2. Modify CSS variables in `globals.css`
3. Adjust Tailwind theme in `tailwind.config.js`

### Adding Animations
1. Define keyframes in `globals.css`
2. Create utility classes
3. Apply to components with delay classes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes with proper documentation
4. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Shammi Parussella**
- 📧 Email: shammirasadika123@gmail.com
- 💼 LinkedIn: [shammiparussella-301603197](https://www.linkedin.com/in/shammiparussella-301603197)
- 🐱 GitHub: [shammirasadika](https://github.com/shammirasadika)
- 📍 Location: Melbourne, Australia

---

**Built with ❤️ using AI-assisted development and modern web technologies**
