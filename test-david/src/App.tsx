import { useState } from 'react'
import './App.css'
import ToDoListComponent from "@cmp/toDoList/ToDoListComponent";

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToDoListComponent />
    </>
  )
}

export default App
