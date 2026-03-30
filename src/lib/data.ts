import { Project, TechStack } from "../types"

export const techStack: {
  frontend: TechStack[]
  backend: TechStack[]
  database: TechStack[]
  tools: TechStack[]
} = {
  frontend: [
    { name: 'HTML5', hasProjects: true, color: 'from-orange-500 to-red-500', projects: [] },
    { name: 'CSS3', hasProjects: true, color: 'from-blue-500 to-cyan-500', projects: [] },
    { name: 'JavaScript', hasProjects: true, color: 'from-yellow-400 to-orange-500', projects: [] },
    { name: 'TypeScript', hasProjects: true, color: 'from-blue-600 to-blue-800', projects: [] },
    { name: 'React', hasProjects: true, color: 'from-cyan-400 to-blue-500', projects: [] },
    { name: 'Next.js', hasProjects: true, color: 'from-gray-600 to-gray-900', projects: [] },
    { name: 'Tailwind CSS', hasProjects: true, color: 'from-teal-400 to-cyan-600', projects: [] },
    { name: 'Bootstrap', hasProjects: true, color: 'from-purple-500 to-purple-700', projects: [] },
    { name: 'Framer Motion', hasProjects: true, color: 'from-pink-500 to-purple-600', projects: [] },
  ],
  backend: [
    { name: 'Node.js', hasProjects: true, color: 'from-green-500 to-emerald-600', projects: [] },
    { name: 'Express.js', hasProjects: true, color: 'from-gray-500 to-gray-700', projects: [] },
    { name: 'REST APIs', hasProjects: true, color: 'from-indigo-500 to-blue-600', projects: [] },
    { name: 'JWT Auth', hasProjects: true, color: 'from-rose-500 to-red-600', projects: [] },
    { name: 'Nodemailer', hasProjects: true, color: 'from-yellow-500 to-amber-600', projects: [] },
  ],
  database: [
    { name: 'MongoDB', hasProjects: true, color: 'from-green-600 to-green-800', projects: [] },
    { name: 'Mongoose', hasProjects: true, color: 'from-red-500 to-red-700', projects: [] },
    { name: 'Firebase', hasProjects: true, color: 'from-yellow-500 to-orange-600', projects: [] },
    { name: 'Cloudinary', hasProjects: true, color: 'from-blue-400 to-blue-600', projects: [] },
  ],
  tools: [
    { name: 'Git & GitHub', hasProjects: true, color: 'from-gray-700 to-gray-900', projects: [] },
    { name: 'Vercel', hasProjects: true, color: 'from-gray-600 to-black', projects: [] },
    { name: 'Stripe', hasProjects: true, color: 'from-violet-500 to-indigo-600', projects: [] },
    { name: 'VS Code', hasProjects: true, color: 'from-blue-500 to-blue-700', projects: [] },
  ],
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Cornerstone Catering Services',
    description: 'A full-stack Nigerian food ordering platform built for a real catering business serving Chicago and Minnesota. Features a complete customer-facing ordering experience with meal browsing, cart management, and Stripe-powered checkout — plus a fully custom admin dashboard for managing meals, categories, orders, and users. Includes live order tracking, automated email notifications at every delivery stage, ZIP code delivery zone validation, and Cloudinary image management. This is production-level work, live and actively used by real customers.',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Stripe', 'Tailwind CSS', 'Cloudinary', 'Nodemailer'],
    image: '/images/cornerstone.png',
    github: 'https://github.com/boluwatifemi23/my-fullstack-app',
    live: 'https://cornerstonecatering.vercel.app',
    featured: true,
    category: 'Full-Stack',
  },
  {
    id: 2,
    title: 'ParentCircle — Social Platform',
    description: 'A feature-rich social networking platform designed specifically for parents to connect, share milestones, and support each other. Built with Next.js and React, it includes user authentication flows, an animated landing page, social feed with likes and comments, milestone tracking dashboard, testimonials carousel, and a beautifully designed community gallery. Demonstrates real product thinking — not just code, but a complete user experience with onboarding, engagement features, and polished UI.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: '/images/parentcircle.png',
    github: 'https://github.com/boluwatifemi23/mylevel4project',
    live: 'https://mylevel4project.vercel.app',
    featured: true,
    category: 'Full-Stack',
  },
  {
    id: 3,
    title: 'NeonTech — Cyberpunk Landing Page',
    description: 'A visually striking cyberpunk-themed landing page that pushes the boundaries of pure CSS. Features animated neon glow effects, particle systems, glitch text animations, and smooth parallax scrolling — all without a single JavaScript framework. Built to demonstrate mastery of CSS fundamentals, animation timing, and creative front-end thinking. Perfect showcase of what raw HTML and CSS can achieve when pushed to their limits.',
    tech: ['HTML5', 'CSS3'],
    image: '/images/neon-tech.png',
    github: 'https://github.com/boluwatifemi23/neotech',
    live: 'https://neon-tech-ivory.vercel.app/',
    featured: false,
    category: 'Frontend',
  },
  {
    id: 4,
    title: 'Luxe — Premium Glassmorphism Showcase',
    description: 'A luxury product showcase exploring the glassmorphism design trend at its finest. Combines frosted glass UI elements with 3D card tilt interactions, animated gradient backgrounds, and elegant micro-animations. Built with HTML5, CSS3, Bootstrap and JavaScript, this project demonstrates an eye for premium design aesthetics and the ability to create high-end digital experiences — the kind of work luxury brands and high-growth startups want.',
    tech: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
    image: '/images/luxe.png',
    github: 'https://github.com/boluwatifemi23/luxelandingpage',
    live: 'https://luxelandingpage.vercel.app/',
    featured: false,
    category: 'Frontend',
  },
  {
    id: 5,
    title: 'Nexus — SaaS Landing Page',
    description: 'A modern SaaS marketing website built entirely with Tailwind CSS utility classes. Features animated mesh gradient backgrounds, floating blob animations, scroll-triggered reveals, and a complete marketing structure — hero, features, pricing, and testimonials. Demonstrates proficiency in utility-first CSS and conversion-focused design. Clean, maintainable code that any developer could pick up and extend.',
    tech: ['HTML5', 'Tailwind CSS', 'JavaScript'],
    image: '/images/nexus.png',
    github: 'https://github.com/boluwatifemi23/nexus',
    live: 'https://nexus-orcin-kappa.vercel.app/',
    featured: false,
    category: 'Frontend',
  },
  {
    id: 6,
    title: 'TaskMaster — Vanilla JS Task Manager',
    description: 'A feature-rich task management app built with zero frameworks — pure vanilla JavaScript from the ground up. Implements class-based OOP architecture, drag-and-drop reordering, localStorage persistence, real-time search, and animated statistics. This project exists to prove a point: that deep JavaScript fundamentals matter more than knowing the latest framework. Every developer should know how to build this before they reach for React.',
    tech: ['JavaScript', 'HTML5', 'CSS3'],
    image: '/images/taskmasterrr.png',
    github: 'https://github.com/boluwatifemi23/taskmaster',
    live: 'https://taskmaster-indol-five.vercel.app/',
    featured: false,
    category: 'Frontend',
  },
  {
  id: 7,
  title: 'SwiftFunds — Digital Banking App',
  description: 'A fully functional fintech web app named SwiftFunds — "Spend Anywhere, Anytime." Built with JavaScript, HTML5, CSS3, and Firebase for real user authentication (account creation and login). Features a clean banking dashboard with send, receive, and money management flows, designed to mirror the UX of modern Nigerian digital finance products. Deployed live on Firebase Hosting — this is not a mockup, it\'s a working app with real auth and a real backend.',
  tech: ['JavaScript', 'HTML5', 'CSS3', 'Firebase'],
  image: '/images/swiftfundsimage.jpeg',
  github: 'https://github.com/boluwatifemi23',
  live: 'https://myproject-f2fed.web.app/',
  featured: true,
  category: 'Frontend',
},
]

export const navItems = [
  { name: 'Home', href: 'home' },
  { name: 'About', href: 'about' },
  { name: 'Skills', href: 'skills' },
  { name: 'Projects', href: 'projects' },
  { name: 'Contact', href: 'contact' },
]