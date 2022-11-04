import { Router } from "express";
import {
  createBook,
  deleteBook,
  getBooks,
  getOneBook,
  updateBook,
  getAvailableBooks,
  getBorrowedBooks,
} from "../../controllers/books-controller";
const router = Router();

router.get("/", getBooks);
router.get("/available", getAvailableBooks);
router.get("/borrowed", getBorrowedBooks);
router.get("/:id", getOneBook);
router.post("/", createBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;
