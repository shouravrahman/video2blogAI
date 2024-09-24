
import { Mail, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Section from './Section';

const ContactSupport: React.FC = () => {
   return (
      <Section className="  dark:border-zinc-800">
         <h2    >Contact Support</h2>
         <div className="max-w-md mx-auto space-y-4">
            <div className="flex items-center space-x-2">
               <Mail className="h-5 w-5 text-zinc-500" />
               <span>support@video2blog.ai</span>
            </div>
            <div className="flex items-center space-x-2">
               <Phone className="h-5 w-5 text-zinc-500" />
               <span>+1 (555) 123-4567</span>
            </div>
            <form className="space-y-4">
               <Input placeholder="Your Name" />
               <Input placeholder="Your Email" type="email" />
               <Textarea placeholder="Your Message" />
               <Button type="submit" className="w-full">Send Message</Button>
            </form>
         </div>
      </Section>
   );
};

export default ContactSupport;
