import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Support from "@/components/Support";
import Stats from "@/components/Stats";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Support />
      <Stats />
      <Partners />
      <Testimonials />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default Index;
