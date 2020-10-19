import { Module } from '@nestjs/common';
import { ServicespecialityController } from './servicespeciality.controller';
import { ServicespecialityService } from './servicespeciality.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ServicespecialitySchema } from './schemas/servicespeciality.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Servicespeciality', schema: ServicespecialitySchema}
    ])
  ],
  controllers: [ServicespecialityController],
  providers: [ServicespecialityService],
  exports: [ServicespecialityService]
})
export class ServicespecialityModule {}