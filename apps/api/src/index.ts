import express from "express";
import cors from "cors";
import morgan from "morgan";
import tareasRouter from "./routes/tareas.route";
import { errorHandler } from "./middlewares/error.middleware";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Prefijo /api para todas las rutas de tareas
app.use("/api", tareasRouter);
app.use(errorHandler);

const port = process.env.PORT ?? 3000;
app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
