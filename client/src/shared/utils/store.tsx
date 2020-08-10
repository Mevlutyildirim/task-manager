
const get = (key:string) => localStorage.getItem(key);
const set = (key:string, value:any)=> localStorage.setItem(key, value);
const remove = (key:string)=> localStorage.removeItem(key);

export {get, set, remove};