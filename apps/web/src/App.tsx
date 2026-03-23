import { FormEvent, useEffect, useState } from "react";
import {
  getTareas,
  createTarea,
  updateTarea,
  deleteTarea,
} from "./services/tareas.service";
import TareaForm from "./components/TareaForm";
import TareaItem from "./components/TareaItem";

type Tarea = {
  id: number;
  titulo: string;
  done: boolean;
};

function App() {
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [titulo, setTitulo] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const total = tareas.length;
  const completadas = tareas.filter((t) => t.done).length;
  const pendientes = total - completadas;

  useEffect(() => {
    cargarTareas();
  }, []);

  async function cargarTareas() {
    try {
      setLoading(true);
      setError(null);

      const data = await getTareas();
      setTareas(data);
    } catch (err) {
      setError("No se pudieron cargar las tareas");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function crearNuevaTarea(e: React.FormEvent) {
    e.preventDefault();

    if (!titulo.trim()) return;

    try {
      setError(null);

      await createTarea(titulo);
      setTitulo("");
      await cargarTareas();
    } catch (err) {
      setError("No se pudo crear la tarea");
      console.error(err);
    }
  }

  async function toggleTarea(t: Tarea) {
    try {
      setError(null);

      await updateTarea(t.id, { done: !t.done });
      await cargarTareas();
    } catch (err) {
      setError("No se pudo actualizar la tarea");
      console.error(err);
    }
  }

  async function eliminarTareaPorId(id: number) {
    const confirmado = window.confirm("¿Seguro que quieres eliminar esta tarea?");

    if (!confirmado) return;

    try {
      setError(null);

      await deleteTarea(id);
      await cargarTareas();
    } catch (err) {
      setError("No se pudo eliminar la tarea");
      console.error(err); 
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-6">

        <h1 className="text-3xl font-bold mb-4 text-center">
          Desarrollo Web
        </h1>

        <h2 className="text-xl font-semibold mb-2">Crear tarea</h2>

        <TareaForm
          titulo={titulo}
          setTitulo={setTitulo}
          onSubmit={crearNuevaTarea}
        />

        {loading && (
          <p className="mb-4 text-sm text-gray-500">Cargando tareas...</p>
        )}

        {error && (
          <p className="mb-4 text-sm text-red-500">{error}</p>
        )}

        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-semibold">Lista de tareas</h2>

          <div className="flex gap-3 text-sm">
            <span className="bg-gray-100 px-2 py-1 rounded">
              Total: {total}
            </span>
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded">
              ✔ {completadas}
            </span>
            <span className="bg-red-100 text-red-700 px-2 py-1 rounded">
              ❌ {pendientes}
            </span>
          </div>
        </div>

        {tareas.length === 0 ? (
          <p className="text-gray-500 bg-gray-50 p-4 rounded-lg">
            Aún no tienes tareas creadas.
          </p>
        ) : (
          <ul className="space-y-2">
            {tareas.map((t) => (
              <TareaItem
                key={t.id}
                tarea={t}
                onToggle={toggleTarea}
                onDelete={eliminarTareaPorId}
              />
            ))}
          </ul>
        )}

      </div>
    </div>
  );
}

export default App;