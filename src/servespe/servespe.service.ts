import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Servespe } from './interfaces/servespe.interface';
import { CreateServespeDto } from './dto/servespe.dto';

@Injectable()
export class ServEspeService {

    constructor(@InjectModel('Servespe') private readonly servespeModel: Model<Servespe>){}

    async getServespes(): Promise<Servespe[]>{
        const servespes = await this.servespeModel.find();
        return servespes;
    }
    async getServespe(servespeId: string): Promise<Servespe>{
        const servespe = await this.servespeModel.findById(servespeId);
        return servespe;
    }
    async createServespe(createServespeDto:CreateServespeDto): Promise<Servespe>{
        const servespe = new this.servespeModel(createServespeDto);
        return await servespe.save();
    }
    async deleteServespe(servespeId: string): Promise<Servespe> {
        const servespe = await this.servespeModel.findByIdAndDelete(servespeId);
        return servespe;
    }
    async updateServespe(servespeId: string,createServespeDto:CreateServespeDto): Promise<Servespe>{
        const servespe = await this.servespeModel.findByIdAndUpdate(servespeId,createServespeDto, {new: true});
        return servespe;
    }
}
