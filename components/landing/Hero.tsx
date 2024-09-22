
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Hero: React.FC = () => {
   return (
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
         <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
               <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Turn Videos into Engaging Blog Posts with AI
               </h1>
               <p className="max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-400">
                  Upload a video or YouTube link, and let our AI create SEO-optimized blog content in minutes.
               </p>
               <div className="w-full max-w-sm space-y-2">
                  <form className="flex space-x-2">
                     <Input className="flex-1" placeholder="Paste YouTube URL" type="url" />
                     <Button type="submit">Convert</Button>
                  </form>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                     Or <span className="underline cursor-pointer">upload a video file</span>
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Hero;
