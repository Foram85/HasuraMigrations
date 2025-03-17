import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgresql://postgre1_iuud_user:wGvxurL6LLuT0q2VPyyPpBWoqp2k419o@dpg-cvbs533qf0us73dc8kt0-a.oregon-postgres.render.com/postgre1_iuud',
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
      autoLoadEntities: true,
      synchronize: false,
    }),
    CustomerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
