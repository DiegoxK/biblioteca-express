import { Router } from "express";
import users from "./api/users";
import books from "./api/books";
import logs from "./api/logs";

const router = Router();

router.use("/users", users);
router.use("/books", books);
router.use("/logs", logs);

export default router;
