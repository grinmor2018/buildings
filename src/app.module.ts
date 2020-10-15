import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuildingModule } from './building/building.module';

@Module({
  imports: [BuildingModule, MongooseModule.forRoot('mongodb://localhost/backoffice-buildings', {
    useFindAndModify: false
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
