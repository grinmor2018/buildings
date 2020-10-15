import { Module } from '@nestjs/common';
import { BuildingController } from './building.controller';
import { BuildingService } from './building.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BuildingSchema } from './schemas/building.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Building', schema: BuildingSchema}
    ])
  ],
  controllers: [BuildingController],
  providers: [BuildingService]
})
export class BuildingModule {}
