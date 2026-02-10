const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Achievements", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: true,
  },
];

const AchievementsPosts = [
  {
    id: 1,
    date: "Feb 2, 2026",
    title: "AWS Cloud Practitioner Essentials",
    image: "/images/Ach1.png",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7425160000618270722/",
  },
  {
    id: 2,
    date: "May 28, 2025",
    title: " IBM Full-Stack JavaScript Developer Professional Certificate",
    image: "/images/Ach2.png",
    link: "https://www.linkedin.com/in/devansh-patel-567a2834b/recent-activity/all/",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title:
      " Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate certification",
    image: "/images/Ach3.png",
    link: "https://www.linkedin.com/in/devansh-patel-567a2834b/recent-activity/all/",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "Gsap"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Puter.js", "Zustand"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "MySql", "Appwrite"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
  {
    category: "Cloud & Virtualization",
    items: ["AWS (EC2, IAM, VPC)", "VirtualBox", "VMware"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/mugiwaradevansh",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/Devanshdrive",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/devansh-patel-567a2834b/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "AI Resume Analyzer",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Travel Agency",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Subscription Tracker",
  },
];

const gallery = [
  // AI Resume Analyzer (Category 1)
  { id: 100, img: "/images/project-AI-Resume-Analyzer.png", category: 1 },
  { id: 101, img: "/images/project-AI-Resume-Analyzer-1.jpg", category: 1 },
  { id: 102, img: "/images/project-AI-Resume-Analyzer-2.jpg", category: 1 },
  { id: 103, img: "/images/project-AI-Resume-Analyzer-3.jpg", category: 1 },
  { id: 104, img: "/images/project-AI-Resume-Analyzer-4.jpg", category: 1 },
  { id: 105, img: "/images/project-AI-Resume-Analyzer-5.jpg", category: 1 },
  { id: 106, img: "/images/project-AI-Resume-Analyzer-6.jpg", category: 1 },
  { id: 107, img: "/images/project-AI-Resume-Analyzer-7.jpg", category: 1 },
  { id: 108, img: "/images/project-AI-Resume-Analyzer-8.jpg", category: 1 },

  // Travel Agency (Category 2)
  { id: 200, img: "/images/Full-Stack Travel Agency Platform.jpg", category: 2 },
  { id: 201, img: "/images/Full-Stack Travel Agency Platform-1.jpg", category: 2 },
  { id: 202, img: "/images/Full-Stack Travel Agency Platform-2.jpg", category: 2 },
  { id: 203, img: "/images/Full-Stack Travel Agency Platform-3.jpg", category: 2 },
  { id: 204, img: "/images/Full-Stack Travel Agency Platform-4.jpg", category: 2 },
  { id: 205, img: "/images/Full-Stack Travel Agency Platform-5.jpg", category: 2 },
  { id: 206, img: "/images/Full-Stack Travel Agency Platform-6.jpg", category: 2 },
  { id: 207, img: "/images/Full-Stack Travel Agency Platform-7.jpg", category: 2 },

  // Subscription Tracker (Category 3)
  { id: 300, img: "/images/Subscription Tracker MVP.jpg", category: 3 },
  { id: 301, img: "/images/Subscription Tracker MVP-1.jpg", category: 3 },
  { id: 302, img: "/images/Subscription Tracker MVP-2.jpg", category: 3 },
  { id: 303, img: "/images/Subscription Tracker MVP-3.jpg", category: 3 },
  { id: 304, img: "/images/Subscription Tracker MVP-4.jpg", category: 3 },
  { id: 305, img: "/images/Subscription Tracker MVP-5.jpg", category: 3 },
];

export {
  navLinks,
  navIcons,
  dockApps,
  AchievementsPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    {
      id: 8,
      name: " AI Resume Analyzer",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-5 left-5",
      windowPosition: "top-[15vh] left-[20vw]",

      children: [
        {
          id: 1,
          name: " AI Resume Analyzer.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A serverless AI-powered resume optimization tool that analyzes resumes and provides actionable, ATS-friendly feedback for job seekers.",
            "Built using React Router v7, TypeScript, Tailwind CSS v4, Zustand, and Vite to ensure fast routing, type safety, and high-performance UI.",
            "Integrated in-browser AI capabilities with Puter.js, eliminating the need for a backend or complex API key management.",
            "Features drag-and-drop PDF resume processing and instant deployment on Netlify for scalable and reliable access.",
          ],
        },

        {
          id: 4,
          name: " AI Resume Analyzer.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-60",
          imageUrl: "/images/project-AI-Resume-Analyzer.png", // <-- put your screenshot path here
        },

        {
          id: 5,
          name: "resumind.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://ai-resume-analyserer.netlify.app/", // you may want to link the frontend live demo instead
          position: "top-5 right-20",
        },
      ],
    },
    {
      id: 10,
      name: "Full-Stack Travel Agency Platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-40 left-5",
      windowPosition: "top-[25vh] left-[25vw]",

      children: [
        {
          id: 1,
          name: "Full-Stack Travel Agency Platform.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A full-stack, production-style Travel Agency Platform featuring a public booking website and a secure admin dashboard built with real-world architecture in mind.",
            "Includes AI-assisted trip itinerary generation, public trip browsing and booking flow, secure authentication, payments, analytics dashboards, and admin content management.",
            "Built with React 19, Vite, Tailwind CSS, Appwrite, Stripe, and AI APIs, focusing on scalable routing, protected flows, and reusable UI components.",
            "Strengthened hands-on experience in full-stack workflows, AI integration, secure deployments, and building maintainable, scalable user-centric applications.",
          ],
        },
        {
          id: 2,
          name: "Full-Stack Travel Agency Platform.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/mugiwaradevansh/Travel-agency-Dashboard-main", // replace with actual deployed link if available
          position: "top-5 right-20",
        },
        {
          id: 4,
          name: " Full-Stack Travel Agency Platform.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-60",
          imageUrl: "/images/Full-Stack Travel Agency Platform.jpg", // <-- put your screenshot path here
        },
      ],
    },
    {
      id: 11,
      name: "Subscription Tracker MVP",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-80 left-5",
      windowPosition: "top-[35vh] left-[30vw]",
      children: [
        {
          id: 1,
          name: "Subscription Tracker MVP.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A full-stack Subscription Tracker MVP designed to manage recurring subscriptions, track renewals, and visualize monthly spending like a SaaS billing dashboard.",
            "Features secure JWT authentication, smart analytics dashboard, complete subscription CRUD, priority-based insights, and optional renewal reminders.",
            "Built with React, Vite, Node.js, Express, MongoDB, and production-ready security practices including CORS, Helmet, and environment configuration.",
            "Strengthened real-world full-stack skills in API design, data modeling, authentication flows, security best practices, and scalable frontend architecture.",
          ],
        },
        {
          id: 2,
          name: "Subscription Tracker MVP.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/mugiwaradevansh/subscriptionAPI",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Subscription Tracker MVP.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/Subscription Tracker MVP.png", // ← replace with your actual screenshot path
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/devansh.png",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/devansh.png",
      description: [
        "Hey! I’m Devansh 👋 ,I’m a Full-Stack Developer passionate about building production-grade web applications with modern architectures, not just visual demos.",
        "I work across the stack using React, TypeScript, Tailwind CSS, Node.js, Express, MongoDB, Appwrite, and cloud platforms to deliver secure and scalable solutions.",
        "I have hands-on experience integrating AI-powered features, authentication systems, payments, analytics, and third-party APIs into real-world products.",
        "I focus on clean code, reusable components, performance optimization, and security best practices while continuously learning new technologies and system design concepts.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",

      href: "/files/resume.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.jpg",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
