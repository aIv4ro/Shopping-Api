import Express from 'express';
import { login, logout, register, getAllEmails } from '../controllers/auth.controller.js';

const router = Express.Router();

router.post('/login', login);
router.post('/logout', logout);
router.post('/register', register);
router.get('/getAllEmails', getAllEmails);

export default router;