import React from 'react'
import Comment from './Comment'

const CommentsContainer = () => {

const commentData=[
  {
    name:"Akshay Saini",
    text:"Lorem ipsum dolor sit amet, consectetur ",
    replies:[]
  },
  {
    name:"Akshay Saini",
    text:"Lorem ipsum dolor sit amet, consectetur ",
    replies:[ 
                  {
                  name:"Akshay Saini",
                  text:"Lorem ipsum dolor sit amet, consectetur ",
                  replies:[]
                },
                {
                  name:"Akshay Saini",
                  text:"Lorem ipsum dolor sit amet, consectetur ",
                  replies:[
                    {
                      name:"Akshay Saini",
                      text:"Lorem ipsum dolor sit amet, consectetur ",
                      replies:[]
                    }
                  ]
                }
    
  ]
  },
  {
    name:"Akshay Saini",
    text:"Lorem ipsum dolor sit amet, consectetur ",
    replies:[]
  },
  {
    name:"Akshay Saini",
    text:"Lorem ipsum dolor sit amet, consectetur ",
    replies:[
              {
                name:"Akshay Saini",
                text:"Lorem ipsum dolor sit amet, consectetur ",
                replies:[
                          {
                            name:"Akshay Saini",
                            text:"Lorem ipsum dolor sit amet, consectetur ",
                            replies:[]
                          },
                ]
              },
    ]
  },
  {
    name:"Akshay Saini",
    text:"Lorem ipsum dolor sit amet, consectetur ",
    replies:[]
  }
  

]
const CommentList=({comments})=>{
  return comments.map((comment)=>
  (
    <>
    <Comment data={comment} />
    <div className='pl-5  ml-5 '>
    <CommentList comments={comment.replies}/>
    </div>
    
    </>
  
  
  )

  )
} 

  return (
    <div className='my-5 py-2'>
      <h1 className='text-2xl font-bold'>Comments</h1>
      <CommentList comments={commentData}/>
      </div>
  )
}

export default CommentsContainer