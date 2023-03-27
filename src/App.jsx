import { useState } from 'react'

import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Call from './Pages/Call/Call';
import Test from './Pages/Test/test';
import Dashboard from './Pages/Dashboard/Dashboard';
// import List from './Pages/List/List';


let payload = {
  meetingNumber:79000575367,
  role: 0,
  sdkKey:'ojPTBTbTiaS9bdWnfdPog',
  sdkSecret:'0GSXWYtxgTo8QLu0aa4c99X9ZHpQoFWk',
  password:'SvFX6T',
  userName:'Testing',
  userEmail:'',
  leaveUrl:'https://localhost:3000'
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/list",
      element: <Dashboard payload={payload} />,
    },
    {
      path: "/",
      element: <Test />,
    },
  ]); 

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
