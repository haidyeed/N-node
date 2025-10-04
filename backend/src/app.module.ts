import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apartment } from './apartment.entity';
import { ApartmentModule } from './apartment.module';

@Module({
  imports: [    
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'db',
    port: 3306,
    username: 'appuser',
    password: 'apppass',
    database: 'apartment_db',
    entities: [Apartment],
    synchronize: true,
  }),
    ApartmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
