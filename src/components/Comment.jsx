import React from 'react'

const Comment = ({data}) => {
    const {name,text,replies} =data
  return (
    <div className='flex items-center shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
        <img className='w-9 h-9 text-center' src="https://tse1.mm.bing.net/th/id/OIP.DwCotZHIPvGg8mfzqHdwJAHaHa?pid=Api&P=0&h=180" alt="" />
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Comment