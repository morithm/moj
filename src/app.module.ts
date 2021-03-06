import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmService } from './config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmService
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
