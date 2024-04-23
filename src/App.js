import React from 'react'
import Input from './Component/Input'
import Signup from './Component/Signup'
import { Route, Routes } from 'react-router-dom'
import LogIn from './Component/LogIn'
import { Toaster } from 'react-hot-toast'
import ProtectedRoute from './Component/ProtectedRoute'
import Error from './Component/Error'


function App() {
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path='/input' element={<ProtectedRoute />}>
          <Route path='' element={<Input />} />
        </Route>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/*' element={<Error />} />
      </Routes>



    </div>
  )
}

export default App