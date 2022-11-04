import { useState } from "react";
import axios from "axios";
import User from "../types/User";

interface CreateModalProps {
  modalRef: React.RefObject<HTMLDivElement>;
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

function CreateModal({ modalRef, setUsers }: CreateModalProps) {
  const [newUser, setNewUser] = useState({
    nombre: "",
    apellido: "",
  });

  const createUser = () => {
    axios
      .post(`http://localhost:3200/api/users`, newUser)
      .then((res) => {
        axios.get("http://localhost:3200/api/users").then((res) => {
          setUsers(res.data);
        });
        setNewUser({ nombre: "", apellido: "" });
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });

    modalRef.current?.classList.remove("modal");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  return (
    <div className="inactive" ref={modalRef}>
      <div className="bg-gray3b flex rounded-lg gap-5 p-5">
        <div className="flex gap-5">
          <input
            className="bg-gray3b px-1 text-white border-b border-white focus:border-0"
            required
            onChange={onChange}
            type="text"
            name="nombre"
            value={newUser.nombre}
            placeholder="Nombre"
          />
          <input
            className="bg-gray3b px-1 text-white border-b border-white focus:border-0"
            required
            onChange={onChange}
            type="text"
            name="apellido"
            value={newUser.apellido}
            placeholder="Apellido"
          />
        </div>
        <button onClick={createUser} type="submit">
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
