import { RequestHandler } from "express";

export const AsyncError = (requestHandler: RequestHandler): RequestHandler =>{
  
  return async (req, res, next):Promise<any>=>{
    
    try{
      return await requestHandler(req, res, next);
    }catch(err){
      next(err);
    }
  }
}