import React, { useState } from 'react';
import { Plus, Trash2, CheckCircle, Circle } from 'lucide-react';
import Featurebar from '../Components/Featurebar';``

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([{ text: input, completed: false }, ...todos]);
    setInput('');
  };

  const toggleTodo = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  const deleteTodo = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  return (
    <div className="p-6 min-h-screen bg-[var(--primary-color)] text-[var(--secondary-color)] transition-all duration-300">
      <Featurebar />
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">To-Do List</h1>

        <div className="flex items-center gap-3 mb-6">
          <input
            type="text"
            placeholder="Add a new task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
          />
          <button
            onClick={addTodo}
            className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg"
          >
            <Plus />
          </button>
        </div>

        <ul className="space-y-3">
          {todos.length === 0 && (
            <p className="text-gray-400 text-center">No tasks added yet.</p>
          )}
          {todos.map((todo, index) => (
            <li
              key={index}
              className={`flex items-center justify-between p-3 rounded-lg bg-gray-400 transition group ${
                todo.completed ? 'opacity-60' : ''
              }`}
            >
              <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => toggleTodo(index)}
              >
                {todo.completed ? (
                  <CheckCircle className="text-green-500" />
                ) : (
                  <Circle className="text-gray-400" />
                )}
                <span
                  className={`text-base ${
                    todo.completed ? 'line-through text-gray-400' : ''
                  }`}
                >
                  {todo.text}
                </span>
              </div>
              <button
                onClick={() => deleteTodo(index)}
                className="text-red-500 opacity-0 group-hover:opacity-100 transition"
              >
                <Trash2 />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
