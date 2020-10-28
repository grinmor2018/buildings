import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Servei } from './interfaces/servei.interface';
import { CreateServeiDto } from './dto/servei.dto';

@Injectable()
export class ServeiService {

    constructor(@InjectModel('Servei') private readonly ServeiModel: Model<Servei>){}

    async getServeis(): Promise<Servei[]>{
        const serveis = await this.ServeiModel.find();
        return serveis;
    }
    async getServei(serveiId: string): Promise<Servei>{
        const servei = await this.ServeiModel.findById(serveiId);
        return servei;
    }
    async createServei(createServeiDto: CreateServeiDto): Promise<Servei>{
        const servei = new this.ServeiModel(createServeiDto);
        return await servei.save();
    }
    async deleteServei(serveiId: string): Promise<Servei> {
        const servei = await this.ServeiModel.findByIdAndDelete(serveiId);
        return servei;
    }
    async updateServei(serveiId: string, createServeiDto: CreateServeiDto): Promise<Servei>{
        const servei = await this.ServeiModel.findByIdAndUpdate(serveiId, createServeiDto, {new: true});
        return servei;
    }
}

