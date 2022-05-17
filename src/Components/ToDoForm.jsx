import React, {useEffect} from 'react'
import {v4 as uuidv4} from "uuid";

const ToDoForm = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {  
  
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) => 
      todo.id === id ? {title, id, completed} : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  }

  useEffect(() => {
    if(editTodo){
      setInput(editTodo.title);
    }
    else
    {
      setInput("");
    }
  }, [setInput, editTodo])

      
  const handleChange = (e) => {
        setInput(e.target.value);
    };

    
  const handleSubmit = (e) =>{        
      e.preventDefault();
      if(!editTodo){
        if (!input || /^\s*$/.test(input)) {
          return;
        }                    
        setTodos([...todos, {id: uuidv4(), title: input, completed: false}])
        console.log("LN19", todos)
        localStorage.setItem('ToDos', JSON.stringify(todos))
        setInput('');
      }
      else
      {
        updateTodo(input, editTodo.id, editTodo.completed)
      }
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
      <button className='button-add' type='submit'>
        {editTodo ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default ToDoForm