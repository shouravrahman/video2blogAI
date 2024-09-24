
import Section from './Section';

interface FAQItemProps {
   question: string;
   answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => (
   <details className="p-6 bg-background rounded-lg shadow-lg">
      <summary className="text-lg font-semibold cursor-pointer">{question}</summary>
      <p className="mt-2 text-gray-300">{answer}</p>
   </details>
);

const FAQ: React.FC = () => {
   const faqs = [
      {
         question: "How accurate is the AI transcription?",
         answer: "Our AI transcription service boasts an accuracy rate of over 95% for clear audio. However, factors like background noise or strong accents may affect accuracy."
      },
      {
         question: "Can I edit the generated blog posts?",
         answer: "While our AI creates high-quality content, you have full control to edit, refine, or expand the generated blog posts to match your specific needs and style."
      },
      {
         question: "What file formats are supported for video upload?",
         answer: "We support most common video formats including MP4, AVI, MOV, and WMV. For the best results, we recommend using MP4 files."
      },
      {
         question: "How does the SEO optimization work?",
         answer: "Our AI analyzes your video content and generates blog posts with optimized headlines, meta descriptions, and keyword placement. It also suggests internal and external linking opportunities to boost your SEO performance."
      }
   ];

   return (
      <Section id="faq" >
         <h2>Frequently Asked Questions</h2>
         <div className="space-y-4 flex flex-col items-start">
            {faqs.map((faq, index) => (
               <FAQItem key={index} {...faq} />
            ))}
         </div>
      </Section>
   );
};

export default FAQ;
