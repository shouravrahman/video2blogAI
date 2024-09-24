import { Upload, Mic, PenTool } from 'lucide-react';
import Section from './Section';

interface StepProps {
   icon: React.ReactNode;
   title: string;
   description: string;
}

const Step: React.FC<StepProps> = ({ icon, title, description }) => (
   <div className="flex flex-col items-center text-center p-6 bg-zinc-900 rounded-lg shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-xl">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
   </div>
);

const HowItWorks: React.FC = () => {
   const steps = [
      {
         icon: <Upload className="h-12 w-12 mb-4 text-blue-500" />,
         title: '1. Upload',
         description: 'Upload your video or paste a YouTube link',
      },
      {
         icon: <Mic className="h-12 w-12 mb-4 text-blue-500" />,
         title: '2. Transcribe',
         description: 'Our AI transcribes the audio with high accuracy',
      },
      {
         icon: <PenTool className="h-12 w-12 mb-4 text-blue-500" />,
         title: '3. Generate Blog',
         description: 'AI creates an SEO-optimized blog post from the transcript',
      },
   ];

   return (
      <Section id="how-it-works" className="py-12 ">
         <h2 className="">
            How It Works
         </h2>
         <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
               <Step key={index} {...step} />
            ))}
         </div>
      </Section>
   );
};

export default HowItWorks;
