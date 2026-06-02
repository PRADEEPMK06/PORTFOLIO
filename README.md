# Pradeep M K | DevOps & Cloud Engineer Portfolio

A modern, responsive portfolio website built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS**. Optimized for deployment and showcasing DevOps & Cloud Engineering expertise.

## 🚀 Features

- ⚡ **Fast Performance** - Built with Next.js for optimized performance
- 📱 **Fully Responsive** - Mobile-first design using Tailwind CSS
- 🎨 **Modern UI** - Smooth animations with Framer Motion
- 🔍 **SEO Optimized** - Next.js built-in SEO capabilities
- 🎯 **Professional Structure** - Production-ready code organization
- 🚀 **Easy Deployment** - Ready for Render, Vercel, or any Node.js host

## 📋 Tech Stack

- **Framework:** Next.js 16.2.7
- **UI Library:** React 19.2.4
- **Styling:** Tailwind CSS 4 + PostCSS
- **Language:** TypeScript 5
- **Icons:** React Icons + Lucide React
- **Animations:** Framer Motion
- **Linting:** ESLint

## 🛠️ Local Development

### Prerequisites

- Node.js 18+ and npm/yarn installed
- Git configured

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd next-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Building & Deployment

### Local Build

```bash
npm run build
npm start
```

### Deploy to Render

1. **Create a Render Account** - Visit [render.com](https://render.com)

2. **Connect Your Repository** - Link your GitHub repository to Render

3. **Configure Build Settings:**
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
   - **Node Version:** 18.x or higher

4. **Environment Variables** - Add any required environment variables in Render dashboard

5. **Deploy** - Click deploy and your site will be live!

### Render YAML Configuration

The `render.yaml` file contains the deployment configuration. Render will automatically read it.

## 📁 Project Structure

```
next-portfolio/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   └── components/       # Reusable React components
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Projects.tsx
│       ├── Experience.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── public/               # Static assets (images, icons)
├── next.config.ts        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Dependencies & scripts
└── render.yaml           # Render deployment config
```

## 🔧 Available Scripts

- `npm run dev` - Start development server (port 3000)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Environment Variables

See `.env.example` for required environment variables. Copy to `.env.local` for local development:

```bash
cp .env.example .env.local
```

## 🚀 Performance Tips

- Images are optimized with Next.js Image component
- CSS is tree-shaken with Tailwind CSS
- Code splitting is handled automatically by Next.js
- Static generation where possible for faster load times

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Pradeep M K** - DevOps & Cloud Engineer
- 🔗 GitHub: [@PRADEEPMK06](https://github.com/PRADEEPMK06)
- 📧 Contact: Through portfolio contact form

---

**Built with ❤️ using modern web technologies**

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
