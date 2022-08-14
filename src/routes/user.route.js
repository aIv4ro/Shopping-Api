import Express from 'express';
import { deleteUser, getAllUsers, getUserFromId, postUser, patchUser, getUserFromToken } from '../controllers/user.controller.js';
import {userPolicy} from '../middlewares/userPolicy.js';

const router = Express.Router();

router.get('/getUserFromToken', getUserFromToken);
router.get('/:id', getUserFromId);
router.get('/', getAllUsers);
router.post('/', postUser);
router.patch('/:id', userPolicy, patchUser);
router.delete('/:id', userPolicy, deleteUser);

export default router;