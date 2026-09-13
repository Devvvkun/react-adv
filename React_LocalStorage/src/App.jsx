import ApiHandle_AsyncAwait from "./ApiHandle_AsyncAwait";
import ApiHandle_viaAxios from "./ApiHandle_viaAxios";

function App() {
  localStorage.setItem("Name", "Himanshu" )
  localStorage.setItem("Age", "19" )
  localStorage.setItem("Class", "Not Studying")
  localStorage.removeItem("Class")
  
  localStorage.getItem("Name")

  localStorage.setItem("Naam" , "Ram Dhunni")
  const data = {
    "user":"Himanshu",
    "age": "1.5million",
    "class": "padh rha"
  }
  localStorage.setItem("data",JSON.stringify(data)) //to send data in obj format to LocalStorage
  //Now to get this data we do
  // const jaankari = JSON.parse(localStorage.getItem("data"))
  // console.log(jaankari)
  return (
//     <>
//  <h2>This is a black page</h2> 
//  <ApiHandle_AsyncAwait />
//   </>
<ApiHandle_viaAxios />
  )
}

export default App
