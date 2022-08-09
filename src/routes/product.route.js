import Express from 'express';
import { deleteProduct, getAllProducts, getProductFromId, postProduct, patchProduct } from '../controllers/product.controller.js';

const router = Express.Router();

router.get('/:id', getProductFromId);
router.get('/', getAllProducts);
router.post('/', postProduct);
router.patch('/:id', patchProduct);
router.delete('/:id', deleteProduct);

export default router;