import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Resposta } from './interfaces/resposta.interface';
import { CreateRespostaDto } from './dto/resposta.dto';

@Injectable()
export class RespostaService {

    constructor(@InjectModel('Resposta') private readonly respostaModel: Model<Resposta>){}

    async getRespostas(): Promise<Resposta[]>{
        const respostas = await this.respostaModel.find();
        return respostas;
    }
    async getResposta(respostaId: string): Promise<Resposta>{
        const resposta = await this.respostaModel.findById(respostaId);
        return resposta;
    }
    async createResposta(createRespostaDto: CreateRespostaDto): Promise<Resposta>{
        const resposta = new this.respostaModel(createRespostaDto);
        return await resposta.save();
    }
    async deleteResposta(respostaId: string): Promise<Resposta> {
        const resposta = await this.respostaModel.findByIdAndDelete(respostaId);
        return resposta;
    }
    async updateResposta(respostaId: string, createRespostaDto: CreateRespostaDto): Promise<Resposta>{
        const resposta = await this.respostaModel.findByIdAndUpdate(respostaId, createRespostaDto, { new: true });
        return resposta;
    }
}

