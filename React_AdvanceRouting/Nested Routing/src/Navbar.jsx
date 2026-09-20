import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-between  p-6 h-14  items-center bg-blue-400 text-gray font-semibold'>
        <h3>NavBar</h3>
        <div className='w-[30%] flex gap-9'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/products'>Products</Link>
        <Link to='/courses'>Courses</Link>
    </div>
    </div>
  )
}

export default Navbar