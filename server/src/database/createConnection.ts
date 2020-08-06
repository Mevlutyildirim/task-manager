import {createConnection, Connection} from 'typeorm';
import * as entites from '../entity';

export const  connectDatabase =  ():Promise<Connection>=>  createConnection({
    type:"mysql",
    host:process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: Object.values(entites),
    synchronize:true
});