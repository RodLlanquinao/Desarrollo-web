type TareaFormProps = {
  titulo: string;
  setTitulo: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
};

function TareaForm({ titulo, setTitulo, onSubmit }: TareaFormProps) {
  return (
    <form onSubmit={onSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Escribe una tarea"
        className="flex-1 border rounded-lg px-3 py-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Crear
      </button>
    </form>
  );
}

export default TareaForm;