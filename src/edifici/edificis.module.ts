import { Module } from '@nestjs/common';
import { EdificiController } from './edificis.controller';
import { EdificiService } from './edificis.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EdificiSchema } from './schemas/edifici.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Edifici', schema: EdificiSchema}
    ])
  ],
  controllers: [EdificiController],
  providers: [EdificiService]
})
export class EdificiModule {}
