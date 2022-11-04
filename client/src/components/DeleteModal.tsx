import axios from "axios";
import { useState } from "react";
import Book from "../types/Book";
import User from "../types/User";

interface DeleteModalProps {
  setItems:
    | React.Dispatch<React.SetStateAction<User[]>>
    | React.Dispatch<React.SetStateAction<Book[]>>;
  modalRef: React.RefObject<HTMLDivElement>;
  itemId: string;
  dataType: string;
}

function DeleteModal({
  dataType,
  itemId,
  modalRef,
  setItems,
}: DeleteModalProps) {
  const [errorMessage, setErrorMessage] = useState<string>();

  const deleteItem = () => {
    axios
      .delete(`http://localhost:3200/api/${dataType}/${itemId}`)
      .then((res) => {
        axios.get(`http://localhost:3200/api/${dataType}`).then((res) => {
          setItems(res.data);
        });
        console.log(res);
      })
      .catch((err) => {
        const message =
          err.response.data.message === "User has borrowed books"
            ? "El usuario tiene libros prestados, no se puede eliminar"
            : "El libro está prestado, no se puede eliminar";

        setErrorMessage(message);
      });
  };

  return (
    <div className="inactive" ref={modalRef}>
      <div className="bg-gray2b p-10 rounded-sm">
        <p className="text-center">¿Estás seguro de que deseas continuar?</p>
        <p className="text-center text-red-500">{errorMessage}</p>
        <div className="flex gap-5 mt-4 justify-center">
          <button
            className="font-bold text-red-500"
            onClick={() => {
              deleteItem();
              modalRef.current?.classList.add("inactive");
            }}
          >
            Eliminar
          </button>
          <button
            className="font-bold"
            onClick={() => {
              modalRef.current?.classList.remove("modal");
              setErrorMessage("");
            }}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
