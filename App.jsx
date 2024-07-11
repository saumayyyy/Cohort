import { useState } from 'react'
import './App.css'
import {CreateTodo} from './Components/CreateTodo'
import  {Todos}  from './Components/Todos'

function App() {

  const [todos, setTodos] = useState([]);

  //here we can fetch all todos and pass as prop in Todos component.
  //  fetch("http://localhost:3000/todos")
  //  .then(async (res)=>{
  //   const json = await res.json();
  //   setTodos(json.todos);
  //  });
  //this code causes infinite requests to DB.
  //because setTodos re-renders the App component which is calling 
  //settodos hence it is stuck in infinite loop.  
  //Hence we use useEffect Hook.
  
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App;
