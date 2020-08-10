import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { get, set } from "shared/utils/store";
import ajax from "shared/utils/ajax";
export const authenticate = () => {
  const history = useHistory();

  useEffect(() => {
    const getToken = async () => {
      try {
        const { token } = await ajax();
        set("auth", token);
        history.push("/");
      } catch (err) {
        console.log(err);
      }
    };

    if (!!get("auth")) {
      getToken();
    }
  }, [history]);

  return (<div></div>);
};
