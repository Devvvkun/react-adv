import { useState } from 'react'
import Navbar1 from './Navbar1'

function App() {
  const [theme, setTheme] = useState("Light")

  return (
   <>
   <Navbar1 theme={theme}>
    <h5>This is a children nav</h5>
    <h5>We can pass it</h5>
   </Navbar1>
   </>
  )
}

export default App
