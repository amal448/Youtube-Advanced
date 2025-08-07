import React from 'react'
import { useState, useEffect } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants'
import VideoCards from './VideoCards'
import { Link } from 'react-router-dom'
import { AddCard } from './VideoCards'

const VideoContainer = () => {

  const [apiData, setApiData] = useState([])
  

  useEffect(() => {
    YoutubeData()
    
  }, [])

  async function YoutubeData() {
    const data = await fetch(YOUTUBE_VIDEO_API)
    const json = await data.json()
    setApiData(json.items)
  }


  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 px-4 py-6'>
    {/* {apiData[0]?
      <AddCard api={apiData[0]} />:""
    } */}
      {
        apiData?.map((item)=>{
          return(
            <Link key={item.id} to={'/watch?v='+item.id}>
              <VideoCards  className="ml-6 mr-2 mb-8 " api={item} />
            </Link>
        )})
      }
    </div>
  )
}

export default VideoContainer