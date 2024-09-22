
import BackgroundGradient from '@/components/common/BackgroundGradient'
import { SignIn } from '@clerk/nextjs'

export default function SingInPage() {
   return <BackgroundGradient className='flex items-center h-screen justify-center' intensity='strong'><SignIn /></BackgroundGradient>
}
