import { Module } from '@nestjs/common';
import { ConsultingroomController } from './consultingroom.controller';
import { ConsultingroomService } from './consultingroom.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsultingroomSchema } from './schemas/consultingroom.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Consultingroom', schema: ConsultingroomSchema}
    ])
  ],
  controllers: [ConsultingroomController],
  providers: [ConsultingroomService],
  exports: [ConsultingroomService]
})
export class ConsultingroomModule {}

