import athlete1 from "@/assets/athlete-1.jpg";
import athlete2 from "@/assets/athlete-2.jpg";
import athlete3 from "@/assets/athlete-3.jpg";
import athlete4 from "@/assets/athlete-4.jpg";
import athlete5 from "@/assets/athlete-5.jpg";

const images = [
  { src: athlete1, alt: "Athlete with medals" },
  { src: athlete2, alt: "Athlete selfie" },
  { src: athlete3, alt: "Athlete on stage" },
  { src: athlete4, alt: "Newspaper feature" },
  { src: athlete5, alt: "Athletes backstage" },
];

const offsets = [
  "translate-y-20",   // 1st → LOW
  "translate-y-10",   // 2nd → MID
  "-translate-y-6",   // 3rd → TOP
  "translate-y-10",   // 4th → MID
  "translate-y-20",   // 5th → LOW
];

const HeroGallery = () => {
  return (
    <section className="w-full pt-12 pb-24">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="grid grid-cols-5 gap-8 items-start">
          {images.map((image, index) => (
            <div
               key={index}
  className={`hero-card relative aspect-[2/3.7] rounded-2xl overflow-hidden cursor-pointer ${offsets[index]}`}
>
  <img
    src={image.src}
    alt={image.alt}
    className="w-full h-full object-cover transition-transform duration-500 ease-out hero-card-img"
  />

              {/* bottom fade */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/80 via-white/30 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroGallery;
