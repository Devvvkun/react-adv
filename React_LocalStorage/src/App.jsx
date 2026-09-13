function App() {
  localStorage.setItem("Name", "Himanshu" )
  localStorage.setItem("Age", "19" )
  localStorage.setItem("Class", "Not Studying")
  const name = localStorage.getItem("Name")
  console.log(name)
  localStorage.clear()
  localStorage.setItem("Naam" , "Ram Dhunni")
  
  return (
    <>
 <h2>This is a black page</h2> 
  </>
  )
}

export default App
