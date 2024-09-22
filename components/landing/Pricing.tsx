
import { Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Section from './Section';

interface PlanProps {
   name: string;
   price: string;
   features: string[];
   buttonText: string;
}

const Plan: React.FC<PlanProps> = ({ name, price, features, buttonText }) => (
   <div className="flex flex-col p-6 bg-background rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4">{name}</h3>
      <p className="text-4xl font-bold mb-4">{price}<span className="text-base font-normal">/month</span></p>
      <ul className="mb-6 space-y-2 flex-grow">
         {features.map((feature, index) => (
            <li key={index} className="flex items-center">
               <Check className="h-5 w-5 mr-2 text-green-500" />
               <span>{feature}</span>
            </li>
         ))}
      </ul>
      <Button className="mt-auto">{buttonText}</Button>
   </div>
);

const Pricing: React.FC = () => {
   const plans = [
      {
         name: 'Free',
         price: '$0',
         features: ['3 video conversions/month', 'Basic blog formatting'],
         buttonText: 'Get Started'
      },
      {
         name: 'Pro',
         price: '$29',
         features: ['Unlimited conversions', 'Advanced SEO optimization', 'Priority support'],
         buttonText: 'Subscribe'
      },
      {
         name: 'Enterprise',
         price: 'Custom',
         features: ['Custom integrations', 'Dedicated account manager', '24/7 premium support'],
         buttonText: 'Contact Sales'
      }
   ];

   return (
      <Section id="pricing" className="border-t border-zinc-200 dark:border-zinc-800">
         <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Pricing Plans</h2>
         <div className="grid gap-6 md:grid-cols-3 md:gap-12">
            {plans.map((plan, index) => (
               <Plan key={index} {...plan} />
            ))}
         </div>
      </Section>
   );
};

export default Pricing;
