import { useState } from 'react'
import Register from './features/Register'
import './App.css'
import { Button } from './components/button'
import { InputBox } from './components/inputBox'
import Login from './features/login'

function App() {
  return(
    <>
    {/* <Register/> */}
    {/* <Button label='render'/> */}
    {/* <InputBox placeholder='enter your email'/> */}
    <Login/>
    </>
  )
}

export default App
