import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';

import { CreateServespeDto } from './dto/servespe.dto';
import { ServEspeService } from './servespe.service';

@Controller('servespes')
export class ServEspeController {

    constructor(private servEspeService: ServEspeService){}
    
    // Add servespe: /servespes/create
    @Post('/create')
    async createPost(@Res() res, @Body() createServespeDto: CreateServespeDto){
        const servespe = await this.servEspeService.createServespe(createServespeDto);
        console.log(createServespeDto);
        res.status(HttpStatus.OK).json({
            message: 'received',
            servespe
        });
    }

    // Get servespes /servespe
    @Get('/')
    async getServespes(@Res() res){
        const servespes = await this.servEspeService.getServespes();
        return res.status(HttpStatus.OK).json({
            servespes
        })
    }

    // GET single servespe: /servespes/5f88792ef18c3935e8c28ec7
    @Get('/:servespeId')
    async getServespe(@Res() res, @Param('servespeId') servespeId ){
        const servespe = await this.servEspeService.getServespe(servespeId);
        if (!servespe) throw new NotFoundException('servespe not exists');
        return res.status(HttpStatus.OK).json({
            servespe
        })
    }

    // Delete servespe: /delete?servespeId=5f88792ef18c3935e8c28ec7
    @Delete('/delete')
    async deleteServespe(@Res() res, @Query('servespeId') servespeId){
        const servespe = await this.servEspeService.deleteServespe(servespeId);
        if (!servespe) throw new NotFoundException('servespe not exists');
        return res.status(HttpStatus.OK).json({
            message: 'servespe deleted',
            servespe
        })
    }

    // Update servespe: /update?servespeId=5f88792ef18c3935e8c28ec7
    @Put('/update')
    async updateServespe(@Res() res, @Body() createServespeDto: CreateServespeDto, @Query('servespeId') servespeId){
        const servespe = await this.servEspeService.updateServespe(servespeId, createServespeDto);
        if (!servespe) throw new NotFoundException('servespe not exists');
        return res.status(HttpStatus.OK).json({
            message: 'servespe updated',
            servespe
        })
    }


}

