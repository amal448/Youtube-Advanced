import React from 'react'

const VideoCards = ({ api }) => {
    const { description, title } = api.snippet
    return (
        <>
            {
                <div className='w-full'>
                    <div className='w-full p-3'>
                        <img className='rounded-2xl w-[457px] h-[257px]' src={api.snippet.thumbnails.high.url || api.snippet.thumbnails.default.url} alt="" />
                    </div>
                    <div>
                        <div className='flex'>
                            <div className='h-9 w-9 m-3 shrink-0'>
                                <img className='h-full rounded-full' src={api.snippet.thumbnails.default.url} alt="" />
                            </div>
                            <div>
                                <h3 className='text-lg line-clamp-1'>{title}</h3>
                                {/* <span className=''>{description}</span> */}
                                <div>
                                    <span>4.9k</span>
                                    <span>3 hours</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            }
        </>

    )
}

export const AddCard = ({api}) => {
    return <div className='border-red-400 border-2'>
        <VideoCards api={api} />
    </div>
}

export default VideoCards