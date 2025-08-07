import React, { useEffect } from 'react'
import { closeMenu } from '../redux/appSlice'
import { useDispatch } from 'react-redux'
import { useSearchParams } from "react-router";
import { handleSidebar } from '../redux/appSlice';
import { useSelector } from 'react-redux';
const WatchPage = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const select=useSelector(state=>state.app.isMenuOpen)
    
    const id=searchParams.get("v") || ""
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(closeMenu())
        dispatch(handleSidebar())

        return () => {
            // Restore to previous value
            dispatch(handleSidebar());
          };
    },[])



  return (

    <div  className={`flex relative z-10 h-screen ${select ? "bg-[#606060] opacity-200" : ""}`}>

    <div className='pt-6 pr-6 ml-6 flex-1' >
        <iframe className='rounded-md' width="900" height="390" src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
    <div className='w-full pt-6 pr-6 '>
       <div className='w-full h-full bg-green-300'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A pariatur provident doloribus ab dolor, optio minus quo laborum suscipit tenetur saepe cumque maiores adipisci labore repudiandae dolorum facere perferendis fugiat?</p>
       </div>
    </div>

    </div>
  )
}

export default WatchPage