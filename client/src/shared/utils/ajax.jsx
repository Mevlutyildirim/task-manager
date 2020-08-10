import React from 'react';
import axios from 'axios';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

const defaults = {
  baseUrl: 'http://localhost:3000',
  headers: ()=>({
    'content-type': 'application/json',
  })
};


class ajax{
  
  static response(method, param){
    const call = async ()=>{
      try{
        return {status, data} = await axios[method](...param)

      }catch(err){
        console.log(err);
      }
    }
    return call();
  }
  static get(url){
    return ajax.response("get", [url])
  }

  static post(url, body){
    return ajax.response("post", [url, body])
  }

  static put(url, body){
    return ajax.response("put", [url, body])
  }

  static delete(url){
   return ajax.response("delete", [url])
  }
}

export default ajax;