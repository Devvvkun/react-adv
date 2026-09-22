import { useContext } from 'react'
import Button from './Button'
import Navbar1 from './Navbar1'
import { ThemeContext } from './Theme'

function App() {
  const [,,body] = useContext(ThemeContext)

  return (
   <div className={body}>
  <Navbar1 />
  <Button />
   </div>
  )
}

export default App
