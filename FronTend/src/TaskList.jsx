import React from "react";

const TaskList = ({ tasks, deleteTask, editTask }) => {
  return (
    <div>
      <h2>Lista de Tareas</h2>
      {tasks.length === 0 ? (
        <p>No hay tareas.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.title} {task.completed ? "(Completada)" : ""}
              <button
                style={{ marginLeft: "10px" }}
                onClick={() => deleteTask(task.id)}
              >
                Eliminar
              </button>
              <button
                style={{ marginLeft: "5px" }}
                onClick={() => editTask(task.id)}
              >
                Editar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;

