import React from 'react';
import { useState, useEffect } from 'react';
import Featurebar from '../Components/Featurebar';


const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [header, setHeader] = useState('To-Do List');
  const [editing, setEditing] = useState(false);

  // Load tasks and header from localStorage


  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('ToDo-Tasks'));
    const storedHeader = localStorage.getItem('ToDo-Header');
    if (storedTasks) setTasks(storedTasks);
    if (storedHeader) setHeader(storedHeader);
  }, []);

  // Save tasks and header to localStorage
  useEffect(() => {
    localStorage.setItem('ToDo-Tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('ToDo-Header', header);
  }, [header]);

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask('');
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      {editing ? (
        <input
          type="text"
          value={header}
          onChange={(e) => setHeader(e.target.value)}
          onBlur={() => setEditing(false)}
          autoFocus
          className="text-2xl font-bold text-center text-[var(--secondary-color)] border-b-2 border-[var(--secondary-color)] bg-transparent outline-none"
        />
      ) : (
        <h1
          onClick={() => setEditing(true)}
          className="text-2xl font-bold text-center text-[var(--secondary-color)] cursor-pointer"
        >
          {header}
        </h1>
      )}

      <div className="mt-4 flex gap-2">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
          className="flex-1 p-2 border rounded"
        />
        <button
          onClick={addTask}
          className="bg-[var(--secondary-color)] text-white px-4 py-2 rounded hover:opacity-90"
        >
          Add
        </button>
      </div>

      <ul className="mt-4 space-y-2">
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />
            <span className={task.completed ? 'line-through text-gray-500' : ''}>
              {task.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
