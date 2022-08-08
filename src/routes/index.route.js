import Express from 'express';
import userRouter from './user.route.js';
import loginRouter from './login.route.js';
import { auth } from '../middlewares/auth.js';

const router = Express.Router();
router.use('/login', loginRouter);
router.use('/api/user', auth, userRouter);

export default router;