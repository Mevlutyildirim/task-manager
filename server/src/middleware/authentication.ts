import { Request } from "express"
import { AsyncError } from '../errors/async';
export const checkToken = AsyncError((req, _res, next)=>{
  const token = getTokenFromRequest(req);
  if(!token){
    throw new Error('token has not been found');
  }
})

export const getTokenFromRequest = (req:Request) => {

  const header = req.get('authorization') || '';
  const [bearer, token] = header.split('');
  return bearer === 'bearer' && token ? token : null;
}