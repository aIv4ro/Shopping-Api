import Express from "express";
import { deleteUser, getAllUsers, getUserFromId, postUser, updateUser } from "../controllers/user.controller.js";

const router = Express.Router();

router.get('/:id', getUserFromId);
router.get('/', getAllUsers);
router.post('/', postUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;