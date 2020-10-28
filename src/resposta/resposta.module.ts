import { Module } from '@nestjs/common';
import { RespostaController } from './resposta.controller';
import { RespostaService } from './resposta.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RespostaSchema } from './schemas/resposta.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Resposta', schema: RespostaSchema}
    ])
  ],
  controllers: [RespostaController],
  providers: [RespostaService]
})
export class RespostaModule {}

