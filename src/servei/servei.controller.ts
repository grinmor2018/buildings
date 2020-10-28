import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';

import { CreateServeiDto } from './dto/servei.dto';
import { ServeiService } from './servei.service';

@Controller('serveis')
export class ServeiController {

    constructor(private serveiService: ServeiService){}
    
    // Add servei: /serveis/create
    @Post('/create')
    async createPost(@Res() res, @Body() createServeiDto: CreateServeiDto){
        const servei = await this.serveiService.createServei(createServeiDto);
        console.log(createServeiDto);
        res.status(HttpStatus.OK).json({
            message: 'received',
            servei
        });
    }

    // Get serveis /servei
    @Get('/')
    async getServeis(@Res() res){
        const serveis = await this.serveiService.getServeis();
        return res.status(HttpStatus.OK).json({
            serveis
        })
    }

    // GET single servei: /Serveis/5f88792ef18c3935e8c28ec7
    @Get('/:ServeiId')
    async getServei(@Res() res, @Param('serveiId') serveiId ){
        const servei = await this.serveiService.getServei(serveiId);
        if (!servei) throw new NotFoundException('Servei not exists');
        return res.status(HttpStatus.OK).json({
            servei
        })
    }

    // Delete servei: /delete?serveiId=5f88792ef18c3935e8c28ec7
    @Delete('/delete')
    async deleteServei(@Res() res, @Query('serveiId') serveiId){
        const servei = await this.serveiService.deleteServei(serveiId);
        if (!servei) throw new NotFoundException('Servei not exists');
        return res.status(HttpStatus.OK).json({
            message: 'Servei deleted',
            servei
        })
    }

    // Update servei: /update?serveiId=5f88792ef18c3935e8c28ec7
    @Put('/update')
    async updateServei(@Res() res, @Body() createServeiDto: CreateServeiDto, @Query('serveiId') serveiId){
        const servei = await this.serveiService.updateServei(serveiId, createServeiDto);
        if (!servei) throw new NotFoundException('Servei not exists');
        return res.status(HttpStatus.OK).json({
            message: 'Servei updated',
            servei
        })
    }


}

