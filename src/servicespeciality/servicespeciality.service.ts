import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Servicespeciality } from './interfaces/servicespeciality.interface';
import { CreateServicespecialityDto } from './dto/servicespeciality.dto';

@Injectable()
export class ServicespecialityService {

    constructor(@InjectModel('Servicespeciality') private readonly servicespecialityModel: Model<Servicespeciality>){}

    async getServicespecialities(): Promise<Servicespeciality[]>{
        const servicespecialities = await this.servicespecialityModel.find();
        return servicespecialities;
    }
    async getServicespeciality(servicespecialityId: string): Promise<Servicespeciality>{
        const servicespeciality = await this.servicespecialityModel.findById(servicespecialityId);
        return servicespeciality;
    }
    async createServicespeciality(createservicespecialityDto: CreateServicespecialityDto): Promise<Servicespeciality>{
        const servicespeciality = new this.servicespecialityModel(createservicespecialityDto);
        return await servicespeciality.save();
    }
    async deleteServicespeciality(servicespecialityId: string): Promise<Servicespeciality> {
        const servicespeciality = await this.servicespecialityModel.findByIdAndDelete(servicespecialityId);
        return servicespeciality;
    }
    async updateServicespeciality(servicespecialityId: string, createServicespecialityDto: CreateServicespecialityDto): Promise<Servicespeciality>{
        const servicespeciality = await this.servicespecialityModel.findByIdAndUpdate(servicespecialityId, createServicespecialityDto, {new: true});
        return servicespeciality;
    }
}
