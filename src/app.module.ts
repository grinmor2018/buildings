import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EdificiModule } from './edifici/edificis.module';
import { ContacteModule } from './contacte/contacte.module';
import { ServeiModule } from './servei/servei.module';
import { PlantaModule } from './planta/planta.module';
import { SalaModule } from './sala/sala.module';
import { ServEspeModule } from './servespe/servespe.module';
import { ContacteController } from './contacte/contacte.controller';
import { ServeiController } from './servei/servei.controller';
import { RespostaModule } from './resposta/resposta.module';

@Module({
  imports: [EdificiModule, MongooseModule.forRoot('mongodb://localhost/backoffice-edificis', {
    useFindAndModify: false
  }), ContacteModule, ServeiModule, PlantaModule, SalaModule, ServEspeModule, RespostaModule],
  controllers: [AppController, ContacteController, ServeiController],
  providers: [AppService]
})
export class AppModule {}
