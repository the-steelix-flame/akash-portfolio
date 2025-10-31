const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 5, suffix: "+", label: "Major Projects" }, // From your 5 listed projects
  { value: 20, suffix: "+", label: "Tech Skills" }, // Counted from your skills list
  { value: 7, suffix: "+", label: "Hackathons" }, // From your achievements
  { value: 8.5, suffix: "1", label: "B.Tech YGPA" }, // From your education
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png", // Replace with a relevant icon (e.g., problem-solving)
    title: "Problem Solving",
    desc: "Strong analytical and critical thinking skills to tackle complex challenges.",
  },
  {
    imgPath: "/images/chat.png", // Replace with a relevant icon (e.g., communication)
    title: "Effective Communication",
    desc: "Clearly communicating technical concepts to diverse stakeholders.",
  },
  {
    imgPath: "/images/time.png", // This one fits well
    title: "Time Management",
    desc: "Efficiently managing tasks and projects to meet deadlines.",
  },
];
const techStackImgs = [
  {
    name: "ML Engineer",
    imgPath: "/images/logos/tensorflow.png", // Replace with your image
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "ML Engineer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    // Project 1: LookALike.com
    review:
      "Developed a full-stack AI application to identify lookalikes by matching user-uploaded photos against a database of celebrity and user faces using deep learning.",
    imgPath: "/images/lookalikesnippet.png",
    logoPath: "/images/lookalike.png",
    title: "LookALike.com (Full-Stack AI App)",
    date: "August 2025",
    responsibilities: [
      "Engineered a dual-input system (webcam vs. upload) to generate a robust, averaged facial embedding.",
      "Architected a decoupled system with Next.js frontend and a Python Flask AI microservice.",
      "Utilized a PostgreSQL database with pgvector for high-speed, scalable similarity searches.",
    ],
    githubLink: "https://github.com/the-steelix-flame/LookALike.com", // ⬅️ ADD YOUR LINK
    liveLink: "https://newlook-alike.vercel.app/", // ⬅️ ADD YOUR LINK
  },
  {
    // Project 2: Symbiosis
    review:
      "Developed a full-stack, AI-driven collaborative platform for environmental action, uniting diverse stakeholders to monitor and address ecological issues across India.",
    imgPath: "/images/symbiosissnippet.png",
    logoPath: "/images/symbiosislogo.png",
    title: "Symbiosis (Hack Heritage 3.0)",
    date: "August 2025",
    responsibilities: [
      "Engineered a dynamic 'Eco-Score' for each Indian state using crowdsourced data and the Google Gemini API.",
      "Architected a React frontend (with Leaflet.js) and a Node.js/Express.js backend.",
      "Used Google Gemini API for complex geospatial reasoning and predicting environmental hotspots.",
    ],
    githubLink: "YOUR_GITHUB_LINK_HERE", // ⬅️ ADD YOUR LINK
    liveLink: "symbiosis-ochre.vercel.app", // ⬅️ ADD YOUR LINK
  },
  {
    // Project 3: PatternIQ
    review:
      "Engineered a three-stage AI-Powered Trading Intelligence Platform that translates plain-English trading strategies into executable Python code for no-code backtesting.",
    imgPath: "/images/patternIQ.png",
    logoPath: "/images/patterniqlogo.png",
    title: "PatternIQ (Securities Market Hackathon)",
    date: "July 2025",
    responsibilities: [
      "Built 'The Arena', a gamified community hub with adaptive quizzes from real-time market news.",
      "Designed and deployed FinBERT (NLP), LSTM Autoencoder (anomalies), and CNN (candlestick) models.",
      "Full-stack implementation using FastAPI, React, Firebase, and Google OAuth 2.0.",
    ],
    githubLink: "YOUR_GITHUB_LINK_HERE", // ⬅️ ADD YOUR LINK
    liveLink: "https://github.com/the-steelix-flame/PatternIQ", // ⬅️ ADD YOUR LINK
  },
  {
    // Project 4: FacE-RecO
    review:
      "Created FacE-RecO, a real-time automated employee attendance system using easy-to-handle lightweight ML models, winning Finalist at FLUXUS.",
    imgPath: "/images/project_facereco.png",
    logoPath: "/images/facereco.png",
    title: "FacE-RecO (FLUXUS, IIT Indore)",
    date: "March 2025",
    responsibilities: [
      "Enabled seamless entry management by eliminating manual check-ins and reducing processing latency.",
      "Added spoof detection to identify screen-based or photo attacks by analyzing light reflections and facial depth.",
      "Achieved Finalist position among 1000+ participants in the hackathon.",
    ],
    githubLink: "YOUR_GITHUB_LINK_HERE", // ⬅️ ADD YOUR LINK
    liveLink: "https://github.com/the-steelix-flame/FacE-RecO", // ⬅️ Example: Leave empty if no live link
  },
  {
    // Project 5: TrackInTrade
    review:
      "Built TrackInTrade, an AI-powered trading journal to help log trades, analyse performance, and gain insights.",
    imgPath: "/images/ttsnippet.png",
    logoPath: "/images/Trackintrade.png",
    title: "TrackInTrade (Design Thinking Lab, HITK)",
    date: "April 2025",
    responsibilities: [
      "Enabled smart visualizations like advanced charts and heatmaps to track profitability day by day.",
      "Integrated AI-driven analytics to highlight patterns, emotional biases, and improvement areas.",
    ],
    githubLink: "YOUR_GITHUB_LINK_HERE", // ⬅️ ADD YOUR LINK
    liveLink: "https://track-in-final-git-main-akash-kumars-projects-63e80963.vercel.app/home", // ⬅️ ADD YOUR LINK
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    link: "https://www.instagram.com/goku_x_akash.5/",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
