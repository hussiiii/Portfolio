import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  dev, 
  innovate, 
  founder, 
  swe, 
  d2d, 
  sidepocket, 
  repcode, 
  aggiehouse, 
  clubly, 
  repcodehome, 
  aggieworks, 
  cnpc, 
  solidigm, 
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  }
];

const services = [
  {
    title: "Founder",
    icon: founder,
  },
  {
    title: "Innovator",
    icon: innovate,
  },
  {
    title: "Full-Stack Developer",
    icon: dev,
  },
  {
    title: "Software Engineer",
    icon: swe,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Techincal Project Manager Intern",
    company_name: "Solidigm",
    icon: solidigm,
    iconBg: "#4F00B4",
    date: "Jan 2024 - Present",
    points: [
      "Led a cross-functional team of 10 engineers/designers to create an OKR analytics dashboard for the VP of CTE using React, Next.js, and Supabase",
      "Build a real-time analytics dashboard to visualize progress trends across 50+ employees and 10+ branches",
      "Integrated a reports system to streamline communication between branches, reducing reporting time by over 50%",
    ],
  },
  {
    title: "Founder",
    company_name: "Repcode.io",
    icon: repcode,
    iconBg: "#383E56",
    date: "September 2024 - Present",
    points: [
      "Developed & launched an end-to-end full-stack app with over 2000 users to enhance software engineering technical interview preparation using React, Next.js, and over 10 libraries and APIs",
      "Created a variation of the SuperMemo 2 algorithm to dynamically adjust review intervals for coding problems",
      "Implemented 15+ REST API endpoints relating to authentication, payment processing, and AI integration",
      "Developed a scalable backend with Prisma ORM, MySQL, and AWS to optimize data handling and retrieval",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Sidepocket",
    icon: sidepocket,
    iconBg: "#E6DEDD",
    date: "August 2024 - Present",
    points: [
      "Implemented full-stack features using React, Next.js, and tRPC for a fintech startup tracking over $1M in assets",
      "Developed graph-shading functionality for stock projections using linear interpolation, improving the accuracy of over 100 interactive visualizations",
      "Created 3 dynamic components to display real-time data about a users portfolio",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Design2Data",
    icon: d2d,
    iconBg: "#FFFFFF",
    date: "June 2024 - September 2024",
    points: [
      "Rebuilding the labs enzyme web database serving over 40 U.S. undergraduate institutions by transitioning the tech stack from PHP to a modern React, Next.js, and TypeScript framework",
      "Engineered a data visualization interface with real-time filtering, sorting, and aggregation of enzyme characterization data for over 1000 enzyme variant records",
      "Implemented a Python script to parse CSV files and generate Michaelis-Menton and Lineweaver-Burk plots",
    ],
  },
  {
    title: "Developer",
    company_name: "AggieWorks",
    icon: aggieworks,
    iconBg: "#FFFFFF",
    date: "October 2023 - December 2023",
    points: [
      "Collaborated with 20+ team members in an AGILE environment to build a lightning-fast club exploration tool for nearly 30,000 students using Svelte, TypeScript, and Go",
      "Leveraged GORM for efficient data retrieval and query scopes to filter, paginate, and sort club data based on user inputs, reducing average search times by over 8 seconds",
      "Built a CLI tool facilitating CRUD operations on the PostgreSQL database for over 100 different clubs and tags",
      "Implemented an interactive club information page from a Figma hi-fi with interactive content and responsive design"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Repcode",
    description: "A free web app to help software engineers practice Leetcode the right way",
    tags: ["Next.js", "TypeScript", "React", "Prisma", "AWS", "MySQL"],
    image: repcodehome,
    sourceCodeLink: "/",
    websiteLink: "https://www.repcode.io/",
    dateRange: "Fall 2024",
  },
  {
    name: "AggieHouse Portal",
    description: "Streamlining volunteer scheduling for a housing non-profit.",
    tags: ["Next.js", "TypeScript", "React", "Prisma", "TailwindCSS", "MySQL", "TextBee API"],
    image: aggiehouse,
    sourceCodeLink: "https://github.com/hussiiii/HackDavis2024",
    websiteLink: "https://aggie-house-portal.vercel.app/",
    dateRange: "Spring 2024",
  },
  {
    name: "Clubly",
    description: "A lightning-fast club exploration platform for UC Davis students.",
    tags: ["Svelte", "TypeScript", "PostgreSQL", "Go", "GORM"],
    image: clubly,
    sourceCodeLink: "/",
    websiteLink: "https://clubly.org/#loaded",
    dateRange: "Winter 2024",
  },
  {
    name: "AI Script Generator",
    description: "A tool to generate scripts for the Minecraft mod CustomNPCs",
    tags: ["OpenAI API", "LangChain", "FAISS", "Flask", "Python"],
    image: cnpc,
    sourceCodeLink: "https://github.com/hussiiii/Architect",
    websiteLink: "/",
    dateRange: "Fall 2023",
  },
  // Add more projects here...
];

export { services, technologies, experiences, testimonials, projects };
