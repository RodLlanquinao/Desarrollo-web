type TareaFormProps = {
  titulo: string;
  setTitulo: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
};

function TareaForm({ titulo, setTitulo, onSubmit }: TareaFormProps) {
  const deshabilitado = !titulo.trim();

  return (
    <form onSubmit={onSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Escribe una tarea"
        className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        disabled={deshabilitado}
        className={`px-4 py-2 rounded-lg text-white transition ${
          deshabilitado
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        Crear
      </button>
    </form>
  );
}

export default TareaForm;