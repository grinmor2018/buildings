import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { from } from 'rxjs';

import { CreateBuildingDto } from './dto/building.dto';
import { BuildingService } from './building.service';

@Controller('buildings')
export class BuildingController {

    constructor(private buildingService: BuildingService){}
    
    // Add Building: /buildings/create
    @Post('/create')
    async createPost(@Res() res, @Body() createBuildingDto: CreateBuildingDto){
        const building = await this.buildingService.createBuilding(createBuildingDto);
        console.log(createBuildingDto);
        res.status(HttpStatus.OK).json({
            message: 'received',
            building
        });
    }

    // Get Buildings /building
    @Get('/')
    async getBuildings(@Res() res){
        const buildings = await this.buildingService.getBuildings();
        return res.status(HttpStatus.OK).json({
            buildings
        })
    }

    // GET single building: /buildings/5f88792ef18c3935e8c28ec7
    @Get('/:buildingId')
    async getBuilding(@Res() res, @Param('buildingId') buildingId ){
        const building = await this.buildingService.getBuilding(buildingId);
        if (!building) throw new NotFoundException('Building not exists');
        return res.status(HttpStatus.OK).json({
            building
        })
    }

    // Delete Product: /delete?buildingId=5f88792ef18c3935e8c28ec7
    @Delete('/delete')
    async deleteBuilding(@Res() res, @Query('buildingId') buildingId){
        const building = await this.buildingService.deleteBuilding(buildingId);
        if (!building) throw new NotFoundException('Building not exists');
        return res.status(HttpStatus.OK).json({
            message: 'building deleted',
            building
        })
    }

    // Update Product: /update?buildingId=5f88792ef18c3935e8c28ec7
    @Put('/update')
    async updateBuilding(@Res() res, @Body() createBuildingDto: CreateBuildingDto, @Query('buildingId') buildingId){
        const building = await this.buildingService.updateBuilding(buildingId, createBuildingDto);
        if (!building) throw new NotFoundException('Building not exists');
        return res.status(HttpStatus.OK).json({
            message: 'building updated',
            building
        })
    }


}
