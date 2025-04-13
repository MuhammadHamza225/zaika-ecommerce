import React from 'react'

const Card = ({image, date, category, title, description}) => {
  return (
    <div className='bg-white shadow-lg relative mb-50 py-8'>
      <img src={image} alt="" className='w-[32rem] h-80 object-cover' />
      <div className='bg-gray-100 p-8 absolute left-6 right-6 -bottom-60 h-72'>
        <div className='text-sm text-gray-500 mb-2'>
        {date} &nbsp;&nbsp;&nbsp; 🏷️ {category}
        </div>
        <h3 className='text-xl font-semibold text-gray-800 mb-2'>{title}</h3>
        <p className='text-gray-600 mb-4'>{description}</p>
        <span className='text-pink-500 font-semibold border-b border-pink-500 cursor-pointer'>READ MORE</span>
      </div>
      
    </div>
  )
}

export default Card
