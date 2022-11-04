import { Router } from "express";
import {
  createBook,
  deleteBook,
  getBooks,
  getOneBook,
  updateBook,
} from "../../controllers/books-controller";
const router = Router();

router.get("/", getBooks);
router.get("/:id", getOneBook);
router.post("/", createBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;
