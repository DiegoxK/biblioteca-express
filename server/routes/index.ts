import { Router } from "express";
import users from "./api/users";
import books from "./api/books";

const router = Router();

router.use("/users", users);
router.use("/books", books);

export default router;
