import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';

import { CreateSalaDto } from './dto/sala.dto';
import { SalaService } from './sala.service';

@Controller('salas')
export class SalaController {

    constructor(private salaService: SalaService){}
    
    // Add Sala: /Salas/create
    @Post('/create')
    async createPost(@Res() res, @Body() createSalaDto: CreateSalaDto){
        const sala = await this.salaService.createSala(createSalaDto);
        console.log(createSalaDto);
        res.status(HttpStatus.OK).json({
            message: 'received',
            sala
        });
    }

    // Get Salas /Sala
    @Get('/')
    async getSalas(@Res() res){
        const salas = await this.salaService.getSalas();
        return res.status(HttpStatus.OK).json({
            salas
        })
    }

    // GET single Sala: /Salas/5f88792ef18c3935e8c28ec7
    @Get('/:SalaId')
    async getSala(@Res() res, @Param('SalaId') SalaId ){
        const sala = await this.salaService.getSala(SalaId);
        if (!sala) throw new NotFoundException('Sala not exists');
        return res.status(HttpStatus.OK).json({
            sala
        })
    }

    // Delete Sala: /delete?SalaId=5f88792ef18c3935e8c28ec7
    @Delete('/delete')
    async deleteSala(@Res() res, @Query('SalaId') SalaId){
        const sala = await this.salaService.deleteSala(SalaId);
        if (!sala) throw new NotFoundException('Sala not exists');
        return res.status(HttpStatus.OK).json({
            message: 'Sala deleted',
            sala
        })
    }

    // Update Sala: /update?SalaId=5f88792ef18c3935e8c28ec7
    @Put('/update')
    async updateSala(@Res() res, @Body() createSalaDto: CreateSalaDto, @Query('SalaId') SalaId){
        const sala = await this.salaService.updateSala(SalaId, createSalaDto);
        if (!sala) throw new NotFoundException('Sala not exists');
        return res.status(HttpStatus.OK).json({
            message: 'Sala updated',
            sala
        })
    }


}
