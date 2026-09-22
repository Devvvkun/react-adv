import React from 'react'

const Navbar = (props) => {
  return (
    <button className='px-4 py-2 bg-gray-400 text-white rounded-2xl' onClick={()=>{props.setTheme("Light")}}>Click to change theme</button>
  )
}

export default Navbar