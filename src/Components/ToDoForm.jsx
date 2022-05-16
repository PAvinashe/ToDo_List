import React from 'react'
import {v4 as uuidv4} from "uuid";

const ToDoForm = ({input, setInput, todos, setTodos}) => {    

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) =>{        
        e.preventDefault();
        // console.log("LN12", input)
        // console.log("LN13", uuidv4())        
        setTodos([...todos, {id: uuidv4(), title: input, completed: false}])
         console.log("LN19", todos)
        localStorage.setItem('ToDos', JSON.stringify(todos))
        setInput('');
    };

  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type={"text"}
        placeholder="Enter a ToDo"
        value={input}        
        name="text"
        className="task-input"
        onChange={handleChange}
      />
      <button className='button-add' type='submit'>Add</button>
    </form>
  );
}

export default ToDoForm