import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Contacte } from './interfaces/contacte.interface';
import { CreateContacteDto } from './dto/contacte.dto';

@Injectable()
export class ContacteService {

    constructor(@InjectModel('Contacte') private readonly contacteModel: Model<Contacte>){}

    async getcontactes(): Promise<Contacte[]>{
        const contactes = await this.contacteModel.find();
        return contactes;
    }
    async getcontacte(contacteId: string): Promise<Contacte>{
        const contacte = await this.contacteModel.findById(contacteId);
        return contacte;
    }
    async createcontacte(createContacteDto: CreateContacteDto): Promise<Contacte>{
        const contacte = new this.contacteModel(createContacteDto);
        return await contacte.save();
    }
    async deletecontacte(contacteId: string): Promise<Contacte> {
        const contacte = await this.contacteModel.findByIdAndDelete(contacteId);
        return contacte;
    }
    async updatecontacte(contacteId: string, createContacteDto: CreateContacteDto): Promise<Contacte>{
        const contacte = await this.contacteModel.findByIdAndUpdate(contacteId, createContacteDto, {new: true});
        return contacte;
    }
}

