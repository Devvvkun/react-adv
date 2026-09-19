import About from './Components/About'
import Home from './Components/Home'
import Contact from './Components/Contact'
import {Routes , Route} from 'react-router-dom'
import Navbar from './Navbar'
const React_Router_DOM = () => {
  return (
    <div>
      <Navbar />
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
        </Routes>
    </div>
  )
}

export default React_Router_DOM