import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuildingModule } from './building/building.module';
import { AmbitController } from './ambit/ambit.controller';
import { AmbitModule } from './ambit/ambit.module';

@Module({
  imports: [BuildingModule, MongooseModule.forRoot('mongodb://localhost/backoffice-buildings', {
    useFindAndModify: false
  }), AmbitModule],
  controllers: [AppController, AmbitController],
  providers: [AppService],
})
export class AppModule {}
