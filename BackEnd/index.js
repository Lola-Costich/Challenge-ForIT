import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// 🧠 Array en memoria para las tareas
let tasks = [];
let nextId = 1;

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

// Obtener todas las tareas
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

// Crear una nueva tarea
app.post("/api/tasks", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "El título es obligatorio" });
  }

  const newTask = {
    id: nextId++,
    title,
    completed: false,
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Actualizar una tarea existente
app.put("/api/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const { title, completed } = req.body;

  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return res.status(404).json({ error: "Tarea no encontrada" });
  }

  if (title !== undefined) task.title = title;
  if (completed !== undefined) task.completed = completed;

  res.json(task);
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
// Eliminar una tarea existente
app.delete("/api/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);

  const index = tasks.findIndex(t => t.id === taskId);

  if (index === -1) {
    return res.status(404).json({ error: "Tarea no encontrada" });
  }

  const deletedTask = tasks.splice(index, 1)[0];

  res.json(deletedTask);
});
