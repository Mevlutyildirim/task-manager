import {User} from 'entity'
import { AsyncError } from 'errors';
import * as Database from 'utils/database';

export const AddUser = AsyncError(async(req, res)=>{

  const user = new User();
  Object.assign(user, req.body.user);
  const savedUser = await Database.Save(user);
  res.status(200).send({savedUser});
})
