import { memo, useCallback } from "react";
import { useState } from "react"
function App() {

  const [count,setCount] = useState(0);

  const logSomething = useCallback(()=>{
    console.log("Child Clicked")
  },[]);
  
  // const logSomething = ()=>console.log("abcd");


  return (
    <div>
      <BtnComp onClick={logSomething}/>
      <button onClick={()=>{setCount(count+1)}}>Counter {count}</button>

    </div>
  )
}

const BtnComp = memo(function({logSomething}){
  console.log("Child Re-render")

  return (
    <div>
      <button onClick={logSomething}>Button Clicked</button>
    </div>
  )
})

export default App
