
import Section from './Section';

interface TestimonialProps {
   quote: string;
   author: string;
   role: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role }) => (
   <div className="flex flex-col p-6 bg-background rounded-lg shadow-lg">
      <p className="mb-4 text-zinc-500 dark:text-zinc-400">&ldquo;{quote}&rdquo;</p>
      <p className="font-bold">{author}</p>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">{role}</p>
   </div>
);

const Testimonials: React.FC = () => {
   const testimonials = [
      {
         quote: "This tool has revolutionized our content creation process. We're producing high-quality blog posts in a fraction of the time.",
         author: "Sarah J.",
         role: "Content Manager"
      },
      {
         quote: "The AI-generated content is surprisingly good. It's like having a skilled writer on staff 24/7.",
         author: "Mike T.",
         role: "Small Business Owner"
      },
      {
         quote: "The SEO optimization is top-notch. Our blog posts are ranking higher than ever before.",
         author: "Emily R.",
         role: "Digital Marketer"
      }
   ];

   return (
      <Section className="bg-background">
         <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Users Say</h2>
         <div className="grid gap-6 md:grid-cols-3 md:gap-12">
            {testimonials.map((testimonial, index) => (
               <Testimonial key={index} {...testimonial} />
            ))}
         </div>
      </Section>
   );
};

export default Testimonials;
