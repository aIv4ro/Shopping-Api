import Express from 'express';
import { deleteProduct, getAllProducts, getProductFromId, postProduct, patchProduct, searchProducts } from '../controllers/product.controller.js';

const router = Express.Router();

router.get('/search', searchProducts);
router.get('/', getAllProducts);
router.get('/:id', getProductFromId);
router.post('/', postProduct);
router.patch('/:id', patchProduct);
router.delete('/:id', deleteProduct);

export default router;