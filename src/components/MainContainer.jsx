import React, { useEffect } from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'

const MainContainer = () => {

  const select=useSelector(state=>state.app.trigger)
  console.log("select121212",select);
 
  
  return (
    <div className=' w-full'>
        <ButtonList />
        <VideoContainer />
    </div>
  )
}

export default MainContainer