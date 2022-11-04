import { Request, Response } from "express";
import book from "../models/book";
import { createLog } from "./loggin-controller";

type Book = {
  nombre: string;
  prestado: boolean;
};

const getBooks = async (req: Request, res: Response) => {
  const books = await book.find();

  if (books.length === 0) {
    return res.status(404).json({
      message: "No books found",
    });
  }

  return res.json(books);
};

const getOneBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const Book = await book.findById(id);

  return res.json(Book);
};

const getAvailableBooks = async (req: Request, res: Response) => {
  const books = await book.find({ prestado: false });

  if (books.length === 0) {
    return res.status(404).json({
      message: "No books found",
    });
  }

  return res.json(books);
};

const getBorrowedBooks = async (req: Request, res: Response) => {
  const books = await book.find({ prestado: true });

  if (books.length === 0) {
    return res.status(404).json({
      message: "No books found",
    });
  }

  return res.json(books);
};

const createBook = async (req: Request, res: Response) => {
  const { nombre }: Book = req.body;
  const newBook = new book({ nombre });

  try {
    await newBook.save();
    await createLog("Create book", undefined, newBook.nombre);

    res.status(201).json(newBook);
  } catch (error) {
    res.status(409).json({ message: "Server Error" });
  }
};

const updateBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nombre }: Book = req.body;

  const updatedBook = await book.findByIdAndUpdate(
    id,
    { nombre },
    { new: true }
  );

  if (updatedBook) {
    await createLog("Update book", undefined, updatedBook.nombre);
    return res.json(updatedBook);
  }

  return res.status(404).json({ message: "Book not found" });
};

const deleteBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const Book = await book.findById(id);

  if (Book) {
    if (Book.prestado) {
      return res.status(409).json({ message: "Book is borrowed" });
    }
    //delete book
    await book.findByIdAndDelete(id);
    await createLog("Delete book", undefined, Book.nombre);
    return res.json({ message: "Book deleted" });
  }

  return res.status(404).json({ message: "Book not found" });
};

export {
  getBooks,
  getOneBook,
  createBook,
  updateBook,
  deleteBook,
  getAvailableBooks,
  getBorrowedBooks,
};
