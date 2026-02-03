import { Play } from "lucide-react";
import videoThumb1 from "@/assets/video-thumb-1.jpg";
import videoThumb2 from "@/assets/video-thumb-2.jpg";
import videoThumb3 from "@/assets/video-thumb-3.jpg";
import videoThumb4 from "@/assets/video-thumb-4.jpg";

const videos = [
  { src: videoThumb1, alt: "Competition video 1" },
  { src: videoThumb2, alt: "Unboxing video" },
  { src: videoThumb3, alt: "Athlete story" },
  { src: videoThumb4, alt: "Backstage moment" },
];

const VideoGallery = () => {
  return (
    <section className="container-main py-16">
      <div className="grid grid-cols-4 gap-5">
        {videos.map((video, index) => (
          <div
            key={index}
            className="video-card aspect-[3/4] relative group cursor-pointer"
          >
            <img
              src={video.src}
              alt={video.alt}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Play className="w-6 h-6 text-white fill-white ml-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoGallery;
