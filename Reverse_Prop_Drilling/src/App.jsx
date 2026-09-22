import { useState } from 'react'
import './index.css'
import Navbar from './Navbar'

function App() {
  const [Theme, setTheme] = useState("Dark")

  return (
    <>
    <h1>The page is of {Theme} theme</h1>
    <Navbar theme={Theme} setTheme={setTheme}/>
    </>
  )
}

export default App
