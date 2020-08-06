import {createConnection, Connection} from 'typeorm';

export const  connectDatabase =  ():Promise<Connection>=>  createConnection()
