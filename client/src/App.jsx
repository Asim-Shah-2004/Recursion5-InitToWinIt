import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Register />} />
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    </>
  )
}

export default App
