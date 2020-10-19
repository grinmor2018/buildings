import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Floor } from './interfaces/floor.interface';
import { CreateFloorDto } from './dto/floor.dto';

@Injectable()
export class FloorService {

    
    constructor(@InjectModel('Floor') private readonly floorModel: Model<Floor>){}

    async getFloors(): Promise<Floor[]>{
        const floors = await this.floorModel.find();
        return floors;
    }
    async getFloor(floorId: string): Promise<Floor>{
        const floor = await this.floorModel.findById(floorId);
        return floor;
    }
    async createFloor(createFloorDto: CreateFloorDto): Promise<Floor>{
        const floor = new this.floorModel(createFloorDto);
        return await floor.save();
    }
    async deleteFloor(floorId: string): Promise<Floor> {
        const floor = await this.floorModel.findByIdAndDelete(floorId);
        return floor;
    }
    async updateFloor(floorId: string, createFloorDto: CreateFloorDto): Promise<Floor>{
        const floor = await this.floorModel.findByIdAndUpdate(floorId, createFloorDto, {new: true});
        return floor;
    }

}
