import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { from } from 'rxjs';

import { CreateAmbitDto } from './dto/ambit.dto';
import { AmbitService } from './ambit.service';

@Controller('ambits')
export class AmbitController {

    constructor(private ambitService: AmbitService){}
    
    // Add ambit: /ambits/create
    @Post('/create')
    async createPost(@Res() res, @Body() createAmbitDto: CreateAmbitDto){
        const ambit = await this.ambitService.createAmbit(createAmbitDto);
        console.log(createAmbitDto);
        res.status(HttpStatus.OK).json({
            message: 'received',
            ambit
        });
    }

    // Get ambits /ambit
    @Get('/')
    async getAmbits(@Res() res){
        const ambits = await this.ambitService.getAmbits();
        return res.status(HttpStatus.OK).json({
            ambits
        })
    }

    // GET single ambit: /ambits/5f88792ef18c3935e8c28ec7
    @Get('/:ambitId')
    async getAmbit(@Res() res, @Param('ambitId') ambitId ){
        const ambit = await this.ambitService.getAmbit(ambitId);
        if (!ambit) throw new NotFoundException('ambit not exists');
        return res.status(HttpStatus.OK).json({
            ambit
        })
    }

    // Delete ambit: /delete?ambitId=5f88792ef18c3935e8c28ec7
    @Delete('/delete')
    async deleteAmbit(@Res() res, @Query('ambitId') ambitId){
        const ambit = await this.ambitService.deleteAmbit(ambitId);
        if (!ambit) throw new NotFoundException('ambit not exists');
        return res.status(HttpStatus.OK).json({
            message: 'ambit deleted',
            ambit
        })
    }

    // Update ambit: /update?ambitId=5f88792ef18c3935e8c28ec7
    @Put('/update')
    async updateAmbit(@Res() res, @Body() createAmbitDto: CreateAmbitDto, @Query('ambitId') ambitId){
        const ambit = await this.ambitService.updateAmbit(ambitId, createAmbitDto);
        if (!ambit) throw new NotFoundException('ambit not exists');
        return res.status(HttpStatus.OK).json({
            message: 'ambit updated',
            ambit
        })
    }


}
