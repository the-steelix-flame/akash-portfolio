import { useRef } from "react";

// --- ⬇️ 'link' PROP ADD KIYA HAI ⬇️ ---
const GlowCard = ({ card, index, children, link }) => {
  const cardRefs = useRef([]);

  // ... (aapka handleMouseMove logic poora same rahega) ...
  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;
    card.style.setProperty("--start", angle + 60);
  };

  return (
    // --- ⬇️ YEH AAPKA ORIGINAL DIV HAI, BAS 'relative' CLASS ADD KI HAI ⬇️ ---
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column relative" // <-- 'relative' ADD KIYA
    >
      {/* Yeh glow div hai */}
      <div className="glow"></div>

      {/* Yeh Testimonial wala part hai (stars) */}
      {card && (
        <div className="flex items-center gap-1 mb-5">
          {Array.from({ length: 5 }, (_, i) => (
            <img key={i} src="/images/star.png" alt="star" className="size-5" />
          ))}
        </div>
      )}

      {/* Yeh Testimonial wala part hai (review) */}
      {card && (
        <div className="mb-5">
          <p className="text-white-50 text-lg">{card.review}</p>
        </div>
      )}

      {/* Yeh 'children' hai (Project ki image yahaan aayegi) */}
      {children}

      {/* --- ⬇️ YEH HAI ASLI SOLUTION ⬇️ --- */}
      {/* Agar 'link' prop mila hai, toh ek invisible link banao jo poore card ko cover kare.
        'absolute inset-0' ka matlab hai: top:0, left:0, right:0, bottom:0
        'z-10' use upar le aayega taaki woh click ho sake.
      */}
      {card && (
        <a
          href={card.liveLink}
          target={card.liveLink && !card.liveLink.startsWith("#") ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="absolute inset-0 z-10"
        >
          {/* Screen readers ke liye, taaki card.liveLink khaali na lage */}
          <span className="sr-only">View details</span>
        </a>
      )}
    </div>
  );
};

export default GlowCard;