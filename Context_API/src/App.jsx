import { useState } from 'react'
import Navbar1 from './Navbar1'

function App() {
  const [theme, setTheme] = useState("Light")

  return (
   <>
   <Navbar1 theme={theme}/>
   </>
  )
}

export default App
