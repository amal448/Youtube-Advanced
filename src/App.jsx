import React from 'react'
import Body from './components/Body'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainContainer from './components/MainContainer'
import WatchPage from './components/WatchPage'
import Searched from './components/Searched'

const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<Body/>,
    children:[
      {
        path:'/',
        element:<MainContainer/>
      },
      {
        path:'watch',
        element:<WatchPage/>
      },
      {
        path:'results',
        element:<Searched/>
      },
    ]
  }
])




function App() {

  return (
    <>
  
    <RouterProvider router={appRouter} />
    </>
  )
}

export default App
