import Express from "express";
import userRouter from './user.route.js';

const router = Express.Router();
router.use('/api/user', userRouter);

export default router;