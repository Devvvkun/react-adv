import About from './Components/About'
import Home from './Components/Home'
import Contact from './Components/Contact'
import {Routes , Route, useLocation} from 'react-router-dom'
import Navbar from './Navbar'
import NotFound from './Components/NotFound'
import Footer from './Components/Footer'
import Products from './Components/Products'
import Men from './Components/Pages/Men'
import Women from './Components/Pages/Women'
import Courses from './Components/Pages/Courses'
import CoursesDetail from './Components/Pages/CoursesDetail'
import HomeBtn from './Components/HomeBtn'
const React_Router_DOM = () => {
  const location = useLocation();
  return (
    <div className='h-screen'>
      <Navbar />
      {location.pathname !== '/' && <HomeBtn />}
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/products' element={<Products />}>
              <Route path='women' element={<Women />}/>
              <Route path='men' element={<Men />}/>
            </Route>
               <Route path='/courses' element={<Courses />}></Route>
               <Route path='/courses/:courseId' element={<CoursesDetail />}></Route>
            <Route path='*' element={<NotFound />}></Route>
        </Routes>
       <Footer/> 
    </div>
  )
}

export default React_Router_DOM