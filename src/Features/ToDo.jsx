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
   <div className="p-6 min-h-screen text-[var(--secondary-color)] transition-all duration-300">
  <Featurebar />

  <div className="flex flex-col items-center justify-start max-w-4xl h-[90vh] mx-auto border-2 rounded-md px-6 py-4 overflow-y-auto">
    <h1 className="text-3xl font-bold mb-6 text-center">New List</h1>

    <div className="flex w-full items-center justify-between gap-3 mb-6">
      <input
        type="text"
        placeholder="Write your Tasks here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />

      <button
        onClick={addTask}
        className="p-2 bg-[var(--secondary-color)] text-[var(--primary-color)] text-sm font-semibold rounded-md shadow-sm cursor-pointer hover:opacity-90  transition-all duration-200"
        aria-label="Add task"
      >
        <Plus />
      </button>

      <button
        onClick={clearAll}
        className="text-sm font-semibold px-4 py-2 rounded-md shadow-sm hover:bg-[var(--shadow-color)] transition duration-200 cursor-pointer"
      >
        Clear
      </button>
    </div>

    <ul className="w-full space-y-3">
      {todo.length === 0 ? (
        <p className="text-gray-400 text-center">No Tasks Added...</p>
      ) : (
        todo.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-3 border border-gray-300 rounded-md transition duration-200"
          >
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => statusTask(index)}
            >
              {item.completed ? <CheckCircle /> : <Circle />}
              <span
                className={`text-sm ${
                  item.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {item.text}
              </span>
            </div>

            <button
              onClick={() => removeTask(index)}
              className="hover:text-red-500 transition duration-200"
              aria-label="Delete task"
            >
              <Trash2 />
            </button>
          </li>
        ))
      )}
    </ul>
  </div>
</div>
  )
}

export default ToDo
