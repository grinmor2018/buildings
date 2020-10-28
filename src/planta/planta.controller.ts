import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';

import { CreatePlantaDto } from './dto/planta.dto';
import { PlantaService } from './planta.service';

@Controller('plantas')
export class PlantaController {

    constructor(private plantaService: PlantaService){}
    
    // Add planta: /plantas/create
    @Post('/create')
    async createPost(@Res() res, @Body() createPlantaDto: CreatePlantaDto){
        const planta = await this.plantaService.createPlanta(createPlantaDto);
        console.log(createPlantaDto);
        res.status(HttpStatus.OK).json({
            message: 'received',
            planta
        });
    }

    // Get plantas /planta
    @Get('/')
    async getPlantas(@Res() res){
        const plantas = await this.plantaService.getPlantas();
        return res.status(HttpStatus.OK).json({
            plantas
        })
    }

    // GET single planta: /plantas/5f88792ef18c3935e8c28ec7
    @Get('/:plantaId')
    async getPlanta(@Res() res, @Param('plantaId') plantaId ){
        const planta = await this.plantaService.getPlanta(plantaId);
        if (!planta) throw new NotFoundException('Planta not exists');
        return res.status(HttpStatus.OK).json({
            planta
        })
    }

    // Delete planta: /delete?PlantaId=5f88792ef18c3935e8c28ec7
    @Delete('/delete')
    async deletePlanta(@Res() res, @Query('plantaId') plantaId){
        const planta = await this.plantaService.deletePlanta(plantaId);
        if (!planta) throw new NotFoundException('Planta not exists');
        return res.status(HttpStatus.OK).json({
            message: 'Planta deleted',
            planta
        })
    }

    // Update planta: /update?plantaId=5f88792ef18c3935e8c28ec7
    @Put('/update')
    async updatePlanta(@Res() res, @Body() createPlantaDto: CreatePlantaDto, @Query('plantaId') plantaId){
        const planta = await this.plantaService.updatePlanta(plantaId, createPlantaDto);
        if (!planta) throw new NotFoundException('Planta not exists');
        return res.status(HttpStatus.OK).json({
            message: 'Planta updated',
            planta
        })
    }


}
