import React from 'react'
import { IoMdHome } from "react-icons/io";
import { useSelector } from 'react-redux';
import ShortNav from './shortNav';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../redux/appSlice';
import { useRef } from 'react';
import { useEffect } from 'react';

const SideBar = () => {
  const dispatch = useDispatch()
  const isMenuOpen = useSelector(state => state.app.isMenuOpen);
  const triggered = useSelector(state => state.app.trigger);
  console.log(triggered);
  const containerRef = useRef();


  const handleClick = () => {
    
    dispatch(toggleMenu())
  }
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (containerRef.current && !containerRef.current.contains(event.target)) {
  //       dispatch(toggleMenu()); // Close sidebar
  //     }
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, [dispatch]);

  if (!isMenuOpen) return <ShortNav />;


  return (
    <div  ref={containerRef}
      className={`w-60 p-3 shrink-0 bg-white shadow-lg z-[99] overflow-y-auto h-screen
        ${triggered ? 'fixed top-0 left-0' : 'relative'}`}
    >
     {
      triggered &&(
        <div className='flex items-center col-span-1 px-4 h-14'>
        <button className='cursor-pointer' onClick={handleClick}>
          <GiHamburgerMenu size={24} />
        </button>
        <img className='h-full' src="https://www.creads.com/wp-content/uploads/2021/05/youtube.jpg" alt="" />
      </div>
      )
     } 

      <ul>
        <Link to={'/'}>
          <li className='min-h-12 bg-gray-300 flex px-3 items-center rounded-xl'>
            <IoMdHome className='mr-6' size={24} />
            <span>Home</span>
          </li>
        </Link>
        <li className='min-h-12 flex px-3 items-center rounded-xl'>
          <IoMdHome className='mr-6' size={24} />
          <span>Shorts</span>
        </li>
        <li className='min-h-12 flex px-3 items-center rounded-xl'>
          <IoMdHome className='mr-6' size={24} />
          <span>Subscription</span>
        </li>
      </ul>
      <hr />
      {/* <h6 className='min-h-12 flex px-3 font-medium items-center rounded-xl text-2xl'>You</h6> */}
      {/* <ul>
        {[...Array(5)].map((_, i) => (
          <li key={i} className='min-h-12 flex px-3 items-center rounded-xl'>
            <IoMdHome className='mr-6' size={24} />
            <span>History</span>
          </li>
        ))}
      </ul> */}
    </div>
  )
}

export default SideBar
