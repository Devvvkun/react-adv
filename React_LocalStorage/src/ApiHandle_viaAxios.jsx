import axios from 'axios'
import { useState } from 'react'
const ApiHandle_viaAxios = () => {
    const [Data, setData] = useState([])
    const getData = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/photos")
    setData(response.data)
    }
    return (

    <>
    <div>
        {Data.map((data,idx) =>{
            return(
            <h3 key={idx}>{data.title}</h3>
        )} )}
        </div>
    <button onClick={getData}>Get me my API</button>
</>
  )
}

export default ApiHandle_viaAxios