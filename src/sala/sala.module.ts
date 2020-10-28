import { Module } from '@nestjs/common';
import { SalaController } from './sala.controller';
import { SalaService } from './sala.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SalaSchema } from './schemas/sala.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Sala', schema: SalaSchema}
    ])
  ],
  controllers: [SalaController],
  providers: [SalaService],
  exports: [SalaService]
})
export class SalaModule {}

