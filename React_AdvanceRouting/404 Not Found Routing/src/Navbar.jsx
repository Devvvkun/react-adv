import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-around h-14  items-center bg-blue-400 text-gray font-semibold'>
        <h3>NavBar</h3>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
    </div>
  )
}

export default Navbar