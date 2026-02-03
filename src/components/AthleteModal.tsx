import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X, Play, Star, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export interface AthleteMedia {
  src: string;
  type: "image" | "video";
}

export interface Athlete {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  media: AthleteMedia[];
  rating: number;
  review: string;
}

interface AthleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  athlete: Athlete | null;
  initialMediaIndex?: number;
}

const AthleteModal = ({
  isOpen,
  onClose,
  athlete,
  initialMediaIndex = 0,
}: AthleteModalProps) => {
  const navigate = useNavigate();
  const [currentMediaIndex, setCurrentMediaIndex] = useState(initialMediaIndex);

  useEffect(() => {
    setCurrentMediaIndex(initialMediaIndex);
  }, [athlete, initialMediaIndex, isOpen]);

  if (!athlete) return null;

  const currentMedia = athlete.media[currentMediaIndex];
  const totalMedia = athlete.media.length;

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-primary fill-primary" : "text-muted-foreground"
        }`}
      />
    ));

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="
          max-w-[95vw] md:max-w-[820px]
          p-0 border-0 bg-transparent shadow-none
          overflow-visible [&>button]:hidden
        "
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 z-50 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-muted"
        >
          <X className="w-4 h-4" />
        </button>

        {/* OUTER PINK FRAME */}
        <div className="bg-pink-light rounded-3xl p-4 sm:p-5">
          {/* INNER WHITE CARD */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row">

              {/* LEFT – MEDIA */}
              <div className="relative md:w-[340px] p-4">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted">
                  <img
                    src={currentMedia.src}
                    alt={athlete.name}
                    className="w-full h-full object-cover"
                  />

                  {currentMedia.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                        <Play className="w-6 h-6 fill-foreground ml-0.5" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Arrows */}
                {totalMedia > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setCurrentMediaIndex(
                          currentMediaIndex === 0
                            ? totalMedia - 1
                            : currentMediaIndex - 1
                        )
                      }
                      className="absolute left-6 top-1/2 -translate-y-1/2 w-9 h-9 bg-primary rounded-full flex items-center justify-center shadow-md"
                    >
                      <ChevronLeft className="w-5 h-5 text-white" />
                    </button>

                    <button
                      onClick={() =>
                        setCurrentMediaIndex(
                          currentMediaIndex === totalMedia - 1
                            ? 0
                            : currentMediaIndex + 1
                        )
                      }
                      className="absolute right-6 top-1/2 -translate-y-1/2 w-9 h-9 bg-primary rounded-full flex items-center justify-center shadow-md"
                    >
                      <ChevronRight className="w-5 h-5 text-white" />
                    </button>
                  </>
                )}

                {/* Dots */}
                {totalMedia > 1 && (
                  <div className="flex justify-center gap-2 mt-4">
                    {athlete.media.map((_, i) => (
                      <span
                        key={i}
                        onClick={() => setCurrentMediaIndex(i)}
                        className={`w-2 h-2 rounded-full cursor-pointer ${
                          i === currentMediaIndex
                            ? "bg-primary"
                            : "bg-primary/30"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* RIGHT – CONTENT */}
              <div className="flex-1 p-6 md:p-8 flex flex-col">
                <h2 className="text-2xl font-semibold mb-1">
                  Meet {athlete.name}
                </h2>
                <p className="font-medium mb-3">{athlete.subtitle}</p>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {athlete.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-3 mb-8">
                  <button
                    onClick={() => {
                      onClose();
                      navigate("/cart");
                    }}
                    className="px-5 py-2.5 border border-primary text-primary rounded-md hover:bg-primary/5"
                  >
                    View suit
                  </button>

                  <button className="px-5 py-2.5 border rounded-md flex items-center gap-2 hover:border-primary hover:text-primary">
                    <Heart className="w-4 h-4" />
                    Wishlist suit
                  </button>
                </div>

                {/* Review */}
                <div className="bg-pink-light/40 rounded-xl p-4 mt-auto">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs uppercase tracking-wide text-muted-foreground">
                        Review
                      </span>
                      <div className="flex">{renderStars(athlete.rating)}</div>
                    </div>
                    <span className="text-3xl font-serif text-primary/30">
                      99
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {athlete.review}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AthleteModal;
