import React from "react"
import { Routes, Route } from 'react-router-dom';

//pages
import HomePages from "./Pages/HomePages";

function App() {
 
  return (
    <div>
   <Routes>
<Route path="/" element={<HomePages/>} />
   </Routes>
    </div>
  )
}

export default App
