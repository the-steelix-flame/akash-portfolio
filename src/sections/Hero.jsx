import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  useGSAP(() => {
    // Animate the giant text popping in
    gsap.fromTo(
      ".hero-pop",
      { y: 50, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, stagger: 0.2, duration: 1, ease: "power3.out" }
    );

    // Animate the shaping ideas text
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut", delay: 0.5 }
    );
  });

  return (
    <section id="hero" className="relative w-full flex flex-col overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none">
        <img src="/images/bg.png" alt="background" className="w-full h-full object-cover" />
      </div>

      {/* 1. Landing View: Giant Typography (Takes exactly 1 full screen) */}
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-5">
        <div className="relative flex flex-col items-center justify-center font-black text-[#0e68ee] leading-none uppercase tracking-tighter">  
          <h1 className="hero-pop text-[16vw] md:text-[150px] z-10">
            AKASH
          </h1>

          {/* Overlapping Image Mask
          <div className="hero-pop absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[100px] h-[140px] md:w-[180px] md:h-[260px] rounded-[100px] overflow-hidden border-4 border-black bg-zinc-800 shadow-2xl">
            {/* TODO: Add your photo here! 
            <img 
              src="/images/com_users_.jpg" 
              alt="Akash Kumar" 
              className="w-full h-full object-cover" 
            />
          </div> */}

          <h1 className="hero-pop text-[16vw] md:text-[150px] z-30">
            KUMAR
          </h1>

        </div>
        {/* --- NEW SCROLL INDICATOR --- */}
        <div className="hero-pop absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-40 opacity-80">
          <p className="text-white/60 text-xs md:text-sm font-semibold tracking-[0.3em] uppercase whitespace-nowrap">
            Scroll down buddy
          </p>
          {/* Cool Bouncing Mouse Icon */}
          <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex justify-center p-2">
            <div className="w-1.5 h-3 bg-[#52aeff] rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* 2. Scroll View: Shaping Ideas + 3D Model */}
      <div className="hero-layout relative z-10 w-full min-h-screen">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I’m Akash, a ML developer based in India with a passion for code.
            </p>

            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      {/* 3. Bottom Counter */}
      <div className="relative z-20 w-full pb-10">
        <AnimatedCounter />
      </div>
    </section>
  );
};

export default Hero;