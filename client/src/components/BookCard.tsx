import { BsBookHalf, BsBook } from "react-icons/bs";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { useRef, useState } from "react";
import DeleteModal from "./DeleteModal";
import Book from "../types/Book";

interface BookCardProps {
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
  book: Book;
}

function BookCard({ book, setBooks }: BookCardProps) {
  const [newBook, setNewBook] = useState<Book>(book);
  const [editState, setEditState] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const updateBook = () => {
    axios
      .put(`http://localhost:3200/api/Books/${newBook._id}`, newBook)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      {editState ? (
        <>
          <div className="flex p-5 gap-3 rounded-md flex-wrap w-72 flex-col bg-gray3b">
            <div>
              <input
                className="bg-gray3b text-white border-b border-white focus:border-0"
                type="text"
                onChange={onChange}
                name="nombre"
                value={newBook.nombre}
              />
            </div>
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => {
                  updateBook();
                  setEditState(false);
                }}
              >
                <p className="text-green-500">Confirmar</p>
              </button>
              <button
                onClick={() => {
                  setEditState(false);
                }}
              >
                Cancelar
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex p-5 gap-3 rounded-md flex-wrap w-72 flex-col bg-gray3b">
          <div>
            <DeleteModal
              setItems={setBooks}
              dataType="Books"
              itemId={newBook._id}
              modalRef={modalRef}
            />
            <div>
              <p className="whitespace-normal">{newBook.nombre}</p>
              <p className={!book.prestado ? "text-green-500" : "text-red-500"}>
                {!book.prestado ? "Disponible!" : "No Disponible"}
              </p>
              <div className="flex gap-1 justify-end items-center">
                <button
                  onClick={() => {
                    setEditState(true);
                  }}
                >
                  <AiFillEdit size={20} />
                </button>
                <button
                  onClick={() => {
                    modalRef.current?.classList.add("modal");
                  }}
                >
                  <AiFillDelete size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BookCard;
