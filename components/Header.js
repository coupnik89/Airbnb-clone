import Image from 'next/image'
import React, { useState } from 'react'

import { useRouter } from 'next/router'

import moment from 'moment'

import Link from 'next/link'

import { DateRangePicker  } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { 
    SearchIcon, 
    MenuIcon, 
    UserCircleIcon, 
    UsersIcon, 
    GlobeAltIcon
} from '@heroicons/react/solid'

const Header = () => {
    const [search, setsearch] = useState('');
    const [startDate, setstartDate] = useState(new Date());
    const [endDate, setendDate] = useState(new Date());
    const [numGuests, setnumGuests] = useState(1);

    const router = useRouter()

    const handleSelect = (ranges) => {
        setstartDate(ranges.selection.startDate)
        setendDate(ranges.selection.endDate)
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }

    const handleReset = () => {
        setsearch('')
    }

    const handleSearch = () => {
        router.push({
            pathname: '/search',
            query: {
                location: search,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                numGuests
            }
        })
        handleReset()
    }

  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 
        bg-white shadow-md p-5 md:px-10'>
        <div className='relative flex items-center h-10 cursor-pointer my-auto'>
            <Link href='/' passHref>
                <a>
                    <Image 
                        src='https://links.papareact.com/qd3' 
                        alt=''
                        layout='fill'
                        objectFit='contain'
                        objectPosition='left'
                    />
                </a>
            </Link>
        </div>

        <div className='flex items-center md:border-2 md:shadow-sm rounded-full py-2'>
            <input className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400' 
            type="text" 
            placeholder='Start your search'
            value={search}
            onChange={(e) => {
                setsearch(e.target.value)
                console.log(search)
            }}
            />
            <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
        </div>

        <div className='flex items-center justify-end space-x-4 text-gray-500'>
            <p className='hidden md:inline cursor-pointer'>Become a host</p>
            <GlobeAltIcon className='hidden sm:inline-flex h-6 cursor-pointer'/>

            <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
                <MenuIcon className='h-6' />
                <UserCircleIcon className='h-6' />
            </div>
        </div>

        {search && (
            <div className='flex flex-col col-span-3 mx-auto'>
                <DateRangePicker 
                    ranges={[selectionRange]}
                    minDate={new Date()}
                    rangeColors={['salmon']}
                    onChange={handleSelect}
                />
                <div className='flex items-center border-b mb-4'>
                    <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>

                    <UsersIcon className='h-5' />
                    <input 
                        type="number" 
                        className='w-12 pl-2 text-lg text-red-500'
                        value={numGuests}
                        min={1}
                        onChange={(e) => setnumGuests(e.target.value)}
                        />
                </div>
                <div className='flex'>
                    <button onClick={handleReset} className='flex-grow text-gray-400'>Cancel</button>
                    <button className='flex-grow text-red-400'
                        onClick={handleSearch}>Search</button>
                </div>
            </div>
        )}
    </header>
  )
}

export default Header