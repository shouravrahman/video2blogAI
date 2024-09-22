

interface SectionProps {
   id?: string;
   className?: string;
   children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className, children }) => {
   return (
      <section
         id={id}
         className={`w-full py-12 md:py-24 lg:py-32 ${className}`}
      >
         <div className="container px-4 md:px-6">{children}</div>
      </section>
   );
};

export default Section;
