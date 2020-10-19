import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Waitingroom } from './interfaces/waitingroom.interface';
import { CreateWaitingroomDto } from './dto/waitingroom.dto';

@Injectable()
export class WaitingroomService {

    constructor(@InjectModel('Waitingroom') private readonly waitingroomModel: Model<Waitingroom>){}

    async getWaitingrooms(): Promise<Waitingroom[]>{
        const waitingrooms = await this.waitingroomModel.find();
        return waitingrooms;
    }
    async getWaitingroom(waitingroomId: string): Promise<Waitingroom>{
        const waitingroom = await this.waitingroomModel.findById(waitingroomId);
        return waitingroom;
    }
    async createWaitingroom(createWaitingroomDto: CreateWaitingroomDto): Promise<Waitingroom>{
        const waitingroom = new this.waitingroomModel(createWaitingroomDto);
        return await waitingroom.save();
    }
    async deleteWaitingroom(waitingroomId: string): Promise<Waitingroom> {
        const waitingroom = await this.waitingroomModel.findByIdAndDelete(waitingroomId);
        return waitingroom;
    }
    async updateWaitingroom(waitingroomId: string, createWaitingroomDto: CreateWaitingroomDto): Promise<Waitingroom>{
        const waitingroom = await this.waitingroomModel.findByIdAndUpdate(waitingroomId, createWaitingroomDto, {new: true});
        return waitingroom;
    }
}

