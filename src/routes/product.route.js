import Express from 'express';
import { deleteProduct, getAllProducts, getProductFromId, postProduct, patchProduct, searchProducts } from '../controllers/product.controller.js';
import fileUpload from 'express-fileupload';
import path from 'path';

const router = Express.Router();

router.get('/search', searchProducts);
router.get('/', getAllProducts);
router.get('/:id', getProductFromId);
router.post('/image/:id', fileUpload(), (req, res) => {
  const {image} = req.files;
  const {id} = req.params;

  if(!image) {
    return res.status(400).send({message: 'Could not find image'});
  }

  const extension = image.name.split('.').at(1);

  image.mv(path.resolve(`./src/images/${id}.${extension}`), err => {
    if(err){
      return res.status(400).send({message: 'Could not save image'});
    }

    return res.send({message: 'Image saved'});
  });
});
router.post('/', postProduct);
router.patch('/:id', patchProduct);
router.delete('/:id', deleteProduct);

export default router;