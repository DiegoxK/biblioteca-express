import { BsBookHalf, BsBook } from "react-icons/bs";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import axios from "axios";
import User from "../types/User";
import { useRef, useState } from "react";
import DeleteModal from "./DeleteModal";

interface UserCardProps {
  user: User;
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  setUserState: React.Dispatch<React.SetStateAction<string>>;
  setSelectedUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

function UserCard({
  user,
  setUserState,
  setSelectedUser,
  setUsers,
}: UserCardProps) {
  const [newUser, setNewUser] = useState<User>(user);
  const [editState, setEditState] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const updateUser = () => {
    axios
      .put(`http://localhost:3200/api/users/${newUser._id}`, newUser)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      {editState ? (
        <div className="bg-gray3b flex rounded-lg gap-5 p-5">
          <div className="flex flex-col gap-5">
            <div className="flex gap-5">
              <input
                className="bg-gray3b text-white border-b border-white focus:border-0"
                type="text"
                onChange={onChange}
                name="nombre"
                value={newUser.nombre}
                placeholder="Nombre"
              />
              <input
                className="bg-gray3b border-b text-white"
                type="text"
                onChange={onChange}
                name="apellido"
                value={newUser.apellido}
              />
            </div>
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => {
                  updateUser();
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
        </div>
      ) : (
        <div className="bg-gray3b flex rounded-lg gap-5 p-5">
          <div className="flex items-center justify-center">
            <div className="w-14 h-14 rounded-full text-xl font-extrabold text-gray2b bg-white flex items-center justify-center">
              {newUser.nombre.slice(0, 1).toUpperCase()}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <DeleteModal
              setItems={setUsers}
              dataType="users"
              itemId={newUser._id}
              modalRef={modalRef}
            />
            <div className="flex text-xl justify-between">
              <p>{`${newUser.nombre} ${newUser.apellido}`}</p>
              <div className="flex gap-2">
                <div className="text-sm text-purple-400">
                  {user.librosPrestados.length}
                </div>
                <button
                  className="text-blue-400"
                  onClick={() => {
                    setEditState(true);
                  }}
                >
                  <AiFillEdit size={18} />
                </button>
                <button
                  className="text-red-400"
                  onClick={() => {
                    modalRef.current?.classList.add("modal");
                  }}
                >
                  <AiFillDelete size={18} />
                </button>
              </div>
            </div>
            <div className="flex text-sm gap-4">
              <button
                className="flex items-center gap-2 bg-gray2b py-2 px-4 rounded-full"
                onClick={() => {
                  setUserState("devolver");
                  setSelectedUser(user);
                }}
              >
                <BsBookHalf size={16} />
                <p>Devolver Libros</p>
              </button>
              <button
                className="flex items-center gap-2 bg-gray2b py-2 px-4 rounded-full"
                onClick={() => {
                  setUserState("prestar");
                  setSelectedUser(newUser);
                }}
              >
                <BsBook size={16} /> Prestar Libros
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UserCard;
