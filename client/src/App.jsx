import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Register />} />
        </Routes>
    </>
  )
}

export default App
