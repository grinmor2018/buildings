import { Module } from '@nestjs/common';
import { ServeiController } from './servei.controller';
import { ServeiService } from './servei.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeiSchema } from './schemas/servei.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Servei', schema: ServeiSchema}
    ])
  ],
  controllers: [ServeiController],
  providers: [ServeiService],
  exports: [ServeiService]
})
export class ServeiModule {}
