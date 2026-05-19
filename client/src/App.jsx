import React from 'react'
import Home from './Home'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Add from './Add'
import Edit from './Edit'
import Login from './Login'

import { SignedIn, SignedOut } from '@clerk/clerk-react'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Login />} />

        <Route
          path='/home'
          element={
            <>
              <SignedIn>
                <Home />
              </SignedIn>

              <SignedOut>
                <Navigate to="/" />
              </SignedOut>
            </>
          }
        />

        <Route path='/add' element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App