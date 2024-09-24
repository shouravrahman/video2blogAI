import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Section from './Section';

const Newsletter: React.FC = () => {
   return (
      <Section className="bg-background py-12">
         <div className="text-center max-w-lg mx-auto">
            {/* Title */}
            <h2 className=" mb-4">
               Stay Updated
            </h2>

            {/* Subtext */}
            <p className="text-lg text-gray-300 mb-8">
               Join our mailing list and never miss out on the latest news, updates, and exclusive offers!
            </p>

            {/* Form */}
            <div className="max-w-md mx-auto">
               <form className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <Input
                     className="flex-1 w-full px-4 py-2 border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                     placeholder="Enter your email"
                     type="email"
                  />
                  <Button type="submit" className="w-full sm:w-auto px-6 py-2">
                     Subscribe
                  </Button>
               </form>

               {/* Disclaimer */}
               <p className="text-xs text-gray-500 mt-4">
                  By subscribing, you agree to receive marketing emails from us. You can unsubscribe anytime.
               </p>
            </div>
         </div>
      </Section>
   );
};

export default Newsletter;
