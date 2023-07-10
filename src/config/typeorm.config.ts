import { TypeOrmModuleOptions } from "@nestjs/typeorm";


const databaseURL = `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@postgres:${process.env.DB_PORT}/${process.env.DB_NAME}`
console.log(databaseURL)
export const typeOrmConfig : TypeOrmModuleOptions ={
    type: 'postgres',
    url: databaseURL,
    entities: [],
    synchronize: true,
}