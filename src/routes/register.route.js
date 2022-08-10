import Express from 'express';
import { register, getAllEmails } from '../controllers/register.controller.js';

const router = Express.Router();
router.get('/getAllEmails', getAllEmails);
router.post('/', register);

export default router;