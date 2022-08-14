import Express from 'express';
import { logout } from '../controllers/login.controller.js';

const router = Express.Router();
router.post('/', logout);

export default router;