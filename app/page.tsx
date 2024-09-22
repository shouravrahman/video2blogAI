import ContactSupport from "@/components/landing/Contact";
import FAQ from "@/components/landing/Faq";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Newsletter from "@/components/landing/Newsletter";
import Pricing from "@/components/landing/Pricing";
import HowItWorks from "@/components/landing/Steps";
import Testimonials from "@/components/landing/Testimonials";

const LandingPage: React.FC = () => {
  return (
     <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Header />
        <main className="flex-1 mx-auto">
           <Hero />
           <HowItWorks />
           <Features />
           <Pricing />
           <Testimonials />
           <FAQ />
           <Newsletter />
           <ContactSupport />
      </main>
        <Footer />
    </div>
  );
};

export default LandingPage;
