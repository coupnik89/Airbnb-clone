import Image from 'next/image'
import React from 'react'

import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'

export default function InfoCard({ img, star, location, title, description, start, price, total }) {
  return (
    <div className='flex py-7 px-2 border-b cursor-pointer 
    hover:shadow-lg hover:border-b-0 hover:opacity-80 pr-4 transition 
    duration-200 ease-out first:border-t'>
        <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
            <Image 
                className='rounded-2xl' 
                src={img} 
                layout='fill' 
                objectFit='cover' 
                alt='' />
        </div>

        <div className='flex flex-col flex-grow pl-5'>
            <div className='flex'>
                <p className='mr-auto'>{location}</p>
                <HeartIcon className='h-7 cursor-pointer text-red-500'/>
            </div>

            <h4 className='text-xl'>{title}</h4>
            <div className='border-b-2 border-red-400 w-10 pt-2'></div>
            <p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>

            <div className='flex justify-between pt-5'>
                <p className='flex items-center'>
                    <StarIcon className='h-5 text-red-500' />
                    {star}
                </p>

                <div>
                    <p className='text-lg font-semibold pb-2 text-gray-600 lg:text-2xl'>{price}</p>
                    <p className='text-right font-extralight'>{total}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
