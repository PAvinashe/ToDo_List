import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import ToDoForm from './Components/ToDoForm'
import ToDoList from './Components/ToDoList'

const App = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
};

const handleSubmit = (e) =>{        
    e.preventDefault();
    console.log("LN12", input)
    console.log("LN13", uuidv4())

    setTodos([...todos, {id: uuidv4(), title: input, }])
     console.log("LN19", todos)
    localStorage.setItem('ToDos', JSON.stringify(todos))
    setInput('');
};

  return (
    <div className="container">
      <div className='app-wrapper'>
        <div>
          <Header />
        </div> 
        <div>
          <ToDoForm
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
          />
        </div> 
        <div>
          <ToDoList 
            todos={todos}
            setTodos={setTodos}
          />
        </div>      
      </div>      
    </div>
  )
}

export default App
