import { Module } from '@nestjs/common';
import { FloorController } from './floor.controller';
import { FloorService } from './floor.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FloorSchema } from './schemas/floor.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Floor', schema: FloorSchema}
    ])
  ],
  controllers: [FloorController],
  providers: [FloorService],
  exports: [FloorService],
})
export class FloorModule {}
