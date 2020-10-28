import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Sala } from './interfaces/sala.interface';
import { CreateSalaDto} from './dto/sala.dto';

@Injectable()
export class SalaService {

    constructor(@InjectModel('Sala') private readonly salaModel: Model<Sala>){}

    async getSalas(): Promise<Sala[]>{
        const salas = await this.salaModel.find();
        return salas;
    }
    async getSala(salaId: string): Promise<Sala>{
        const sala = await this.salaModel.findById(salaId);
        return sala;
    }
    async createSala(createSalaDto: CreateSalaDto): Promise<Sala>{
        const sala = new this.salaModel(createSalaDto);
        return await sala.save();
    }
    async deleteSala(salaId: string): Promise<Sala> {
        const sala = await this.salaModel.findByIdAndDelete(salaId);
        return sala;
    }
    async updateSala(salaId: string, createSalaDto: CreateSalaDto): Promise<Sala>{
        const sala = await this.salaModel.findByIdAndUpdate(salaId, createSalaDto, {new: true});
        return sala;
    }
}

