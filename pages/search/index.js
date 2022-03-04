import React from 'react'
import { useRouter } from 'next/router'
import moment from 'moment'

import Button from '../../components/Button'
import axios from 'axios'
import InfoCard from '../../components/InfoCard'

function Search({searchResults}) {
    const router = useRouter() 

    const { location, startDate, endDate, numGuests} = router.query

    console.log(moment(startDate).format('MMM D, YYYY'));
    

    const formatedStartDate = moment(startDate).format('MMM D, YYYY')
    const formatedEndDate = moment(endDate).format('MMM D, YYYY')

    const range = `From ${formatedStartDate} to ${formatedEndDate}`

    

  return (
    <div>
        <main className='flex'>
            <section className='flex-grow pt-14 px-6 mb-10'>
                <p className='text-xs'>300+ Stays - {range} - For {numGuests} guest(s)</p>

                <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>

                {/* <div className='hidden lg:inline-flex'> */}
                <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                    {/* <p className='button'>Cancellation Flexibility</p>
                    <p className='button'>Cancellation Flexibility</p>
                    <p className='button'>Cancellation Flexibility</p>
                    <p className='button'>Cancellation Flexibility</p> */}
                    <Button title='Cancellation Flexibility' />
                    <Button title='Type of Place' />
                    <Button title='Price' />
                    <Button title='More Filters' />
                </div>

                <div className='flex flex-col'>
                    {searchResults.map(search => (
                    <InfoCard 
                        key={search.img} 
                        img={search.img}
                        location={search.location}
                        description={search.description} 
                        title={search.title}
                        price={search.price}
                        total={search.total}
                        star={search.star}/>
                    ))}
                </div>
            </section>
        </main>
    </div>
  )
}

export default Search

export async function getStaticProps() {
    try {
        const {data} = await axios('https://jsonkeeper.com/b/5NPS')

        return {
            props: {
                searchResults: data
            }
    }
    } catch (error) {
        console.log(error)
    }    
}
