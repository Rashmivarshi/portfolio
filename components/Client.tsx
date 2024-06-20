import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteCards'
import { companies, testimonials } from '@/data'

const Client = () => {
  return (
    <div className="py-20" id="testimonials">
        <h1 className="heading">
        Kind words from {' '}
            <span className='text-purple'>satisfied clients</span>
        </h1>
        <div className='flex flex-col items-center justify-center mt-20'>
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed='slow'
            />
            {/* <div>
                {companies.map((item)=>(
                    <div>
                        <img 
                        src={item.img}
                        alt=''
                        />
                    </div>
                ))}
            </div> */}
        </div>
    </div>
    )
}

export default Client