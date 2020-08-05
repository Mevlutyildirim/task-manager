
type ErrorType = {[key:string]:any};

export class CustomError extends Error{
  
  constructor(
    public message:string, 
    public code:string|number,
    public codeNumber:number = 500
  ){
   super();
  }
}

