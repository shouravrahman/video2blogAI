import Link from "next/link";

interface CTAButtonProps {
   text: string;
   onClick?: () => void;
   href?: string
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, onClick, href }) => {
   return (
      <button
         className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-100 text-gray-800 font-semibold py-3 px-8 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-gray-300 active:scale-95"
         onClick={onClick}
      >
         {href ? <Link href={href}>{text}</Link> : <span> {text}</span>}

      </button>
   );
};

export default CTAButton;
