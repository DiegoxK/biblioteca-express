import User from "../types/User";
import Book from "../types/Book";
import axios from "axios";

import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import UserCard from "../components/UserCard";
import CreateModal from "../components/CreateUserModal";

function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User>();
  const [userState, setUserState] = useState("prestar");
  const [books, setBooks] = useState<Book[]>([]);

  const modalRef = useRef<HTMLDivElement>(null);

  const getusers = () => {
    axios
      .get("http://localhost:3200/api/books/available")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setBooks([]);
        }
      });

    axios
      .get("http://localhost:3200/api/users")
      .then((res) => {
        setUsers(res.data);
        setSelectedUser(res.data[0]);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setUsers([]);
        }
      });
  };

  const borrowBook = (bookId: string) => {
    axios
      .post(`http://localhost:3200/api/users/${selectedUser?._id}/borrow`, {
        bookId,
      })
      .then(() => {
        getusers();
      });
  };

  const returnBook = (bookId: string) => {
    axios
      .post(`http://localhost:3200/api/users/${selectedUser?._id}/return`, {
        bookId,
      })
      .then(() => {
        getusers();
      });
  };

  useEffect(() => {
    getusers();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <h2 className="text-gray69 uppercase flex items-center">
          Administracion de Usuarios
        </h2>
        <button
          className="bg-gray3b text-white rounded-sm px-4 py-2"
          onClick={() => {
            modalRef.current?.classList.add("modal");
          }}
        >
          Agregar Usuario +
        </button>
        <CreateModal setUsers={setUsers} modalRef={modalRef} />
      </div>
      <div className="flex justify-center flex-wrap gap-5">
        {!users ? (
          <p>Cargando...</p>
        ) : users.length !== 0 ? (
          users.map((user) => {
            return (
              <div key={user._id}>
                <UserCard
                  setUsers={setUsers}
                  user={user}
                  setUserState={setUserState}
                  setSelectedUser={setSelectedUser}
                />
              </div>
            );
          })
        ) : (
          <p>No hay usuarios</p>
        )}
      </div>
      <div>
        {userState === "prestar" ? (
          <div className="flex flex-col gap-3">
            <h2 className="text-gray69">
              {`Prestar libros - `}{" "}
              <span className="text-white font-extrabold">
                {selectedUser?.nombre}
              </span>
            </h2>
            <p>Libros disponibles: ({books.length})</p>
            <div className="flex flex-wrap justify-center gap-5 bg-gray3b px-5 py-8">
              {!books ? (
                <p>Cargando...</p>
              ) : books.length !== 0 ? (
                books.map((book) => {
                  return (
                    <div
                      className="flex p-5 gap-3 rounded-md flex-wrap w-72 flex-col bg-gray2b"
                      key={book._id}
                    >
                      <p className="whitespace-normal">{book.nombre}</p>
                      <button
                        className="flex gap-1 justify-end items-center"
                        onClick={() => {
                          borrowBook(book._id);
                        }}
                      >
                        <div className="text-green-500">
                          <AiFillPlusCircle />
                        </div>{" "}
                        <p>Prestar</p>
                      </button>
                    </div>
                  );
                })
              ) : (
                <p>No hay libros disponibles</p>
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <h2 className="text-gray69">
              {`Devolver libros - `}{" "}
              <span className="text-white font-extrabold">
                {selectedUser?.nombre}
              </span>
            </h2>
            <p>Libros prestados: ({selectedUser?.librosPrestados.length})</p>
            <div className="flex flex-wrap justify-center gap-5 bg-gray3b p-5">
              {selectedUser?.librosPrestados.length === 0 ? (
                <p>Este usuario no tiene libros Registrados</p>
              ) : (
                selectedUser?.librosPrestados.map((book) => {
                  return (
                    <div
                      className="flex p-5 gap-3 rounded-md flex-wrap w-72 flex-col bg-gray2b"
                      key={book._id}
                    >
                      <p className="whitespace-normal">{book.nombre}</p>
                      <button
                        className="flex gap-1 justify-end items-center"
                        onClick={() => {
                          returnBook(book._id);
                        }}
                      >
                        <div className="text-red-500">
                          <AiFillMinusCircle />
                        </div>
                        <p>Devolver</p>
                      </button>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Users;
