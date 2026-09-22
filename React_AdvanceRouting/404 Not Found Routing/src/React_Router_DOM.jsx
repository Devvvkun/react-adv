import About from './Components/About'
import Home from './Components/Home'
import Contact from './Components/Contact'
import {Routes , Route} from 'react-router-dom'
import Navbar from './Navbar'
import NotFound from './Components/NotFound'
import Footer from './Components/Footer'
const React_Router_DOM = () => {
  return (
    <div>
      <Navbar />
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='*' element={<NotFound />}></Route>
        </Routes>
       <Footer/> 
    </div>
  )
}

export default React_Router_DOM