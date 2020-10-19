import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuildingModule } from './building/building.module';
import { AmbitController } from './ambit/ambit.controller';
import { AmbitModule } from './ambit/ambit.module';
import { FloorModule } from './floor/floor.module';
import { WaitingroomModule } from './waitingroom/waitingroom.module';
import { ConsultingroomModule } from './consultingroom/consultingroom.module';
import { RoomModule } from './room/room.module';
import { ServicespecialityModule } from './servicespeciality/servicespeciality.module';

@Module({
  imports: [BuildingModule, MongooseModule.forRoot('mongodb://localhost/backoffice-buildings', {
    useFindAndModify: false
  }), AmbitModule, FloorModule, WaitingroomModule, ConsultingroomModule, RoomModule, ServicespecialityModule],
  controllers: [AppController, AmbitController],
  providers: [AppService],
})
export class AppModule {}
