import Express from 'express';
import userRouter from './user.route.js';
import loginRouter from './login.route.js';

const router = Express.Router();
router.use('/login', loginRouter);
router.use('/api/user', userRouter);

export default router;