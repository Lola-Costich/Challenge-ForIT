import React from "react";

const TaskList = ({ tasks }) => {
  return (
    <div>
      <h2>Lista de Tareas</h2>
      {tasks.length === 0 ? (
        <p>No hay tareas.</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              {task.title} {task.completed ? "(Completada)" : ""}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
