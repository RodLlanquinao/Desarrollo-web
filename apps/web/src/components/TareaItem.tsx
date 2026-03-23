type Tarea = {
  id: number;
  titulo: string;
  done: boolean;
};

type TareaItemProps = {
  tarea: Tarea;
  onToggle: (tarea: Tarea) => void;
  onDelete: (id: number) => void;
};

function TareaItem({ tarea, onToggle, onDelete }: TareaItemProps) {
  return (
    <li className="flex justify-between items-center bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition">
      <span
        onClick={() => onToggle(tarea)}
        className={`cursor-pointer select-none ${
          tarea.done ? "line-through text-gray-400" : "text-gray-800"
        }`}
      >
        {tarea.titulo} {tarea.done ? "✔" : "❌"}
      </span>

      <button
        onClick={() => onDelete(tarea.id)}
        className="px-2 py-1 rounded-md text-red-500 hover:text-red-700 hover:bg-red-50 transition"
      >
        🗑
      </button>
    </li>
  );
}

export default TareaItem;