import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  const [id,setId] = useState(1);

  return (
      <div>
        <button onClick={()=>setId(1)}>1</button>
        <button onClick={()=>setId(2)}>2</button>
        <button onClick={()=>setId(3)}>3</button>
        <button onClick={()=>setId(4)}>4</button>
        <Todo id={id}/>
      </div>
          
  )
}
function Todo({id}){
  const [todo,setTodo] = useState({});

  useEffect(()=>{
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then(async (res)=>{
      setTodo(res.data.todo);
    })
  },[id])

  return(
    <div>
      <h1>{todo.title}</h1>
      <h2>{todo.description}</h2>
    </div>
  )
}

export default App
