import { useEffect, useState } from "react"
const UseEffect_Func = () => {
    const [A, setA] = useState(0)
    const [B, setB] = useState(0)
   useEffect(function aChange(){
        console.log("A is changing fast")
    },[A])
    useEffect(function bChange(){
        console.log("B is changing like hell")
    },[B])
  return (
    <div>
        <button onClick={() => {
            setA(A+1)
        } }>Change A</button>
        <button onClick={() => {
            setB(B-1)
        } }>Change B</button>
        <h2>This is the value of the changing A {A}</h2>
        <h2>This is the value of the changing B {B}</h2>
    </div>
  )
}

export default UseEffect_Func