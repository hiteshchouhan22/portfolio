// index.js
export const servicesData = [
  {
    title: "FullStack Development",
    description:
      "Your business deserves a fast, secure, and future-proof digital foundation. I develop custom web apps with clean architecture, optimized databases, and seamless integrations—ensuring reliability at every layer.",
    items: [
      {
        title: "Backend Engineering",
        description: "(REST APIs, Microservices, Redis, Message Queues)",
      },
      {
        title: "Frontend Excellence",
        description: "(React, Nextjs, TypeScript, Interactive UI/UX)",
      },
      {
        title: "Database Design",
        description: "(SQL/NoSQL Optimization, Scalable Structures)",
      },
    ],
  },
  {
    title: "DevOps & Cloud Solutions",
    description:
      "Deploying software shouldn't be a gamble. I automate infrastructure, enforce security, and leverage cloud platforms (AWS/Azure) to keep your app running smoothly—24/7, at any scale.",
    items: [
      {
        title: "CI/CD Pipelines",
        description: "(GitHub Actions, Docker, Kubernetes)",
      },
      {
        title: "Server Management ",
        description: "(Linux, Nginx, Load Balancing)",
      },
    ],
  },
  {
    title: "Security & Optimization",
    description:
      "Slow or hacked apps destroy trust. I harden security (XSS/SQLI protection, OAuth) and optimize bottlenecks so your app stays fast, safe, and scalable as you grow.",
    items: [
      {
        title: "Code Audits",
        description: "(Refactoring, Tech Debt Cleanup)",
      },
      {
        title: "SEO Tech Stack",
        description: "(SSR, Metadata, Structured Data)",
      },
    ],
  },
  {
    title: "Web & Mobile Apps",
    description:
      "A clunky interface can sink even the best ideas. I craft responsive, pixel perfect web and mobile apps (React Native/Flutter) that users love—bridging design and functionality seamlessly.",
    items: [
      {
        title: "Cross-Platform Apps",
        description: "(Single codebase for iOS/Android/Web)",
      },
      {
        title: "PWAs",
        description: "(Offline mode, Push Notifications)",
      },
      {
        title: "E-Commerce",
        description: "(Checkout flows, Payment Gateways, Inventory APIs)",
      },
    ],
  },
  {
    title: "Game Development",
    description:
      "Immersive, high-performance games that blend realism with intelligent systems. I build optimized, scalable game mechanics and AI using modern engines and languages for PC, console, and cross-platform deployment.",
    items: [
      {
        title: "Unreal Engine Expertise",
        description: "(UE5, Nanite, Lumen, Cross-platform builds)",
      },
      {
        title: "AI Systems",
        description: "(C++20, Custom State Machines, Adaptive NPCs)",
      },
      {
        title: "Performance Optimization",
        description: "(Memory-efficient systems, Profiling tools)",
      },
      {
        title: "Collaboration",
        description: "(Git workflows, Codebase management, Team scaling)",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "Automation Builder",
    description:
      "A B2C SaaS platform that empowers users to create custom automation workflows via drag-and-drop nodes—integrating services like Google Drive, Slack, Discord, Notion, and subscription management via Stripe.",
    href: "https://github.com/hiteshchouhan22/automation_builder",
    image: "/assets/projects/automation-builder.jpg",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "Next.js 14" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Clerk" },
      { id: 4, name: "Stripe" },
      { id: 5, name: "Google Drive API" },
      { id: 6, name: "Slack API" },
      { id: 7, name: "Discord API" },
      { id: 8, name: "Notion API" },
      { id: 9, name: "Drag-and-Drop UI" },
    ],
  },
  {
    id: 2,
    name: "Bee-Newsletter (SaaS Email Newsletter Platform)",
    description:
      "A SaaS newsletter platform built with Next.js 14 and TypeScript, featuring user authentication, campaign dashboard, email template design, AWS SES for email delivery, Stripe-powered subscription handling, plus spam protection and a clean landing page experience.",
    href: "https://github.com/hiteshchouhan22/Bee-newsletter",
    image: "/assets/projects/bee-newsletter.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Next.js 14" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "AWS SES" },
      { id: 4, name: "AstraDB" },
      { id: 5, name: "Stripe" },
      { id: 6, name: "Spam Protection" },
      { id: 7, name: "Email Template Editor" },
    ],
  },
  {
    id: 3,
    name: "AI Japanese Language Teacher",
    description:
      "An interactive 3D AI-powered Japanese language learning app featuring animated teacher and classroom models (GLB/GLTF), text-to-speech, and easy model-swapping support for customization and avatars.",
    href: "https://github.com/hiteshchouhan22/AI_Teacher",
    image: "/assets/projects/ai-teacher.jpg",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "JavaScript" },
      { id: 2, name: "Three.js (3D)" },
      { id: 3, name: "GLB/GLTF Models" },
      { id: 4, name: "Text-to-Speech AI" },
      { id: 5, name: "Customizable Avatars" },
    ],
  },
  {
    id: 4,
    name: "Realistic Horror Game (Development Phase)",
    description:
      "A cutting-edge horror game built in Unreal Engine 5, featuring intelligent AI behavior, memory-efficient systems, and optimized cross-platform build configurations. Designed for realism and immersion with a focus on performance and collaborative development.",
    href: "https://www.loom.com/share/dc147ce5e9cb4668a258432314658f84",
    image: "/assets/projects/horror-game.jpg",
    bgImage: "/assets/backgrounds/poster.jpg",
    date: "Aug 2024 – Present",
    frameworks: [
      { id: 1, name: "Unreal Engine 5" },
      { id: 2, name: "C++20" },
      { id: 3, name: "Custom AI State Machines" },
      { id: 4, name: "Performance Profiling Tools" },
      { id: 5, name: "Cross-Platform Build Configurations" },
      { id: 6, name: "Git (Branching & Collaboration)" },
    ],
  },
];

export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/hiteshchouhan22/" },
  { name: "GitHub", href: "https://github.com/hiteshchouhan22" },
];
