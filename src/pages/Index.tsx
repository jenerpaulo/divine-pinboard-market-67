
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PinterestGrid from "@/components/PinterestGrid";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <Hero />
      <PinterestGrid />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
