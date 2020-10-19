import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';

import { CreateFloorDto } from './dto/floor.dto';
import { FloorService } from './floor.service';

@Controller('floors')
export class FloorController {

    constructor(private floorService: FloorService){}
    
    // Add floor: /floors/create
    @Post('/create')
    async createPost(@Res() res, @Body() createFloorDto: CreateFloorDto){
        const floor = await this.floorService.createFloor(createFloorDto);
        console.log(createFloorDto);
        res.status(HttpStatus.OK).json({
            message: 'received',
            floor
        });
    }

    // Get floors /floor
    @Get('/')
    async getfloors(@Res() res){
        const floors = await this.floorService.getFloors();
        return res.status(HttpStatus.OK).json({
            floors
        })
    }

    // GET single floor: /floors/5f88792ef18c3935e8c28ec7
    @Get('/:floorId')
    async getfloor(@Res() res, @Param('floorId') floorId ){
        const floor = await this.floorService.getFloor(floorId);
        if (!floor) throw new NotFoundException('floor not exists');
        return res.status(HttpStatus.OK).json({
            floor
        })
    }

    // Delete floor: /delete?floorId=5f88792ef18c3935e8c28ec7
    @Delete('/delete')
    async deletefloor(@Res() res, @Query('floorId') floorId){
        const floor = await this.floorService.deleteFloor(floorId);
        if (!floor) throw new NotFoundException('floor not exists');
        return res.status(HttpStatus.OK).json({
            message: 'floor deleted',
            floor
        })
    }

    // Update floor: /update?floorId=5f88792ef18c3935e8c28ec7
    @Put('/update')
    async updatefloor(@Res() res, @Body() createfloorDto: CreateFloorDto, @Query('floorId') floorId){
        const floor = await this.floorService.updateFloor(floorId, createfloorDto);
        if (!floor) throw new NotFoundException('floor not exists');
        return res.status(HttpStatus.OK).json({
            message: 'floor updated',
            floor
        })
    }


}