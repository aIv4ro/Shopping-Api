import Express from 'express';
import userRouter from './user.route.js';
import productRouter from './product.route.js';
import loginRouter from './login.route.js';
import orderRouter from './order.route.js';
import { auth } from '../middlewares/auth.js';

const router = Express.Router();
router.use('/login', loginRouter);
router.use('/api/user', auth, userRouter);
router.use('/api/product', auth, productRouter);
router.use('/api/order', auth, orderRouter);

export default router;