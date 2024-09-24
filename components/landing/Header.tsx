
import Link from 'next/link';
import { MountainIcon } from 'lucide-react';
import {

   SignInButton,
   SignedIn,
   SignedOut,
   UserButton
} from '@clerk/nextjs'
const Header: React.FC = () => {
   return (
      <header className="container mx-auto backdrop-blur-sm mt-4 rounded-3xl px-4 lg:px-6 h-14 flex items-center border border-zinc-100/30 dark:border-zinc-800">
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

            <SignedIn>
               <UserButton />
            </SignedIn>
            <SignedOut>
               <Link href="/sign-in">Sign In</Link>
            </SignedOut>

         </nav>
      </header>
   );
};

export default Header;
