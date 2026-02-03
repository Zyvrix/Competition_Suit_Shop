import { Sparkles } from "lucide-react";

const questions = [
  "What was going through your mind during prep?",
  "How did stepping on stage in your suit make you feel?",
  "What's one moment that changed everything?",
];

const SpotlightSection = () => {
  return (
    <section
      className="relative py-16 sm:py-20 md:py-28 overflow-hidden"
      style={{
        background: `
          radial-gradient(
            circle at center,
            rgba(255, 220, 235, 0.45) 0%,
            rgba(255, 220, 235, 0.30) 25%,
            rgba(255, 220, 235, 0.15) 45%,
            rgba(255, 255, 255, 1) 70%
          )
        `,
      }}
    >
      <div className="container-main px-4 relative z-10">
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-center">
          We're opening the spotlight to you,
        </h2>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-center mt-1 mb-8 sm:mb-10">
          our incredible athletes.
        </h2>

        {/* Tell us */}
        <p className="text-center text-foreground font-medium mb-6">
          Tell us:
        </p>

        {/* Questions Card */}
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-sm p-5 sm:p-6 mb-8 relative">
          {/* Quote */}
          <span className="absolute top-4 right-5 text-3xl text-primary font-serif">
            ”
          </span>

          <div className="space-y-4">
            {questions.map((question, index) => (
              <div key={index} className="flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-primary mt-1" />
                <p className="text-sm text-foreground leading-relaxed">
                  {question}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mb-6">
          <button className="btn-rect px-8 sm:px-12 py-3 text-sm sm:text-base">
            Share your story with Everyone
          </button>
        </div>

        {/* Motivation */}
        <p className="text-center text-muted-foreground text-sm max-w-xl mx-auto px-4">
          <Sparkles className="w-3 h-3 text-primary inline mr-1" />
          Your story could uplift someone just starting. Motivate someone who
          almost gave up. Show what's possible with heart and hustle.
        </p>
      </div>
    </section>
  );
};

export default SpotlightSection;
