import express from 'express';
import cors from 'cors';
import morgan from 'morgan';


const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


// Demo en memoria
let tareas: { id: number; titulo: string; done: boolean }[] = [];
let id = 1;


app.get('/api/tareas', (_req, res) => res.json(tareas)); 
app.post('/api/tareas', (req, res) => {
const nueva = { id: id++, titulo: req.body.titulo ?? '', done: false };
tareas.push(nueva);
res.status(201).json(nueva);
});
app.patch('/api/tareas/:id', (req, res) => {
const i = tareas.findIndex(t => t.id === Number(req.params.id));
if (i === -1) return res.status(404).json({ message: 'No encontrada' });
tareas[i] = { ...tareas[i], ...req.body };
res.json(tareas[i]);
});
app.delete('/api/tareas/:id', (req, res) => {
tareas = tareas.filter(t => t.id !== Number(req.params.id));
res.status(204).send();
});


const port = process.env.PORT ?? 3000;
app.listen(port, () => console.log(`API escuchando en http://localhost:${port}`));