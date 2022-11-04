import { Request, Response } from "express";
import user from "../models/user";
import book from "../models/book";

type Book = {
  nombre: string;
  prestado: boolean;
};

type User = {
  nombre: string;
  apellido: string;
  librosPrestados: Book[];
};

const borrowBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { bookId } = req.body;

  const User = await user.findById(id);
  const Book = await book.findById(bookId);

  if (Book && User) {
    if (Book.prestado) {
      return res.status(409).json({ message: "Book already borrowed" });
    } else {
      Book.prestado = true;
      User.librosPrestados.push(Book._id);

      await Book.save();
      await User.save();

      return res.json(User);
    }
  } else {
    return res.status(404).json({ message: "Book or user not found" });
  }
};

const returnBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { bookId } = req.body;

  const User = await user.findById(id);
  const Book = await book.findById(bookId);

  if (Book && User) {
    if (Book.prestado) {
      Book.prestado = false;
      User.librosPrestados = User.librosPrestados.filter(
        (book) => book != bookId
      );

      await Book.save();
      await User.save();

      return res.json(User);
    } else {
      return res.status(409).json({ message: "Book already returned" });
    }
  } else {
    return res.status(404).json({ message: "Book or User not found" });
  }
};

const getUsers = async (req: Request, res: Response) => {
  const users = await user.find().populate("librosPrestados");

  if (users.length === 0) {
    return res.status(404).json({
      message: "No users found",
    });
  }

  return res.json(users);
};

const getOneUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const User = await user.findById(id).populate("librosPrestados");

  if (!User) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.json(User);
};

const createUser = async (req: Request, res: Response) => {
  const { nombre, apellido }: User = req.body;
  const newUser = new user({ nombre, apellido });

  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: "Server Error" });
  }
};

const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nombre, apellido }: User = req.body;

  const updatedUser = await user.findByIdAndUpdate(
    id,
    { nombre, apellido },
    { new: true }
  );

  return res.json(updatedUser);
};

const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const User = await user.findById(id);

  if (User) {
    if (User.librosPrestados.length === 0) {
      await user.findByIdAndDelete(id);
      return res.json({ message: "User deleted" });
    } else {
      return res.status(409).json({ message: "User has borrowed books" });
    }
  } else {
    return res.status(404).json({ message: "User not found" });
  }
};

export {
  getUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  borrowBook,
  returnBook,
};
