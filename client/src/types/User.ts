import Book from "./Book";

export default interface User {
  _id: string;
  nombre: string;
  apellido: string;
  librosPrestados: Book[];
  __v: number;
}
