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
    <li className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
      <span
        onClick={() => onToggle(tarea)}
        className={`cursor-pointer ${
          tarea.done ? "line-through text-gray-400" : ""
        }`}
      >
        {tarea.titulo} {tarea.done ? "✔" : "❌"}
      </span>

      <button
        onClick={() => onDelete(tarea.id)}
        className="text-red-500 hover:text-red-700"
      >
        🗑
      </button>
    </li>
  );
}

export default TareaItem;