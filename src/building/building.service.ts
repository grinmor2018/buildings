import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Building } from './interfaces/building.interface';
import { CreateBuildingDto } from './dto/building.dto';

@Injectable()
export class BuildingService {

    constructor(@InjectModel('Building') private readonly buildingModel: Model<Building>){}

    async getBuildings(): Promise<Building[]>{
        const buildings = await this.buildingModel.find();
        return buildings;
    }
    async getBuilding(buildingId: string): Promise<Building>{
        const building = await this.buildingModel.findById(buildingId);
        return building;
    }
    async createBuilding(createBuildingDto: CreateBuildingDto): Promise<Building>{
        const building = new this.buildingModel(createBuildingDto);
        return await building.save();
    }
    async deleteBuilding(buildingId: string): Promise<Building> {
        const building = await this.buildingModel.findByIdAndDelete(buildingId);
        return building;
    }
    async updateBuilding(buildingId: string, createBuildingDto: CreateBuildingDto): Promise<Building>{
        const building = await this.buildingModel.findByIdAndUpdate(buildingId, createBuildingDto, {new: true});
        return building;
    }
}
