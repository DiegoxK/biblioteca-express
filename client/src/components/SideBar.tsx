import { AiFillHome, AiOutlineUserAdd } from "react-icons/ai";
import { BsBook } from "react-icons/bs";

interface SideBarProps {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

function SideBar({ content, setContent }: SideBarProps) {
  return (
    <div className="flex flex-col ml-10 mt-10 w-60">
      <p className="uppercase text-gray69">administracion</p>
      <ul>
        {[
          {
            title: "Inicio",
            icon: AiFillHome,
          },
          {
            title: "Usuarios",
            icon: AiOutlineUserAdd,
          },
          {
            title: "Libros",
            icon: BsBook,
          },
        ].map((item) => (
          <li
            className={`${
              content === item.title ? "text-white" : "text-gray69"
            } flex items-center mt-5 cursor-pointer`}
            key={item.title}
            onClick={() => {
              setContent(item.title);
            }}
          >
            <item.icon size={16} />
            <p className="ml-3"> {item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
