import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Edifici } from './interfaces/edifici.interface';
import { CreateEdificiDto } from './dto/edifici.dto';

@Injectable()
export class EdificiService {

    constructor(@InjectModel('Edifici') private readonly edificiModel: Model<Edifici>){}

    async getEdificis(): Promise<Edifici[]>{
        const edificis = await this.edificiModel.find();
        return edificis;
    }
    async getEdifici(edificiId: string): Promise<Edifici>{
        const edifici = await this.edificiModel.findById(edificiId);
        return edifici;
    }
    async createEdifici(createEdificiDto: CreateEdificiDto): Promise<Edifici>{
        const edifici = new this.edificiModel(createEdificiDto);
        return await edifici.save();
    }
    async deleteEdifici(edificiId: string): Promise<Edifici> {
        const edifici = await this.edificiModel.findByIdAndDelete(edificiId);
        return edifici;
    }
    async updateEdifici(edificiId: string, createEdificiDto: CreateEdificiDto): Promise<Edifici>{
        const edifici = await this.edificiModel.findByIdAndUpdate(edificiId, createEdificiDto, { new: true });
        return edifici;
    }
}
