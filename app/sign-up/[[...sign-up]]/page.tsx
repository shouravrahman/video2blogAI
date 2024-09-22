import BackgroundGradient from '@/components/common/BackgroundGradient'
import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
   return <BackgroundGradient className='flex items-center h-screen justify-center' intensity='strong'><SignUp /></BackgroundGradient>
}
