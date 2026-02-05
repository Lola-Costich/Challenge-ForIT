import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  // Traer tareas del backend al cargar la app
  useEffect(() => {
    fetch("http://localhost:3001/api/tasks")
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error("Error al cargar tareas:", err));
  }, []);

  // Agregar tarea nueva
  const addTask = (title) => {
    fetch("http://localhost:3001/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    })
      .then(res => res.json())
      .then(newTask => setTasks([...tasks, newTask]))
      .catch(err => console.error("Error al agregar tarea:", err));
  };

  // Eliminar tarea
  const deleteTask = (id) => {
    fetch(`http://localhost:3001/api/tasks/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(() => setTasks(tasks.filter(task => task.id !== id)))
      .catch(err => console.error("Error al eliminar tarea:", err));
  };

  // Editar tarea
  const editTask = (id) => {
    const newTitle = prompt("Nuevo título de la tarea:");
    if (!newTitle) return;

    fetch(`http://localhost:3001/api/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTitle }),
    })
      .then(res => res.json())
      .then(updatedTask => {
        setTasks(tasks.map(task => (task.id === id ? updatedTask : task)));
      })
      .catch(err => console.error("Error al editar tarea:", err));
  };

  return (
    <div>
      <h1>Mi Lista de Tareas</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
}

export default App;
