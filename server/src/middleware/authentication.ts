import jwt, {SignOptions} from 'jsonwebtoken';

export const signToken = (payload, options:SignOptions) =>{

  jwt.sign(payload, process.env.developer, {
    expiresIn:'60d',
    ...options
  });
}

export const verifyToken = (token) => {
}