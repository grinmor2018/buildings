import { Module } from '@nestjs/common';
import { ServEspeController } from './servespe.controller';
import { ServEspeService } from './servespe.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ServespeSchema } from './schemas/servespe.schema';


@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Servespe', schema: ServespeSchema}
    ])
  ],
  controllers: [ServEspeController],
  providers: [ServEspeService],
  exports: [ServEspeService]
})
export class ServEspeModule {}