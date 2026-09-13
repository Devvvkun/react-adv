import React from 'react'

const ApiHandle_AsyncAwait =  () => {
    async function getData(){
    const data =await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const response = await data.json();
    console.log(response)
    }
  return (
    <>
    <button onClick={getData}>Dabao</button>
    <div>ApiHandle_React</div>
  </>
  )
}

export default ApiHandle_AsyncAwait