import React from 'react'
import man1 from '/images/man1.png'
import shoes from '/images/shoes.png'

const Promotion = () => {
  return (
    <div className='flex flex-col md:flex-row gap-4 px-4 py-8'>
      {/* left sec  */}

      <div className='relative flex-1'>
        <img className='w-full h-full object-cover' src={man1} alt="" />
        <div className='absolute bottom-[-44px] left-44 bg-white shadow-lg py-8 px-32'>
<h2 className='text-2xl font-semibold'>BUY3 <span className='text-red-500'>GET 5</span></h2>
<button className='ml-3 mt-3 px-4 py-2 border border-black text-sm  hover:text-red-500 transition cursor-pointer'>SHOP NOW</button>
        </div>
      </div>
      {/* right sec  */}
<div className='flex-1 relative'>
  <img className='w-full h-full object-cover' src={shoes} alt="" />
  <div className='absolute bottom-[-44px] left-44 bg-white shadow-lg py-8 px-32'>
  <h2 className='text-2xl font-semibold'>UPTO 70% OFF</h2>
  <button className='ml-7 mt-3 px-4 py-2 border border-black text-sm  hover:text-red-500 transition cursor-pointer'>SHOP NOW</button>
  </div>
</div>

    </div>

    
    
  )
}

export default Promotion
