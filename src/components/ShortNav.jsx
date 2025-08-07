import React from 'react'
import { IoMdHome } from "react-icons/io";

const ShortNav = () => {
  return (
    <div>
         <ul>
        <li className='min-h-12 bg-gray-300 flex px-3 items-center rounded-xl'>
          <IoMdHome className='mr-6' size={24} />
        </li>
        <li className='min-h-12 flex px-3 items-center rounded-xl'>
          <IoMdHome className='mr-6' size={24} />
        </li>
        <li className='min-h-12 flex px-3 items-center rounded-xl'>
          <IoMdHome className='mr-6' size={24} />
        </li>
      </ul>
    </div>
  )
}

export default ShortNav