import React from 'react'

const ToDoList = ({todos, setTodos}) => {
    
  return (
    <div>
        {todos.map((todo) => {
            <li className='list-item' key={todo.id}>               
                <input 
                   type="text"
                   value={todo.text}
                   className='list'
                   onChange={(e) => e.preventDefault()}
                />
                <div>
                   
                </div>
            </li>
        })
 
        }
    </div>
  );
}

export default ToDoList