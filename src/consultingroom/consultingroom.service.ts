import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Consultingroom } from './interfaces/consultingroom.interface';
import { CreateConsultingroomDto } from './dto/consultingroom.dto';

@Injectable()
export class ConsultingroomService {

    constructor(@InjectModel('Consultingroom') private readonly consultingroomModel: Model<Consultingroom>){}

    async getConsultingrooms(): Promise<Consultingroom[]>{
        const consultingrooms = await this.consultingroomModel.find();
        return consultingrooms;
    }
    async getConsultingroom(consultingroomId: string): Promise<Consultingroom>{
        const consultingroom = await this.consultingroomModel.findById(consultingroomId);
        return consultingroom;
    }
    async createConsultingroom(createConsultingroomDto: CreateConsultingroomDto): Promise<Consultingroom>{
        const consultingroom = new this.consultingroomModel(createConsultingroomDto);
        return await consultingroom.save();
    }
    async deleteConsultingroom(consultingroomId: string): Promise<Consultingroom> {
        const consultingroom = await this.consultingroomModel.findByIdAndDelete(consultingroomId);
        return consultingroom;
    }
    async updateConsultingroom(consultingroomId: string, createConsultingroomDto: CreateConsultingroomDto): Promise<Consultingroom>{
        const consultingroom = await this.consultingroomModel.findByIdAndUpdate(consultingroomId, createConsultingroomDto, {new: true});
        return consultingroom;
    }
}

