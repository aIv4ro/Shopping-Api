import Express from 'express';
import { register } from '../controllers/register.controller.js';

const router = Express.Router();
router.post('/', register);

export default router;