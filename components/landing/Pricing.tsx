
import { Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Section from './Section';
import Link from 'next/link';
import { plans } from '@/lib/constants';

interface PlanProps {
   name: string;
   price: string;
   features: string[];
   buttonText: string;
   paymentLink: string;
}

const Plan: React.FC<PlanProps> = ({ paymentLink, name, price, features, buttonText }) => (
   <Link href={paymentLink} className="border flex flex-col p-6 bg-background rounded-lg shadow-lg">
      <h3>{name}</h3>
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
   </Link>
);

const Pricing: React.FC = () => {


   return (
      <Section id="pricing">
         <h2>Pricing Plans</h2>
         <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            {plans.map((plan) => (
               <Plan key={plan.id} {...plan} />
            ))}
         </div>
      </Section>
   );
};

export default Pricing;
