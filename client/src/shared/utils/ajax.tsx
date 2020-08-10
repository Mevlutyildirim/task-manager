import React from "react";
import axios from "axios";


const defaults = {
  baseUrl: "http://localhost:3000",
  headers: () => ({
    "content-type": "application/json",
  }),
};

class ajax {
  static response(method, param) {
    const call = async () => {
      try {
        const res = await axios[method](...param);
        return {data:res.data, status:res.status};
      } catch (err) {
         return {status:'500', data:'something went wrong'}
      }
    };
    return call();
  }
  static get(url) {
    return ajax.response("get", [url]);
  }

  static post(url, body) {
    return ajax.response("post", [url, body]);
  }

  static put(url, body) {
    return ajax.response("put", [url, body]);
  }

  static delete(url) {
    return ajax.response("delete", [url]);
  }
}

export default ajax;
