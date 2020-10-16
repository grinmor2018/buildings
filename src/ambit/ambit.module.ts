import { Module } from '@nestjs/common';
import { AmbitController } from './ambit.controller';
import { AmbitService } from './ambit.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AmbitSchema } from './schemas/ambit.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Ambit', schema: AmbitSchema}
    ])
  ],
  controllers: [AmbitController],
  providers: [AmbitService],
  exports: [AmbitService],
})
export class AmbitModule {}
