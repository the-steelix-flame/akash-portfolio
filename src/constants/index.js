const navLinks = [
  {
    name: "Work",
    link: "#experience",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
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
  { value: 10, suffix: "+", label: "Major Projects" }, // From your 5 listed projects
  { value: 25, suffix: "+", label: "Tech Skills" }, // Counted from your skills list
  { value: 10, suffix: "+", label: "Hackathons" }, // From your achievements
  { value: 9.3, suffix: "1", label: "B.Tech SGPA" }, // From your education
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
    imgPath: "https://img.icons8.com/fluency/96/puzzle.png", 
    title: "Problem Solving",
    desc: "Honestly, I just love figuring out why a model isn't learning or why a pipeline broke. Whether it's digging through messy data or tweaking hyperparameters, I treat every bug like a puzzle. Just a small achievement, Leetcode Contest Rating: 1800+ (Top 5% globally).",
  },
  {
    imgPath: "https://img.icons8.com/fluency/96/communication.png", 
    title: "Clear Communication",
    desc: "I can translate complex model architectures into plain English. It's really about making sure the non-technical folks actually understand what the model is doing (and what it can't do!). I really enjoy breaking down those complex concepts into something everyone can grasp.",
  },
  {
    imgPath: "https://img.icons8.com/fluency/96/time-management.png", 
    title: "Time Management",
    desc: "Training models takes time, so I'm big on optimizing my workflow. I juggle data prep, coding, and testing so I'm never just staring at a progress bar when a deadline is coming up.",
  },
  {
    imgPath: "https://img.icons8.com/fluency/96/learning.png", 
    title: "Fast Learner",
    desc: "The AI landscape changes literally every week. I spend a lot of time reading popular research papers, scrolling through YouTube videos, and playing with the latest frameworks just to stay in the loop. You kind of have to love learning in this field!",
  },
  {
    imgPath: "https://img.icons8.com/fluency/96/group-background-selected.png", 
    title: "Team Player",
    desc: "I don't just build a model and throw it over the wall. I love working closely with frontend and backend developers to make sure the AI actually integrates smoothly into the final product.",
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
    // Project 7: TrackInTrade
    review:
      "Built TrackInTrade, an AI-powered trading journal to help log trades, analyse performance, and gain insights.",
    youtubeId: "",
    imgPath: "/images/ttsnippet.png",
    logoPath: "/images/Trackintrade.png",
    title: "TrackInTrade (Design Thinking Lab, HITK)",
    date: "April 2025",
    responsibilities: [
      "Enabled smart visualizations like advanced charts and heatmaps to track profitability day by day.",
      "Integrated AI-driven analytics to highlight patterns, emotional biases, and improvement areas.",
    ],
    githubLink: "https://github.com/the-steelix-flame/TrackInTrade",
    liveLink: "https://track-in-trade-gevv.vercel.app/",
  },
  {
    // Project 6: FacE-RecO
    review:
      "Created FacE-RecO, a real-time automated employee attendance system using easy-to-handle lightweight ML models, winning Finalist at FLUXUS.",
    youtubeId: "",
    imgPath: "/images/project_facereco.png",
    logoPath: "/images/facereco.png",
    title: "FacE-RecO (FLUXUS, IIT Indore)",
    date: "March 2025",
    responsibilities: [
      "Enabled seamless entry management by eliminating manual check-ins and reducing processing latency.",
      "Added spoof detection to identify screen-based or photo attacks by analyzing light reflections and facial depth.",
      "Achieved Finalist position among 1000+ participants in the hackathon.",
    ],
    githubLink: "https://github.com/the-steelix-flame/FacE-RecO",
    liveLink: "",
  },
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
    githubLink: "https://github.com/the-steelix-flame/Symbiosis", // ⬅️ ADD YOUR LINK
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
    githubLink: "https://github.com/the-steelix-flame/PatternIQ", // ⬅️ ADD YOUR LINK
    liveLink: "https://pattern-iq-1o1d.vercel.app/", // ⬅️ ADD YOUR LINK
  },
  {
    // Project 2: Lexi SimplifAI
    review:
      "Architected a serverless web app integrating Google Cloud Vision API for OCR and Gemini 1.5 Flash for advanced NLP tasks like document summarization and risk detection.",
    youtubeId: "", 
    imgPath: "/images/lexisnippet.png",
    logoPath: "/images/lexilogo.png",
    title: "Lexi SimplifAI (Full-Stack / Cloud AI Pipeline)",
    date: "2025",
    responsibilities: [
      "Built multi-language translation and an interactive context-aware Q&A Node.js API.",
      "Deployed on Vercel utilizing a fully integrated Firebase auth and storage stack.",
      "Integrated Gemini 1.5 Flash and Google Cloud Vision API to establish a highly scalable AI document processing pipeline.",
    ],
    githubLink: "https://github.com/the-steelix-flame/lexi-simplifai", 
    liveLink: "https://lexi-simplifai-kitb.vercel.app/", 
  },
  {
    // Project 4: AERA
    review:
      "Developed a real-time spatial engine optimizing travel routes for biological safety, significantly reducing PM2.5 and NO2 exposure by 40%.",
    youtubeId: "", 
    imgPath: "/images/aerasnippet.png",
    logoPath: "/images/aeralogo.png",
    title: "AERA (AI Health Tech / Routing Algorithm)",
    date: "2025",
    responsibilities: [
      "Integrated Agentic AI (Gemini Pro) for live environmental reasoning, dynamic health alerts, and real-time data parsing.",
      "Built a Long-Term Impact Predictor and gamified user tracking dashboard using React.js and FastAPI.",
      "Leveraged the Open-Meteo API and Leaflet.js to chart dynamic, health-optimized routing map layers.",
    ],
    githubLink: "https://github.com/the-steelix-flame/aera", 
    liveLink: "https://aera-hackathon-b3711.web.app/", 
  },
  {
    // Project 8: ECHO
    review:
      "Built an empathetic conversational AI featuring a 5-layer cognitive pipeline that builds a living psychological model of the user instead of generic pattern matching.",
    youtubeId: "", 
    imgPath: "/images/echosnippet.png",
    logoPath: "/images/echologo.png",
    title: "ECHO (OpenAImer - AI in Mental Health)",
    date: "April 2026",
    responsibilities: [
      "Engineered a 10-dimensional Emotional Signal Decoder using Gemini 2.0 Flash to extract underlying distress, tone, and linguistic markers.",
      "Architected a Narrative Engine to build a real-time, evolving psychological profile and a ChromaDB Hybrid RAG pipeline for grounded therapeutic context.",
      "Implemented a two-pass Safety Gate for crisis escalation and a vanilla JS frontend equipped with typing hesitation analysis and voice input.",
    ],
    githubLink: "https://github.com/mandrita16/ECHO-Mental-Health-AI",
    liveLink: "https://huggingface.co/spaces/kumar-akash/echo-backend", 
  }
  
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
