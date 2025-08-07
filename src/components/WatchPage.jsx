import React, { useEffect,useState } from 'react'
import { closeMenu } from '../redux/appSlice'
import { useDispatch } from 'react-redux'
import { useSearchParams } from "react-router";
import { handleSidebar } from '../redux/appSlice';
import { useSelector } from 'react-redux';
import CommentsContainer from './CommentsContainer';
import ChatMessage from './ChatMessage';
import { addMessage } from '../redux/chatSlice';
import { generateText, generateName } from '../helpers/data';

const WatchPage = () => {
  const [addComent,setAddComment]=useState("")
  const [searchParams, setSearchParams] = useSearchParams();
  const select = useSelector(state => state.app.isMenuOpen)
  const chatMessage = useSelector(state => state.chat.message)
  const id = searchParams.get("v") || ""
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(closeMenu())
    dispatch(handleSidebar())

    setInterval(() => {
      dispatch(addMessage({
        name: generateName(),
        message: generateText(10)
      }))
    }, 1500)




    return () => {
      // Restore to previous value
      dispatch(handleSidebar());
      dispatch(addMessage())
    };
  }, [])


  return (

    <div className={`flex relative z-10 w-full min-h-screen ${select ? "bg-[#606060] opacity-200" : ""}`}>


      <div className='pt-6 pr-6 ml-6 flex-1 flex flex-col' >
        <iframe className='rounded-md' width="900" height="390" src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <CommentsContainer />
      </div>

      <div className='pt-6 flex-1'>

        <div className=" max-h-[80vh]  max-w-[480px]  flex flex-col py-6 pr-6 border border-gray-300 border-solid">
          <span className="px-6 font-semibold">Top Chat</span>

          {/* Message Scroll Area */}
          <div className="overflow-y-auto flex flex-col-reverse ">
            {chatMessage.map((item, i) => (
              <ChatMessage key={i} name={item.name} msg={item.message} />
            ))}
          </div>

          {/* Input Box */}
          <div className="flex items-center mt-2 px-4">
            <input
              onChange={(e)=>setAddComment(e.target.value)}
              value={addComent}
              type="text"
              className="w-9/12 bg-gray-100 p-1"
              placeholder="Type a message..."
            />
            <button onClick={()=>{
              dispatch(addMessage({
                name:"Amal",
                message:addComent
              }))
            }} className="bg-green-300 p-2 rounded-xl ml-2">Submit</button>
          </div>
        </div>
      </div>



      <div>
        <input type="text" />
      </div>
    </div>
  )
}

export default WatchPage