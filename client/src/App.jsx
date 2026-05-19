import React from 'react'
import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Add from './Add'
import Edit from './Edit'
import Login from './Login'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Login />} />

        <Route path='/home' element={<Home />} />

        <Route path='/add' element={<Add />} />

        <Route path="/edit/:id" element={<Edit />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App