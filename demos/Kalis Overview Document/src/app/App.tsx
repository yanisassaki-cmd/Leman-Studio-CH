import { AnnouncementBar } from "./components/AnnouncementBar";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { ProductGrid } from "./components/ProductGrid";
import { KalisBoxFeature } from "./components/KalisBoxFeature";
import { BrandValues } from "./components/BrandValues";
import { AboutSection } from "./components/AboutSection";
import { EventsScroll } from "./components/EventsScroll";
import { Testimonials } from "./components/Testimonials";
import { InstagramGrid } from "./components/InstagramGrid";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Navigation />
      <Hero />
      <Marquee />
      <ProductGrid />
      <KalisBoxFeature />
      <BrandValues />
      <AboutSection />
      <EventsScroll />
      <Testimonials />
      <InstagramGrid />
      <Footer />
    </div>
  );
}
