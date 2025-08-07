import React, { useEffect, useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../redux/appSlice';
import useSearch from '../utils/useSearch';


const Head = () => {
  
  const { search,querysearch, setSearch,handleSubmit,show } = useSearch();
  
  const dispatch=useDispatch()
  
  const handleClick = () => {
    dispatch(toggleMenu())
  }


  return (
    <div className='grid grid-flow-col items-center relative  '>

      <div className='flex items-center col-span-1 px-4 h-14'>
        <button className='cursor-pointer' onClick={handleClick}>
          <GiHamburgerMenu size={24} />
        </button>
        <img className='h-full' src="https://www.creads.com/wp-content/uploads/2021/05/youtube.jpg" alt="" />
      </div>

      <div className='col-span-10 flex justify-center border-1px border-solid'>
        <input value={search} onChange={(e) => setSearch(e.target.value)}

        type="text" className='border-1 p-2 border-gray-300  rounded-l-3xl w-1/2 ' placeholder='Search' />
        <button onClick={()=>handleSubmit()} className='w-14 rounded-r-3xl border-gray-300 border-1 '><CiSearch size={24} className='m-auto' /></button>
      </div>
      {
        show &&(
          <ul className="absolute top-full left-1/2 -translate-x-1/2  w-[450px] bg-white border border-gray-300 rounded-lg shadow-lg z-50">
          {querysearch?.map((suggestion, idx) => (
            <li onClick={() =>{
              console.log("suggestion",suggestion);
              setSearch(suggestion)
              handleSubmit()
            }
            } key={idx} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              {suggestion}
            </li>
          ))}
        </ul>
        )
      }
     
      <div className='col-span-3  '>
        <FaUserCircle size={24} className='' />
      </div>
    </div>

  )
}

export default Head