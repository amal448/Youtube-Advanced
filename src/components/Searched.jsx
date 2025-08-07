import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Searched = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const result = searchParams.get("search_query" || "")
    const select = useSelector(state => state?.map?.show)
    // console.log("select", select);





    return (
        <div>
            {
                select.map((item) => {
                    console.log(item);
                    const { title, description, channelTitle } = item.snippet
                    const { videoId } = item.id
                    console.log(videoId);


                    return (
                        <Link key={item.id} to={'/watch?v=' + videoId}>
                            <div className='flex w-full gap-4 p-4'>
                                {/* Left image container */}
                                <div className='w-[500px] h-[281px] '>
                                    <iframe className='w-full h-full object-cover rounded-xl' src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>

                                {/* Right image container */}
                                <div className='flex-1 flex flex-col'>
                                    <h3 className='text-lg font-medium'>{title}</h3>
                                    <span>111M</span>
                                    <span className='py-3'>{channelTitle}</span>
                                    <span>{description}</span>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }

        </div>

    )
}

export default Searched