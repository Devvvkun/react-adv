const ApiHandle_AsyncAwait =  () => {
    async function getData(){
    const data =await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const response = await data.json();
    console.log(response)
    }
    const getInfo = async () =>{
      const data = await fetch("https://jsonplaceholder.typicode.com/users")
      const response = await data.json()
      console.log(response)
    }
  return (
    <>
    <button onClick={getData}>Dabao</button>
    <button onClick={getInfo}>Sahlao</button>
    <div>ApiHandle_React</div>

  </>
  )
}

export default ApiHandle_AsyncAwait