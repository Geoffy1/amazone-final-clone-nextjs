import Header from '@/components/Header'
import { CheckCircleIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router';
import React from 'react'

const success = () => {
    const router = useRouter();
  return (
    <div className='bg-gray-100 h-screen'>
        <Header />

        <main className='max-w-screen-lg mx-auto'>
            <div className='flex flex-col p-10 bg-white'>
                <div className='flex items-center space-x-2 mb-5'>
                    <CheckCircleIcon className='text-green-500 h-10' />
                    <h1 className='text-3xl'>
                        Thank you! for the order!
                    </h1>
                </div>
                <p>
                    Thank you! for the order!Once shipped we will alert you, if you would like to check the status please press the link below.
                </p>
                <button onClick={() => router.push("/orders")}
                 className='button mt-8'>
                    Go to my orders
                </button>
            </div>
        </main>
      
    </div>
  )
}

export default success
