import { useState } from "react";

type CardProps = {
  id: number;
  nombre: string;
  onDelete: (id: number) => void;
  onUpdate: (id: number, nombre: string) => void;
};

function Card({ id, nombre, onDelete, onUpdate }: CardProps) {
  const [editando, setEditando] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState(nombre);

  const guardar = () => {
    onUpdate(id, nuevoNombre);
    setEditando(false);
  };

  return (
    <div className="card mb-2">
      <div className="card-body">
        {editando ? (
          <>
            <input
              className="form-control mb-2"
              value={nuevoNombre}
              onChange={(e) => setNuevoNombre(e.target.value)}
            />
            <button className="btn btn-success btn-sm me-2" onClick={guardar}>
              Guardar
            </button>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => setEditando(false)}
            >
              Cancelar
            </button>
          </>
        ) : (
          <>
            <h5 className="card-title">{nombre}</h5>
            <button
              className="btn btn-warning btn-sm me-2"
              onClick={() => setEditando(true)}
            >
              Editar
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => onDelete(id)}
            >
              Eliminar
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Card;
