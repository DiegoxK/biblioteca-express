import { Router } from "express";
import {
  getUsers,
  createUser,
  updateUser,
  getOneUser,
  deleteUser,
  borrowBook,
  returnBook,
} from "../../controllers/users-controller";
const router = Router();

router.get("/", getUsers);
router.get("/:id", getOneUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

router.post("/:id/borrow", borrowBook);
router.post("/:id/return", returnBook);

export default router;
