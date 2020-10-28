import { Module } from '@nestjs/common';
import { PlantaController } from './planta.controller';
import { PlantaService } from './planta.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PlantaSchema } from './schemas/planta.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Planta', schema: PlantaSchema}
    ])
  ],
  controllers: [PlantaController],
  providers: [PlantaService],
  exports: [PlantaService]
})
export class PlantaModule {}

