const TaskList = ({ tasks, deleteTask, editTask, toggleComplete }) => {
  return (
    <div>
      <h2>Lista de Tareas</h2>
      {tasks.length === 0 ? (
        <p>No hay tareas.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className={task.completed ? "completed" : ""}>
              {task.title}
              <div>
                <button onClick={() => deleteTask(task.id)}>Eliminar</button>
                <button onClick={() => editTask(task.id)}>Editar</button>
                <button onClick={() => toggleComplete(task.id)}>
                  {task.completed ? "Desmarcar" : "Completar"}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;