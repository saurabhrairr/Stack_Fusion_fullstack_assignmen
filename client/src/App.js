import React from 'react'
import User_form from './components/User_form'
import Submitform from './components/Submitform';
import {BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  return (
  <>
  <BrowserRouter>
<Routes>

  <Route  path="/" element={<User_form/>} ></Route>
  <Route path='/Submitform' element={<Submitform/>} ></Route>
</Routes>
  </BrowserRouter>
  </>
  )
}

export default App
