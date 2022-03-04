import React from 'react'

export default function Button({ title }) {
  return (
    <div className='px-4 py-2 border rounded-full cursor-pointer 
    hover:shadow-lg hover:-translate-y-1 active:translate-y-0 active:scale-95 active:shadow-sm transition transform 
    duration-200 ease-out'>
        {title}
    </div>
  )
}
