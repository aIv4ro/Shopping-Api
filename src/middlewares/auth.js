import { decodeToken } from '../services/auth.service.js';

export const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if(!authorization || !authorization.toLowerCase().startsWith('bearer')){
    return res.status(401).send({message: 'Unauthorized operation'});
  }

  const token = authorization.substring(7);
  const decodedToken = decodeToken(token);

  if(!decodedToken || !decodedToken.id) {
    return res.status(401).send({message: 'Token not valid or expired'});
  }

  req.userId = decodedToken.id;
  next();
};