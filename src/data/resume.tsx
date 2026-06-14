import { Icons } from "@/components/icons";
import { House } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Vue } from "@/components/ui/svgs/vue";
import { Javascript } from "@/components/ui/svgs/javascript";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Java } from "@/components/ui/svgs/java";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Html5 } from "@/components/ui/svgs/html5";
import { Sass } from "@/components/ui/svgs/sass";
import { Git } from "@/components/ui/svgs/git";
import { Figma } from "@/components/ui/svgs/figma";
import { AI } from "@/components/ui/svgs/ai";

export const DATA = {
  name: "Sergio Ariza - Software Engineer",
  initials: "SA",
  url: "https://sergioariza.github.io",
  location: "Barcelona, Spain",
  locationLink: "https://www.google.com/maps/place/Barcelona",
  description:
    "Senior Frontend Engineer (Vue · React · TypeScript · UI Craft · Component Architecture)",
  summary:
    "Senior Front-End Engineer with 10+ years of experience crafting polished, user-focused web applications — from fast-moving edtech startups to large-scale SaaS platforms. Specialist in Vue.js, React and TypeScript with a strong eye for UI detail and component architecture. Equally comfortable working closely with UX designers from detailed Figma specs — using Dev Mode to extract production-ready CSS and design tokens for pixel-perfect implementation — or translating product requirements directly into polished interfaces when design resource is limited. Proven ability to work autonomously in small, high-velocity product teams, shipping quickly while maintaining high standards of quality, accessibility and craft. Experienced across the full stack — including REST API design with Node.js and Express — with a genuine interest in rich, interactive and data-driven user experiences, including complex data visualisation and graph-oriented UI challenges. Experienced in AI-assisted development workflows using Claude Code, GitHub Copilot, AI agents and MCP integrations, with a track record of mentoring teams on adopting these practices effectively.",
  avatarUrl: "/picofme.jpg",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: true, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    projects: {
      order: 5, enabled: true,
      label: "My Projects",
      heading: "Check out my latest work",
      text: "I've worked on a variety of projects to test myself, from simple websites to UI platforms. Here are a few of my latest side projects.",
    },
    photos: {
      order: 6, enabled: true,
      heading: "My Recent Travels",
    },
    contact: {
      order: 8, enabled: true,
      label: "Contact",
      heading: "Get in touch",
      text: "Want to chat? Just send me an email with any question and I'll respond whenever I can.",
    },
  },
  photos: [
    { src: "/photos/photo1.jpg", alt: "Photo 1" },
    { src: "/photos/photo2.jpg", alt: "Photo 2" },
    { src: "/photos/photo3.jpg", alt: "Photo 3" },
    { src: "/photos/photo4.jpg", alt: "Photo 4" },
    { src: "/photos/photo5.jpg", alt: "Photo 5" },
    { src: "/photos/photo6.jpg", alt: "Photo 6" },
    { src: "/photos/photo7.jpg", alt: "Photo 7" },
    { src: "/photos/photo8.jpg", alt: "Photo 8" },
    { src: "/photos/photo9.jpg", alt: "Photo 9" },
  ],
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Vue", icon: Vue },
    { name: "Javascript", icon: Javascript },
    { name: "Typescript", icon: Typescript },
    { name: "Java", icon: Java },
    { name: "Node.js", icon: Nodejs },
    { name: "HTML5", icon: Html5 },
    { name: "CSS/SASS", icon: Sass },
    { name: "Git", icon: Git },
    { name: "Figma", icon: Figma },
    { name: "AI", icon: AI },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
  ],
  contact: {
    email: "sergioariza@outlook.com",
    tel: "+1 512 000 0000",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sergioariza/",
        icon: Icons.linkedin,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sergioariza",
        icon: Icons.github,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:sergioariza@outlook.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Visma",
      href: "https://www.visma.com/",
      location: "Remote (Barcelona, Spain)",
      title: "Senior Software Engineer",
      logoUrl: "./work/visma.png",
      start: "October 2019",
      end: "June 2026",
      description:
        "Senior frontend engineer working on a multi-product SaaS platform in Vue.js 2 & 3 (Javascript and TypeScript) across legacy and greenfield surfaces, with standalone React applications. Responsible for owning front-end features end-to-end — from interpreting product requirements to shipping polished, accessible user interfaces — serving the majority of vocational, private and secondary schools in Norway.",
    },
    {
      company: "VSWare",
      href: "https://vsware.ie/",
      location: "Dublin (Ireland)",
      title: "Software Engineer",
      logoUrl: "./work/vsware.svg",
      start: "May 2018",
      end: "October 2019",
      description:
        "Frontend engineer at a fast-growing edtech startup serving schools across Ireland, working in a small product team where autonomy, pace and ownership were essential. Laid the Vue.js front-end architecture that continued to scale post-acquisition by Visma.",
    },
    {
      company: "Webfactory Ltd",
      href: "https://vsware.ie/",
      location: "Dublin (Ireland)",
      title: "Web Developer",
      logoUrl: "./work/webfactory.jpg",
      start: "July 2015",
      end: "May 2018",
      description:
        "Web developer responsible for delivering 10+ client websites, including high-profile Irish public sector organisations.",
    },
    {
      company: "Murdock Digital SL",
      location: "Madrid (Spain)",
      title: "Frontend Developer",
      logoUrl: "./work/murdock.png",
      start: "February 2015",
      end: "July 2015",
      description:
        "Web developer with AngularJS, HTML5, jQuery, CSS3/SASS and RWD. REST API integration with NodeJS/ExpressJS. Cross-browser debugging (WebKit, Gecko, Trident). MongoDB and MySQL. Drupal (PHP).",
    },
  ],
  education: [
    {
      school: "Universidad de Málaga",
      href: "https://www.uma.es/etsi-informatica/",
      degree: "Bachelor of Science, Computer Science",
      logoUrl: "./school/uma.png",
      start: "2007",
      end: "2013",
    },
  ],
  projects: [
    {
      title: "React UI Platform",
      href: "https://react-ui-platform-storybook.vercel.app",
      dates: "May 2026",
      active: true,
      description:
        "A React component library and design system showcasing scalable frontend architecture. Built with modern tooling, it focuses on accessible UI primitives, composition-driven APIs, and variant-based styling patterns, reflecting production-grade design system practices.",
      technologies: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "Radix UI",
        "Storybook",
        "GitHub Actions",
        "Turbo"
      ],
      links: [
        {
          type: "Website",
          href: "https://react-ui-platform-storybook.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sergioariza/react-ui-platform",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/react-ui-platform.png",
      video: "",
    },
    {
      title: "Vue 3 + Webpack Module Federation + pnpm Monorepo",
      href: "https://github.com/sergioariza/vue3-webpack-federation-pnpm",
      dates: "May 2026",
      active: true,
      description:
        "A microfrontend architecture experiment using Vue 3 and Webpack 5 Module Federation. It demonstrates runtime application composition, independent deployment boundaries, and a scalable frontend architecture approach using pnpm workspaces.",
      technologies: [
        "Vue3",
        "Webpack 5",
        "Module Federation",
        "pnpm workspaces",
        "Babel"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sergioariza/vue3-webpack-federation-pnpm",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/vue3-webpack-federation-pnpm.png",
      video: "",
    },
    {
      title: "Trip Stack",
      href: "https://github.com/sergioariza/vue3-webpack-federation-pnpm",
      dates: "May 2026",
      active: true,
      description:
        "A full-stack travel management application where users can create, edit, and manage personal trips. It includes authentication and a REST API built with Express and Prisma, and explores multiple frontend implementations (Vue 3 JavaScript, Vue 3 TypeScript, React JavaScript, and React TypeScript) over a shared backend.",
      technologies: [
        "Vue3",
        "React",
        "Javascript",
        "Typescript",
        "Vite",
        "Express",
        "JWT",
        "SQLite",
        "Prisma"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sergioariza/vue3-webpack-federation-pnpm",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/trip-stack.png",
      video: "",
    },
  ],
} as const;
