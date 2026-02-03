import suitPurple from "@/assets/suit-purple.png";
import suitGreen from "@/assets/suit-green.png";

const CTABanner = () => {
  return (
    <section className="container-main py-6 sm:py-8 md:py-10 px-4">
      <div className="bg-pink-light rounded-2xl sm:rounded-3xl overflow-hidden relative">
        <div className="flex flex-col md:flex-row items-center">
          
          {/* LEFT CONTENT */}
          <div className="flex-1 p-6 sm:p-8 md:p-10 lg:p-12 md:pl-12 lg:pl-16 z-10">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground leading-tight">
              Get Ready for your next
            </h2>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              Competition
            </h2>

            <p className="text-muted-foreground text-xs sm:text-sm mb-6 max-w-sm leading-relaxed">
              Not sure which style suits you? Chat with our experts on Instagram
              for a quick call! Get FREE design samples and expert advice on
              colors and cuts that meet your federation&apos;s requirements!
            </p>

            <button
  className="
    relative z-10
    px-6 sm:px-8
    py-2.5 sm:py-3
    bg-primary
    text-white
    rounded-full
    font-semibold
    text-xs sm:text-sm
    overflow-hidden
    transition-all hover:-translate-y-0.5 hover:shadow-lg


    after:absolute after:inset-0
    after:bg-pink-hover
    after:rounded-full
    after:scale-0
    after:transition-all hover:-translate-y-0.5 hover:shadow-lg

    after:-z-10

    hover:after:scale-[2.5]
    hover:text-white
    [text-shadow:2px_3px_2px_rgba(190,18,60,0.6)]
    hover:[text-shadow:1px_1px_2px_rgba(253,164,175,0.9)]
  "
>
  Book a Free Consultation
</button>

          </div>

          {/* RIGHT IMAGES */}
<div className="relative flex-1 w-full h-56 sm:h-64 md:h-[360px] lg:h-[420px] overflow-hidden">


  {/* GREEN SUIT – BACK */}
  <img
    src={suitGreen}
    alt="Green crystal competition suit"
    className="
      absolute
      bottom-[-20px]
      right-[-40px]
      w-56 sm:w-64 md:w-80 lg:w-[420px]
      rotate-[6deg]
      z-10
      object-contain
    "
  />

  {/* PURPLE SUIT – FRONT */}
  <img
    src={suitPurple}
    alt="Purple crystal competition suit"
    className="
      absolute
      bottom-[-30px]
      right-[40px] sm:right-[60px] md:right-[80px]
      w-60 sm:w-72 md:w-96 lg:w-[460px]
      rotate-[-8deg]
      z-20
      object-contain
    "
  />
</div>


        </div>
      </div>
    </section>
  );
};

export default CTABanner;
