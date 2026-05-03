import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    }, "<");
  }, []);

  return (
    <section id="experience" className="flex-center md:mt-40 mt-20 section-padding xl:px-0">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="My Projects" sub="A Showcase of My Best Works" />
        
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-16">
            {expCards.map((card) => {
              
              // Smart checking to see if links are actually provided
              const hasGithub = card.githubLink && !card.githubLink.includes("YOUR_GITHUB");
              const hasLive = card.liveLink && !card.liveLink.includes("YOUR_LIVE") && card.liveLink.trim() !== "";

              return (
                <div key={card.title} className="exp-card-wrapper">
                  
                  {/* LEFT: Video/Image Card */}
                  <div className="xl:w-2/6">
                    <GlowCard card={card}>
                      {/* 
                        'pointer-events-none' ensures the iframe doesn't steal clicks. 
                        Clicks pass right through to the GlowCard link!
                      */}
                      <div className="relative w-full pt-[60%] rounded-xl overflow-hidden pointer-events-none">
                        {card.youtubeId ? (
                          <iframe
                            className="absolute top-0 left-0 w-full h-full scale-150" 
                            src={`https://www.youtube.com/embed/${card.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${card.youtubeId}&playsinline=1`}
                            allow="autoplay; encrypted-media"
                            frameBorder="0"
                          />
                        ) : (
                          <img src={card.imgPath} alt="project" className="absolute top-0 left-0 w-full h-full object-cover" />
                        )}
                      </div>
                    </GlowCard>
                  </div>
                  
                  {/* RIGHT: Text and Details */}
                  <div className="xl:w-4/6">
                    <div className="flex items-start">
                      <div className="timeline-wrapper">
                        <div className="timeline" />
                        <div className="gradient-line w-1 h-full" />
                      </div>
                      <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20 w-full">
                        <div className="timeline-logo">
                          <img src={card.logoPath} alt="logo" />
                        </div>
                        <div className="flex-1">
                          <h1 className="font-semibold text-2xl md:text-3xl">{card.title}</h1>
                          <p className="my-5 text-white-50">{card.date}</p>
                          <p className="text-[#52aeff] italic mb-4">Responsibilities</p>
                          <ul className="list-disc ms-5 flex flex-col gap-3 text-white-50">
                            {card.responsibilities.map((responsibility, index) => (
                              <li key={index} className="text-base md:text-lg">
                                {responsibility}
                              </li>
                            ))}
                          </ul>

                          {/* Minimalist Link Buttons */}
                          <div className="mt-10 flex flex-wrap items-center gap-8 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
                            
                            {/* GitHub Button */}
                            {hasGithub ? (
                              <a 
                                href={card.githubLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-white hover:text-[#52aeff] transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[2px] after:bg-[#52aeff] hover:after:w-full after:transition-all after:duration-300"
                              >
                                GitHub
                              </a>
                            ) : (
                              <span className="text-white/30 cursor-not-allowed">GitHub Private</span>
                            )}

                            {/* Try It Out Button */}
                            {hasLive ? (
                              <a 
                                href={card.liveLink.startsWith('http') ? card.liveLink : `https://${card.liveLink}`} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-white hover:text-[#52aeff] transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[2px] after:bg-[#52aeff] hover:after:w-full after:transition-all after:duration-300"
                              >
                                Try it out
                              </a>
                            ) : (
                              <span className="text-white/30 cursor-not-allowed">Deployment Undergoing</span>
                            )}
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;