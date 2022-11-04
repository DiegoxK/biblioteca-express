import Book from "../types/Book";
import axios from "axios";
import CreateModal from "../components/CreateBookModal";
import { useEffect, useRef, useState } from "react";
import BookCard from "../components/BookCard";

function Books() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3200/api/books")
      .then((res) => {
        setBooks(res.data.reverse());
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setBooks([]);
        }
      });
  }, []);

  const modalRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <h2 className="text-gray69 uppercase flex items-center">
          Administracion de Libros
        </h2>
        <button
          className="bg-gray3b text-white rounded-sm px-4 py-2"
          onClick={() => {
            modalRef.current?.classList.add("modal");
          }}
        >
          Agregar Libro +
        </button>
      </div>
      <CreateModal setBooks={setBooks} modalRef={modalRef} />
      <div className="flex justify-center flex-wrap gap-5">
        {!books ? (
          <p>Cargando...</p>
        ) : books.length !== 0 ? (
          books.map((book) => {
            return (
              <div key={book._id}>
                <BookCard book={book} setBooks={setBooks} />
              </div>
            );
          })
        ) : (
          <p>No hay libros</p>
        )}
      </div>
    </div>
  );
}

export default Books;
