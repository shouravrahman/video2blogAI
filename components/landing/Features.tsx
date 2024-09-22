
import { Zap, Globe, Users, Clock, BarChart, Shield } from 'lucide-react';
import Section from './Section';

interface FeatureProps {
   icon: React.ReactNode;
   title: string;
   description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
   <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl">
      {icon}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-zinc-500 dark:text-zinc-400">{description}</p>
   </div>
);

const Features: React.FC = () => {
   const features = [
      { icon: <Zap className="h-12 w-12 mb-4 text-yellow-500" />, title: 'AI-Powered Transcription', description: 'Cutting-edge AI technology ensures accurate transcription of your video content' },
      { icon: <Globe className="h-12 w-12 mb-4 text-green-500" />, title: 'SEO-Optimized Content', description: 'AI-generated blog posts crafted for maximum search engine visibility and ranking' },
      { icon: <Users className="h-12 w-12 mb-4 text-blue-500" />, title: 'User-Friendly Interface', description: 'Intuitive platform designed for effortless content creation and management' },
      { icon: <Clock className="h-12 w-12 mb-4 text-purple-500" />, title: 'Time-Saving Automation', description: 'Reduce content creation time by up to 90% with our automated blog generation' },
      {
         icon: <BarChart className="h-12 w-12 mb-4 text-red-500" />, title: 'Analytics Integration', description: 'Track your blogs performance with built -in analytics and insights'
      },
      { icon: <Shield className="h-12 w-12 mb-4 text-indigo-500" />, title: 'Content Originality', description: 'AI ensures unique, plagiarism-free content for every generated blog post' },
   ];

   return (
      <Section id="features" className="bg-background">
         <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            Powerful Features
         </h2>
         <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            {features.map((feature, index) => (
               <Feature key={index} {...feature} />
            ))}
         </div>
      </Section>
   );
};

export default Features;
