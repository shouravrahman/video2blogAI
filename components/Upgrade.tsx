import Link from 'next/link'
import React from 'react'

const Upgrade = () => {
   return (
      <div className="bg-card rounded-lg p-4 text-center max-w-md">
         <p className="text-card-foreground">
            Upgrade your plan to unlock more features and benefits.{" "}
            <Link href="/pricing" className="text-blue-500 hover:underline">
               View Pricing
            </Link>
         </p>
      </div>
   )
}

export default Upgrade
