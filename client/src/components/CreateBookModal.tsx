import { useState } from "react";
import axios from "axios";
import Book from "../types/Book";

interface CreateModalProps {
  modalRef: React.RefObject<HTMLDivElement>;
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
}

function CreateModal({ modalRef, setBooks }: CreateModalProps) {
  const [newBook, setNewBook] = useState({
    nombre: "",
  });

  const createBook = () => {
    axios
      .post(`http://localhost:3200/api/Books`, newBook)
      .then((res) => {
        axios.get("http://localhost:3200/api/Books").then((res) => {
          setBooks(res.data);
        });
        setNewBook({ nombre: "" });
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });

    modalRef.current?.classList.remove("modal");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  return (
    <div className="inactive" ref={modalRef}>
      <div className="bg-gray3b flex rounded-lg gap-5 p-5">
        <div>
          <input
            className="bg-gray3b px-1 text-white border-b border-white focus:border-0"
            required
            onChange={onChange}
            type="text"
            name="nombre"
            value={newBook.nombre}
            placeholder="Titulo"
          />
        </div>
        <button onClick={createBook} type="submit">
          Crear
        </button>
        <button
          onClick={() => {
            modalRef.current?.classList.remove("modal");
          }}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default CreateModal;
