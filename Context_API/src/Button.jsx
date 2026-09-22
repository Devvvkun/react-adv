import React, { useContext } from 'react'
import { ThemeContext } from './Theme'
const Button = () => {
    const [theme,setTheme,body,setBody] = useContext(ThemeContext)
    function changeTheme(){
        setTheme(theme === 'Light' ? "Dark" : 'Light')
        setBody(body === 'LightBdy' ? "DarkBdy" : 'LightBdy')
    }
  return (
   <button className='py-4 px-8 bg-gray-400 text-white absolute left-0 top-20 rounded-xl' onClick={changeTheme}>Change Theme</button>
  )
}

export default Button