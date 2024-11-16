import React from 'react'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import { Signup } from './components/signup/Signup'
import { Login } from './components/signup/Login'
import Dashboard from './components/dashboard/Dashboard'


export const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path="/Dashboard" element={<Dashboard/>} />
    </Routes>
    </BrowserRouter>

  )
}
