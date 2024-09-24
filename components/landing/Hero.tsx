import CTAButton from "../common/CtaButton";

const Hero: React.FC = () => {
   return (
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 ">
         <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center text-center space-y-6">
               {/* Main Heading */}
               <h1 className=" tracking-tighter">
                  Turn Videos into Engaging Blog Posts with AI
               </h1>

               {/* Subtitle */}
               <p className="text-lg md:text-xl lg:text-2xl max-w-2xl text-gray-400 leading-relaxed">
                  Our AI-powered tool transforms your video content into SEO-optimized blog posts, saving you time and boosting engagement.
               </p>

               {/* CTA Button */}
               <div className="mt-6">
                  <CTAButton text="Try for free" href="/dashboard" />
               </div>
            </div>
         </div>
      </section>
   );
};

export default Hero;
