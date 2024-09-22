
import { cn } from "@/lib/utils";

interface BackgroundGradientProps extends React.HTMLAttributes<HTMLDivElement> {
   children: React.ReactNode;
   className?: string;
   intensity?: 'light' | 'medium' | 'strong';
}

const BackgroundGradient: React.FC<BackgroundGradientProps> = ({
   children,
   className,
   intensity = 'medium',
   ...props
}) => {
   const gradientClasses = {
      light: 'bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800',
      medium: 'bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700',
      strong: 'bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-600',
   };

   return (
      <div
         className={cn(
            gradientClasses[intensity],
            'min-h-screen w-full',
            className
         )}
         {...props}
      >
         {children}
      </div>
   );
};

export default BackgroundGradient;
