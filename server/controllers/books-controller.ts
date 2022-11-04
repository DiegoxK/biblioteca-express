import { Request, Response } from "express";
import book from "../models/book";

type Book = {
  nombre: string;
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

const createBook = async (req: Request, res: Response) => {
  const { nombre }: Book = req.body;
  const newBook = new book({ nombre });

  try {
    await newBook.save();
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

  return res.json(updatedBook);
};

const deleteBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  await book.findByIdAndDelete(id);

  return res.json({ message: "Book deleted" });
};

export { getBooks, getOneBook, createBook, updateBook, deleteBook };
