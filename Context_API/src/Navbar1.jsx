import { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeContext } from './Theme'
const Navbar1 = () => {
  const [theme] = useContext(ThemeContext)
  return (
    <div className={theme} >
        <div className='flex gap-8'>
            <h3>Navbar</h3>
        </div>
        <Nav2/>
    </div>
  )
}

export default Navbar1