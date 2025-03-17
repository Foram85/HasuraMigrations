import { DataSource } from 'typeorm';
import { Customer } from './customer/customer.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: 'postgresql://postgre1_iuud_user:wGvxurL6LLuT0q2VPyyPpBWoqp2k419o@dpg-cvbs533qf0us73dc8kt0-a.oregon-postgres.render.com/postgre1_iuud',
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  entities: [Customer],
  migrations: [__dirname + '/migrations/*.{js,ts}'],
  synchronize: false,
});
