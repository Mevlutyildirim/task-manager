import jwt, { SignOptions } from "jsonwebtoken";
import { isPlainObject } from "lodash";

export const verifyToken = (token: string) => {
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    if (isPlainObject(payload)) {
      return payload;
    }
    throw new Error();
  } catch (err) {
    console.log(err);
  }
};

export const signToken = (payload, options:SignOptions) =>
  jwt.sign(payload, process.env.developer, {
    expiresIn:'60d',
    ...options
  });