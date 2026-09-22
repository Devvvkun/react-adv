import { createContext, useState } from 'react'
export const ThemeContext = createContext() 
const Theme = (props) => {
    const [theme, setTheme] = useState("Light")
    const [body, setBody] = useState("LightBdy")
  return (
    <ThemeContext.Provider value={[theme,setTheme,body,setBody]}>
        {props.children} 
    </ThemeContext.Provider>
  )
}

export default Theme