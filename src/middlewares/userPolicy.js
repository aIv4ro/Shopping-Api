export const userPolicy = (req, res, next) => {
  if(req.params.id !== req.userId){
    return res.status(403).send({message:'Forbidden operation'});
  }

  next();
};