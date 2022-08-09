import Express from 'express';
import { deleteOrder, getAllOrders, getOrderFromId, postOrder, patchOrder } from '../controllers/order.controller.js';

const router = Express.Router();

router.get('/:id', getOrderFromId);
router.get('/', getAllOrders);
router.post('/', postOrder);
router.patch('/:id', patchOrder);
router.delete('/:id', deleteOrder);

export default router;