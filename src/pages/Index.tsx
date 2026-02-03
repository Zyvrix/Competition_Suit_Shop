import Header from "@/components/Header";
import HeroGallery from "@/components/HeroGallery";
import GlimpseSection from "@/components/GlimpseSection";
import MediaGallery from "@/components/MediaGallery";
import SpotlightSection from "@/components/SpotlightSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background">
      
      <Header />

      <main className="w-full">
        <HeroGallery />
         <div className="container-main">
        <GlimpseSection />
        <MediaGallery />
        <SpotlightSection />
        <CTABanner />
        </div>
      </main>

      <Footer />
    </div>
  );
};


export default Index;
