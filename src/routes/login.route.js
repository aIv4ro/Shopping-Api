import Express from 'express';
import { login } from '../controllers/login.controller.js';

const router = Express.Router();
router.post('/', login);

export default router;