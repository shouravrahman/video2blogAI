
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Section from './Section';

const Newsletter: React.FC = () => {
   return (
      <Section className="bg-background">
         <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Stay Updated</h2>
         <div className="max-w-sm mx-auto space-y-2">
            <form className="flex space-x-2">
               <Input className="flex-1" placeholder="Enter your email" type="email" />
               <Button type="submit">Subscribe</Button>
            </form>
            <p className="text-xs text-center text-zinc-500 dark:text-zinc-400">
               Subscribe to our newsletter for the latest updates and exclusive offers.
            </p>
         </div>
      </Section>
   );
};

export default Newsletter;
