import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
import { techStackIcons } from "../constants";

gsap.registerPlugin(ScrollTrigger);

// Your new detailed tech stack data
const technicalArsenal = [
  {
    category: "Languages",
    items: ["Python", "Java", "JavaScript", "SQL"]
  },
  {
    category: "AI & Machine Learning",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Gemini API", "RAG Pipelines", "NLP"]
  },
  {
    category: "Backend Engineering",
    items: ["FastAPI", "Flask", "Node.js"]
  },
  {
    category: "Frontend Development",
    items: ["React.js", "Next.js", "HTML/CSS"]
  },
  {
    category: "Cloud & DevOps",
    items: ["GCP", "Docker", "Kubernetes", "Vercel", "Firebase"]
  },
  {
    category: "Databases",
    items: ["PostgreSQL (pgvector)", "SQLite", "Firestore", "ChromaDB"]
  },
  {
    category: "Core Fundamentals",
    items: ["DSA", "OOPs", "DBMS", "Operating Systems"]
  }
];

const TechStack = () => {
  useGSAP(() => {
    // Animate 3D Cards
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.15,
        scrollTrigger: {
          trigger: "#skills",
          start: "top 70%",
        },
      }
    );

    // Animate the new Arsenal Cards
    gsap.fromTo(
      ".arsenal-card",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".arsenal-grid",
          start: "top 85%",
        },
      }
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5 flex flex-col items-center">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="What I Bring to the Table"
        />

        {/* The Updated Intro Paragraph */}
        <div className="max-w-4xl mt-8 mb-16 text-center">
          <p className="text-white-50 text-lg md:text-xl leading-relaxed">
            I believe great applications happen when powerful AI logic meets seamless user design. Instead of just staying in my lane, I build across the entire pipeline. From engineering robust Python microservices and vector search pipelines, to integrating Agentic AI into responsive React and Next.js interfaces, I use my tech stack to bridge the gap between heavy-duty machine learning and engaging user experiences. For me, every framework, database, or cloud service is just another puzzle piece used to bring a complete, intelligent vision to life.
          </p>
        </div>

        {/* 3D Roles/Personas */}
        <div className="tech-grid w-full mb-24">
          {techStackIcons.map((techStackIcon) => (
            <div
              key={techStackIcon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIconCardExperience model={techStackIcon} />
                </div>
                <div className="padding-x w-full">
                  <p>{techStackIcon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* NEW: The Point-Wise Technical Arsenal */}
        <div className="w-full max-w-6xl mt-10">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            My Technical <span className="text-[#52aeff]">Arsenal</span>
          </h3>
          
          <div className="arsenal-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {technicalArsenal.map((block) => (
              <div 
                key={block.category} 
                className="arsenal-card card-border rounded-2xl p-6 bg-black-100/50 backdrop-blur-md transition-transform duration-300 hover:-translate-y-2 hover:border-[#52aeff]/30"
              >
                <h4 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#52aeff]"></div>
                  {block.category}
                </h4>
                
                <div className="flex flex-wrap gap-2.5">
                  {block.items.map((item) => (
                    <span 
                      key={item} 
                      className="px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full text-white-50 text-sm font-medium hover:bg-white/10 hover:text-white transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TechStack;