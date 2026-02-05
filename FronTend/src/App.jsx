import React from "react";
import TaskList from "./TaskList";

function App() {
  const tasks = []; // Por ahora array vacío
  return (
    <div>
      <h1>Mi Lista de Tareas</h1>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;

