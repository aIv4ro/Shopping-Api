import Express from 'express';
import { login, logout, register, getAllEmails } from '../controllers/auth.controller.js';
import { auth } from '../middlewares/auth.js';

const router = Express.Router();

router.post('/login', login);
router.post('/logout', auth, logout);
router.post('/register', register);
router.get('/getAllEmails', getAllEmails);

export default router;