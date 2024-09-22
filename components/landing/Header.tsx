
import Link from 'next/link';
import { MountainIcon } from 'lucide-react';

const Header: React.FC = () => {
   return (
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-zinc-200 dark:border-zinc-800">
         <Link href="#" className="flex items-center">
            <MountainIcon className="h-6 w-6" />
            <span className="ml-2 text-lg font-bold">Video2Blog AI</span>
         </Link>
         <nav className="ml-auto flex gap-4 sm:gap-6">
            {['Features', 'Pricing', 'FAQ'].map((item) => (
               <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium hover:underline underline-offset-4"
               >
                  {item}
               </Link>
            ))}
         </nav>
      </header>
   );
};

export default Header;
