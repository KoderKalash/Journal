import React from 'react'
import { useState, UseEffect } from 'react'
import Featurebar from '../Components/Featurebar'
import { Plus, Trash2, CheckCircle, Circle } from 'lucide-react';

const ToDo = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setTodo([{ text: input, completed: false }, ...todo]);
    setInput('');
  };

  const removeTask = (index) => {
    const updateTodo = todo.filter((_, i) => i !== index);
    setTodo(updateTodo);
  }

  const statusTask = (index) => {
    const updateTodo = [...todo];
    updateTodo[index].completed = !updateTodo[index].completed;
    setTodo(updateTodo);
  }

  const clearAll = () => {
    setTodo([]);
  }


  return (
    <div className="flex flex-column p-6 min-h-screen text-black transition-all duration-300">
      {/* <Featurebar /> */}
      <div>
        <h1>New List</h1>
        <div>
          <input type="text" placeholder="Write your Tasks here.." value={input} onChange={(e) => setInput(e.target.value)} />
          <button onClick={addTask}><Plus/>
          </button>
          {/* <button onClick={clearAll}>Clear</button> */}
        </div>
        <div>
          <ul>
            {todo.length === 0 && (<p>No Tasks Added..</p>)}
            {todo.map((todo, index) => (
              <li>
                <div onClick={()=>statusTask(index)}>{todo.completed ? (<CheckCircle></CheckCircle>) : (<Circle></Circle>)}
                  <span>
                    {todo.text}
                  </span>
                </div>
                <button onClick={()=>removeTask(index)}><Trash2></Trash2></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ToDo
