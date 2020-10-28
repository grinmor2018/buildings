import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';

import { CreateEdificiDto } from './dto/edifici.dto';
import { EdificiService } from './edificis.service';

@Controller('edificis')
export class EdificiController {

    constructor(private edificiService: EdificiService){}
    
    // Add edifici: /edificis/create
    @Post('/create')
    async createPost(@Res() res, @Body() createEdificiDto: CreateEdificiDto){
        const edifici = await this.edificiService.createEdifici(createEdificiDto);
        console.log(createEdificiDto);
        res.status(HttpStatus.OK).json({
            message: 'received',
            edifici
        });
    }

    // Get edificis /edifici
    @Get('/')
    async getEdificis(@Res() res){
        const edificis = await this.edificiService.getEdificis();
        return res.status(HttpStatus.OK).json({
            edificis
        })
    }

    // GET single edifici: /edificis/5f88792ef18c3935e8c28ec7
    @Get('/:edificiId')
    async getEdifici(@Res() res, @Param('edificiId') edificiId ){
        const edifici = await this.edificiService.getEdifici(edificiId);
        if (!edifici) throw new NotFoundException('Edifici no existeix');
        return res.status(HttpStatus.OK).json({
            edifici
        })
    }

    // Delete edifici: /delete?edificiId=5f88792ef18c3935e8c28ec7
    @Delete('/delete')
    async deleteEdifici(@Res() res, @Query('edificiId') edificiId){
        const edifici = await this.edificiService.deleteEdifici(edificiId);
        if (!edifici) throw new NotFoundException('Edifici no existeix');
        return res.status(HttpStatus.OK).json({
            message: 'edifici deleted',
            edifici
        })
    }

    // Update edifici: /update?edificiId=5f88792ef18c3935e8c28ec7
    @Put('/update')
    async updateEdifici(@Res() res, @Body() createEdificiDto: CreateEdificiDto, @Query('edificiId') edificiId){
        const edifici = await this.edificiService.updateEdifici(edificiId, createEdificiDto);
        if (!edifici) throw new NotFoundException('Edifici no existeix');
        return res.status(HttpStatus.OK).json({
            message: 'edifici updated',
            edifici
        })
    }


}
