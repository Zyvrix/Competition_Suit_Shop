import { useState, useRef } from "react";
import { Play } from "lucide-react";
import AthleteModal, { Athlete } from "./AthleteModal";
import CustomCursor from "./CustomCursor";

// Import grid images
import grid1 from "@/assets/grid-1.png";
import grid2 from "@/assets/grid-2.png";
import grid3 from "@/assets/grid-3.png";
import grid4 from "@/assets/grid-4.png";
import grid5 from "@/assets/grid-5.png";
import grid6 from "@/assets/grid-6.png";
import grid7 from "@/assets/grid-7.png";
import grid8 from "@/assets/grid-8.png";
import grid9 from "@/assets/grid-9.png";
import grid10 from "@/assets/grid-10.png";
import grid11 from "@/assets/grid-11.png";
import grid12 from "@/assets/grid-12.png";
import grid13 from "@/assets/grid-13.png";
import grid14 from "@/assets/grid-14.png";
import grid15 from "@/assets/grid-15.png";
import grid16 from "@/assets/grid-16.png";

// Athlete data with multiple media per athlete
const athletes: Athlete[] = [
  { 
    id: 1, 
    name: "Summer Shredding", 
    subtitle: "Stage Performance", 
    description: "Placement text, to place everywhere. Please change it later according to the context it is kept around.", 
    media: [
      { src: grid1, type: "video" },
    ],
    rating: 5, 
    review: "Good words about the company and assisting them to achieve whatever." 
  },
  { 
    id: 2, 
    name: "Unboxing Video", 
    subtitle: "Package Arrival", 
    description: "Placement text, to place everywhere. Please change it later according to the context it is kept around.", 
    media: [
      { src: grid2, type: "video" },
    ],
    rating: 5, 
    review: "Good words about the company and assisting them to achieve whatever." 
  },
  { 
    id: 3, 
    name: "Competition Suit Shop", 
    subtitle: "Testimonial", 
    description: "Placement text, to place everywhere. Please change it later according to the context it is kept around.", 
    media: [
      { src: grid3, type: "video" },
    ],
    rating: 5, 
    review: "Good words about the company and assisting them to achieve whatever." 
  },
  { 
    id: 4, 
    name: "Backstage Moment", 
    subtitle: "Competition Day", 
    description: "Placement text, to place everywhere. Please change it later according to the context it is kept around.", 
    media: [
      { src: grid4, type: "video" },
    ],
    rating: 5, 
    review: "Good words about the company and assisting them to achieve whatever." 
  },
  { 
    id: 5, 
    name: "The Guam Daily Post", 
    subtitle: "Press Feature", 
    description: "Placement text, to place everywhere. Please change it later according to the context it is kept around.", 
    media: [
      { src: grid5, type: "image" },
    ],
    rating: 5, 
    review: "Good words about the company and assisting them to achieve whatever." 
  },
  { 
    id: 6, 
    name: "Stage Moment", 
    subtitle: "Competition", 
    description: "Placement text, to place everywhere. Please change it later according to the context it is kept around.", 
    media: [
      { src: grid6, type: "video" },
    ],
    rating: 5, 
    review: "Good words about the company and assisting them to achieve whatever." 
  },
  { 
    id: 7, 
    name: "Double Gold", 
    subtitle: "Champion 2024", 
    description: "Placement text, to place everywhere. Please change it later according to the context it is kept around.", 
    media: [
      { src: grid7, type: "image" },
    ],
    rating: 5, 
    review: "Good words about the company and assisting them to achieve whatever." 
  },
  { 
    id: 8, 
    name: "Competition Prep", 
    subtitle: "Backstage", 
    description: "Placement text, to place everywhere. Please change it later according to the context it is kept around.", 
    media: [
      { src: grid8, type: "video" },
    ],
    rating: 5, 
    review: "Good words about the company and assisting them to achieve whatever." 
  },
  { 
    id: 9, 
    name: "Customer Review", 
    subtitle: "Testimonial", 
    description: "Placement text, to place everywhere. Please change it later according to the context it is kept around.", 
    media: [
      { src: grid9, type: "image" },
    ],
    rating: 5, 
    review: "Good words about the company and assisting them to achieve whatever." 
  },
  { 
    id: 10, 
    name: "Purple Suit Athlete", 
    subtitle: "Competition Ready", 
    description: "Placement text, to place everywhere. Please change it later according to the context it is kept around.", 
    media: [
      { src: grid16, type: "image" },
    ],
    rating: 5, 
    review: "Good words about the company and assisting them to achieve whatever." 
  },
  { 
    id: 11, 
    name: "Stage Performance", 
    subtitle: "Summer Shredding", 
    description: "Placement text, to place everywhere. Please change it later according to the context it is kept around.", 
    media: [
      { src: grid15, type: "image" },
    ],
    rating: 5, 
    review: "Good words about the company and assisting them to achieve whatever." 
  },
  { 
    id: 12, 
    name: "Red Suit Champion", 
    subtitle: "Ultimate Physique", 
    description: "Placement text, to place everywhere. Please change it later according to the context it is kept around.", 
    media: [
      { src: grid14, type: "image" },
    ],
    rating: 5, 
    review: "Good words about the company and assisting them to achieve whatever." 
  },
  { 
    id: 13, 
    name: "Trophy Collection", 
    subtitle: "Winner", 
    description: "Placement text, to place everywhere. Please change it later according to the context it is kept around.", 
    media: [
      { src: grid13, type: "video" },
    ],
    rating: 5, 
    review: "Good words about the company and assisting them to achieve whatever." 
  },
  { 
    id: 14, 
    name: "Behind the Scenes", 
    subtitle: "Prep Day", 
    description: "Placement text, to place everywhere. Please change it later according to the context it is kept around.", 
    media: [
      { src: grid12, type: "video" },
    ],
    rating: 5, 
    review: "Good words about the company and assisting them to achieve whatever." 
  },
  { 
    id: 15, 
    name: "Multi Angle", 
    subtitle: "Photo Shoot", 
    description: "Placement text, to place everywhere. Please change it later according to the context it is kept around.", 
    media: [
      { src: grid11, type: "video" },
    ],
    rating: 5, 
    review: "Good words about the company and assisting them to achieve whatever." 
  },
  { 
    id: 16, 
    name: "Collage Feature", 
    subtitle: "Gallery View", 
    description: "Placement text, to place everywhere. Please change it later according to the context it is kept around.", 
    media: [
      { src: grid10, type: "image" },
    ],
    rating: 5, 
    review: "Good words about the company and assisting them to achieve whatever." 
  },
  { 
    id: 17, 
    name: "Michelle Robinson", 
    subtitle: "Newcomer", 
    description: "Placement text, to place everywhere. Please change it later according to the context it is kept around.", 
    media: [
      { src: grid13, type: "video" },
    ],
    rating: 5, 
    review: "Good words about the company and assisting them to achieve whatever." 
  },
  { 
    id: 18, 
    name: "Jennifer Walker", 
    subtitle: "Amateur", 
    description: "Placement text, to place everywhere. Please change it later according to the context it is kept around.", 
    media: [
      { src: grid11, type: "video" },
    ],
    rating: 5, 
    review: "Good words about the company and assisting them to achieve whatever." 
  },
  { 
    id: 19, 
    name: "Elizabeth Hall", 
    subtitle: "Mentor", 
    description: "Placement text, to place everywhere. Please change it later according to the context it is kept around.", 
    media: [
      { src: grid12, type: "video" },
    ],
    rating: 5, 
    review: "Good words about the company and assisting them to achieve whatever." 
  },
  { 
    id: 20, 
    name: "Heather Young", 
    subtitle: "Champion", 
    description: "Placement text, to place everywhere. Please change it later according to the context it is kept around.", 
    media: [
      { src: grid10, type: "image" },
    ],
    rating: 5, 
    review: "Good words about the company and assisting them to achieve whatever." 
  },
];

// Grid layout matching original structure - 4 columns per row
const rows = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
];

const MediaGallery = () => {
  const [selectedAthlete, setSelectedAthlete] = useState<Athlete | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  const handleCardClick = (athleteIndex: number) => {
    setSelectedAthlete(athletes[athleteIndex]);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedAthlete(null);
  };

  // Responsive grid: 2 cols mobile, 3 cols tablet, 5 cols desktop
  const mobileRows = [
    [0, 1],
    [2, 3],
    [4, 5],
    [6, 7],
  ];

  const tabletRows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [9, 10, 11],
  ];

  return (
    <section className="w-full py-6 sm:py-8">
      
      <div ref={gridRef} className="space-y-2 sm:space-y-3 md:space-y-4 relative">
        {/* Custom cursor for desktop only */}
        <CustomCursor containerRef={gridRef} />
        
        {/* Desktop: 4 columns */}
        <div className="hidden lg:block space-y-4">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-4 gap-8">
              {row.map((athleteIndex, colIndex) => {
                const athlete = athletes[athleteIndex];
                const isLastItem = rowIndex === 3 && colIndex === 3;
                const firstMedia = athlete.media[0];
                
                return (
                  <div
                    key={colIndex}
                    onClick={() => handleCardClick(athleteIndex)}
                    className="media-card aspect-[3/4] relative group cursor-pointer bg-muted rounded-xl overflow-hidden"
                  >
                    <img src={firstMedia.src} alt={athlete.name} className="w-full h-full object-cover" />
                    
                    {firstMedia.type === "video" && (
                      <>
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md">
                            <Play className="w-5 h-5 text-foreground fill-foreground ml-0.5" />
                          </div>
                        </div>  
                      </>
                    )}

                    {isLastItem && (
                      <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                        +1
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Tablet: 3 columns */}
        <div className="hidden sm:block lg:hidden space-y-3">
          {tabletRows.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-3 gap-3">
              {row.map((athleteIndex, colIndex) => {
                const athlete = athletes[athleteIndex];
                const firstMedia = athlete.media[0];
                
                return (
                  <div
                    key={colIndex}
                    onClick={() => handleCardClick(athleteIndex)}
                    className="media-card aspect-[3/4] relative group cursor-pointer bg-muted rounded-xl overflow-hidden"
                  >
                    <img src={firstMedia.src} alt={athlete.name} className="w-full h-full object-cover" />
                    
                    {firstMedia.type === "video" && (
                      <>
                        <div className="absolute inset-0 bg-black/10" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md">
                            <Play className="w-4 h-4 text-foreground fill-foreground ml-0.5" />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Mobile: 2 columns */}
        <div className="sm:hidden space-y-2">
          {mobileRows.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-2 gap-2">
              {row.map((athleteIndex, colIndex) => {
                const athlete = athletes[athleteIndex];
                const firstMedia = athlete.media[0];
                
                return (
                  <div
                    key={colIndex}
                    onClick={() => handleCardClick(athleteIndex)}
                    className="media-card aspect-[3/4] relative group cursor-pointer bg-muted rounded-xl overflow-hidden"
                  >
                    <img src={firstMedia.src} alt={athlete.name} className="w-full h-full object-cover" />
                    
                    {firstMedia.type === "video" && (
                      <>
                        <div className="absolute inset-0 bg-black/10" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md">
                            <Play className="w-3 h-3 text-foreground fill-foreground ml-0.5" />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-6 sm:mt-8">
        <button className="btn-rect text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 w-full sm:w-auto">Load more</button>
      </div>

      {/* Athlete Modal */}
      <AthleteModal
        isOpen={isModalOpen}
        onClose={handleClose}
        athlete={selectedAthlete}
        initialMediaIndex={0}
      />
    </section>
  );
};

export default MediaGallery;
