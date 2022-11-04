import axios from "axios";
import Book from "../types/Book";
import { useEffect, useState } from "react";

interface Log {
  _id: string;
  action: string;
  userName: string;
  bookName: string;
  date: string;
  __v: number;
}

function Home() {
  const [books, setBooks] = useState<Book[]>();
  const [logs, setLogs] = useState<Log[]>();

  const logger = (log: Log) => {
    const date = log.date.split("T")[0];

    switch (log.action) {
      case "Borrow book":
        return `Se prestó el libro ${log.bookName} a ${log.userName} el ${date}`;
      case "Return book":
        return `Se devolvió el libro ${log.bookName} por parte de ${log.userName} el ${date}`;
      case "Create book":
        return `Se creó el libro ${log.bookName} el ${date}`;
      case "Delete book":
        return `Se eliminó el libro ${log.bookName} el ${date}`;
      case "Update book":
        return `Se actualizó el libro ${log.bookName} el ${date}`;
      case "Create user":
        return `Se creó el usuario ${log.userName} el ${date}`;
      case "Delete user":
        return `Se eliminó el usuario ${log.userName} el ${date}`;
      case "Update user":
        return `Se actualizó el usuario ${log.userName} el ${date}`;
      default:
        return "";
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:3200/api/books")
      .then((res) => {
        setBooks(res.data.reverse().splice(0, 4));
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setBooks([]);
        }
      });
    axios
      .get("http://localhost:3200/api/logs")
      .then((res) => {
        setLogs(res.data.reverse());
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setLogs([]);
        }
      });
  }, []);

  return (
    <div>
      <h2 className="text-gray69 uppercase mb-6">Agregados recientemente</h2>
      <div className="flex justify-center flex-wrap gap-5">
        {!books ? (
          <p>Cargando...</p>
        ) : books.length !== 0 ? (
          books.map((book) => {
            return (
              <div
                className="bg-gray3b gap-10 rounded-sm w-[15rem] h-[20rem] flex flex-col justify-center items-center text-center"
                key={book._id}
              >
                <p>{book.nombre}</p>
                <div>
                  <p
                    className={
                      !book.prestado ? "text-green-500" : "text-red-500"
                    }
                  >
                    {!book.prestado ? "Disponible!" : "No Disponible"}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <p>No hay libros</p>
        )}
      </div>

      <h2 className="text-gray69 my-6">Registros</h2>

      <div className="h-44 overflow-scroll">
        <code>
          {!logs ? (
            <p>Cargando...</p>
          ) : logs.length !== 0 ? (
            logs.map((log) => {
              return (
                <>
                  <p key={log._id}>{logger(log)}</p>
                </>
              );
            })
          ) : (
            <p>No hay registros</p>
          )}
        </code>
      </div>
    </div>
  );
}

export default Home;
