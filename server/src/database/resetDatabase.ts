import { createConnection } from 'typeorm';

const resetDatabase = async ()=>{
  const connection = createConnection();
  (await connection).dropDatabase();
  (await connection).synchronize()
}

resetDatabase();