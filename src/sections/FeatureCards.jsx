import { abilities } from "../constants";
import TitleHeader from "../components/TitleHeader";

const FeatureCards = () => (
  <section className="w-full padding-x-lg mt-20 md:mt-32">
    {/* Added the TitleHeader here! */}
    <TitleHeader title="Core Strengths" sub="Beyond just writing code I've some..." />
    
    <div className="mx-auto grid-3-cols mt-12 md:mt-16">
      {abilities.map(({ imgPath, title, desc }) => (
        <div
          key={title}
          className="card-border rounded-xl p-8 flex flex-col gap-4 transition-transform duration-300 hover:-translate-y-2"
        >
          <div className="size-14 flex items-center justify-center rounded-full bg-white/5">
            <img src={imgPath} alt={title} className="w-10 h-10 object-contain" />
          </div>
          <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
          <p className="text-white-50 text-lg leading-relaxed">{desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeatureCards;