import { Globe, Sparkles, Heart } from "lucide-react";

const features = [
  { icon: Globe, label: "Worldwide Athletes" },
  { icon: Sparkles, label: "Stunning Personalities" },
  { icon: Heart, label: "Unique Suit Designs" },
];

const GlimpseSection = () => {
  return (
    <section className="container-main pt-2 sm:pt-3 md:pt-4 pb-8 sm:pb-12 md:pb-16">
      {/* Section Label */}
      <p
  className="section-label items-center text-center"
  style={{ fontFamily: "'Montserrat', sans-serif" }}
>
  GLIMPSE OF HAPPINESS
</p>

      {/* Main Heading - 2 lines */}
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-3xl max-w-4xl mx-auto px-4 font-bold leading-tight font-montserrat">
        Behind every custom suit lies a story of grit,
        <br />
        transformation, and unshakable determination
      </h2>
    </section>
  );
};

export default GlimpseSection;