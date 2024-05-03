import { TypeOrmModuleOptions } from '@nestjs/typeorm';
const connectionDB: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '12345',
  database: 'pointsale',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};

export default connectionDB;
