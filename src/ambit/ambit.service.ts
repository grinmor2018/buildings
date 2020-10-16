import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Ambit } from './interfaces/ambit.interface';
import { CreateAmbitDto } from './dto/ambit.dto';

@Injectable()
export class AmbitService {

    constructor(@InjectModel('Ambit') private readonly ambitModel: Model<Ambit>){}

    async getAmbits(): Promise<Ambit[]>{
        const ambits = await this.ambitModel.find();
        return ambits;
    }
    async getAmbit(ambitId: string): Promise<Ambit>{
        const ambit = await this.ambitModel.findById(ambitId);
        return ambit;
    }
    async createAmbit(createAmbitDto: CreateAmbitDto): Promise<Ambit>{
        const ambit = new this.ambitModel(createAmbitDto);
        return await ambit.save();
    }
    async deleteAmbit(ambitId: string): Promise<Ambit> {
        const ambit = await this.ambitModel.findByIdAndDelete(ambitId);
        return ambit;
    }
    async updateAmbit(ambitId: string, createAmbitDto: CreateAmbitDto): Promise<Ambit>{
        const ambit = await this.ambitModel.findByIdAndUpdate(ambitId, createAmbitDto, {new: true});
        return ambit;
    }
}
