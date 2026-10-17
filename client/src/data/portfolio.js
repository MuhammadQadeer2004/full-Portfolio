// ============================================================
//  Sab content yahin se aata hai. Sirf is file ko edit karo,
//  baaki components ko touch karne ki zaroorat nahi.
// ============================================================

export const profile = {
  name: "Muhammad Qadeer",
  initials: "MQ",
  role: "Full Stack/ Web Developer",
  headline:
    "I create responsive, user-friendly interfaces with React.js and modern frontend technologies.I turn ideas into powerful web applications using React.js, Node.js, Express.js, and MongoDB.",
  email: "qadeer142004@gmail.com",
  cv: "/cv.pdf", // apni CV ko client/public/cv.pdf ke naam se rakh do
  github: "https://github.com/MuhammadQadeer2004",
  linkedin: "https://www.linkedin.com/in/muhammad-qadeer-9866b333b",
  available: true,
  availableText: "Open to work",
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  paragraphs: [
    "I'm Muhammad Qadeer, a passionate Frontend Developer and Computer Science graduate who enjoys turning ideas into modern, responsive, and interactive web experiences.",
    "I specialize in React.js, JavaScript, HTML, CSS, and Tailwind CSS. I enjoy building reusable components, creating smooth animations, integrating REST APIs, and developing user-friendly interfaces that work seamlessly across different devices.",
    "I'm also expanding my skills in Node.js, Express.js, and MongoDB to grow as a Full Stack Developer. I believe in continuous learning, writing clean code, and improving my skills through hands-on projects.",
  ],

  currently: [
    "Building modern and responsive web applications with React.js",
    "Learning Node.js, Express.js, and MongoDB for Full Stack development",
    "Exploring advanced animations and improving UI/UX design skills",
    "Looking for Frontend Developer internships and junior-level opportunities",
  ],
};

export const projects = [
 
  {
    title: "Job Portal",
    year: "Present",
    description:
      "A job portal application built with React.js, Node.js, Express.js, and MongoDB. It allows users to search for jobs, apply online, and manage their profiles.",
    stack: ["React.js", "MongoDB", "Node.js", "Socket.IO", "Express.js"],
    live: "https://job-portal-phi-liard.vercel.app/",
    code: "https://github.com/MuhammadQadeer2004/Job-Portal",
  },

   {
    title: "Realtime Dashboard",
    year: "2026",
    description:
      "An analytics dashboard that updates live over WebSockets. Charts animate between values instead of jumping, and the layout rearranges on mobile.",
    stack: ["React", "Tailwind CSS", "Node.js", "Socket.io"],
    live: "https://real-dashboard-react.vercel.app/",
    code: "https://github.com/MuhammadQadeer2004/Real-Dashboard",
  },

  {
    title: "Task Board",
    year: "2025",
    description:
      "A drag-and-drop kanban board with a REST API behind it. Tasks save as you drop them, and failed saves roll back with a clear message.",
    stack: ["React", "Express", "MongoDB"],
    live: "https://task-board-five-topaz.vercel.app/",
    code: "https://github.com/MuhammadQadeer2004/Task-Board",
  },
  {
    title: "Weather Now",
    year: "2024",
    description:
      "A weather app with a five-day forecast and animated conditions. It remembers your last city and works offline with the last saved result.",
    stack: ["JavaScript", "Tailwind CSS", "Open-Meteo API"],
    live: "https://weather-app-five-day.vercel.app/",
    code: "https://github.com/MuhammadQadeer2004/weather-app",
  },
];

export const skills = {
  rowOne: [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Framer Motion",
    "Vite",
    "Responsive design",
  ],
  rowTwo: [
    "Node.js",
    "Express",
    "REST APIs",
    "MongoDB",
    "Git & GitHub",
    "Vercel",
    "Render",
    "Accessibility",
  ],
};

export const experience = [
  {
    role: "Full Stack Web Developer",
    org: "Self-employed",
    period: "2025 – Present",
    points: [
      "Developed responsive web applications using React.js, Node.js, Express.js, and MongoDB.",
      "Built REST APIs and implemented CRUD operations for managing application data.",
      "Integrated frontend components with backend services and MongoDB databases.",
      "Implemented user authentication and responsive UI features.",
    ],
  },
  {
    role: "Frontend Developer",
    org: "Personal Projects",
    period: "2024 – 2025",
    points: [
      "Developed responsive and user-friendly web interfaces using React.js, JavaScript, HTML, and CSS.",
      "Created reusable React components and managed application state using React Hooks.",
      "Integrated REST APIs using Axios and implemented CRUD functionality.",
      "Improved user experience through responsive layouts, optimized rendering, and clean component-based architecture.",
    ],
  },

  {
    role: "Computer Science",
    org: "University of Management and Technology",
    period: "2023 – 2025",
    points: [
      "Final-year project: a realtime chat app with rooms and typing indicators.",
    ],
  },
];
