import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Planta } from './interfaces/planta.interface';
import { CreatePlantaDto } from './dto/planta.dto';

@Injectable()
export class PlantaService {

    constructor(@InjectModel('Planta') private readonly plantaModel: Model<Planta>){}

    async getPlantas(): Promise<Planta[]>{
        const plantas = await this.plantaModel.find();
        return plantas;
    }
    async getPlanta(plantaId: string): Promise<Planta>{
        const planta = await this.plantaModel.findById(plantaId);
        return planta;
    }
    async createPlanta(createPlantaDto: CreatePlantaDto): Promise<Planta>{
        const planta = new this.plantaModel(createPlantaDto);
        return await planta.save();
    }
    async deletePlanta(plantaId: string): Promise<Planta> {
        const planta = await this.plantaModel.findByIdAndDelete(plantaId);
        return planta;
    }
    async updatePlanta(plantaId: string, createPlantaDto: CreatePlantaDto): Promise<Planta>{
        const planta = await this.plantaModel.findByIdAndUpdate(plantaId, createPlantaDto, {new: true});
        return planta;
    }
}

