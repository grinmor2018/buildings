import { Module } from '@nestjs/common';
import { WaitingroomController } from './waitingroom.controller';
import { WaitingroomService } from './waitingroom.service';
import { MongooseModule } from '@nestjs/mongoose';
import { WaitingroomSchema } from './schemas/waitingroom.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Waitingroom', schema: WaitingroomSchema}
    ])
  ],
  controllers: [WaitingroomController],
  providers: [WaitingroomService],
  exports: [WaitingroomService]
})
export class WaitingroomModule {}

