import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PhimController} from './phim/phim.controller'
import { PhimService } from './phim/phim.service';
import { PhimModule } from './phim/phim.module';
import { Phim } from './phim/phim.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'datvephim',
      entities: [Phim],
      synchronize: true,
    }),
    PhimModule,
  
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
