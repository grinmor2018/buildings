import { Module } from '@nestjs/common';
import { ContacteController } from './contacte.controller';
import { ContacteService } from './contacte.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ContacteSchema } from './schemas/contacte.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Contacte', schema: ContacteSchema}
    ])
  ],
  controllers: [ContacteController],
  providers: [ContacteService],
  exports: [ContacteService]
})
export class ContacteModule {}