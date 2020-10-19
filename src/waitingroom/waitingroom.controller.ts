import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';

import { CreateWaitingroomDto } from './dto/waitingroom.dto';
import { WaitingroomService } from './waitingroom.service';

@Controller('waitingrooms')
export class WaitingroomController {


    constructor(private waitingroomService: WaitingroomService){}
    
    // Add waitingroom: /waitingrooms/create
    @Post('/create')
    async createPost(@Res() res, @Body() createWaitingroomDto: CreateWaitingroomDto){
        const waitingroom = await this.waitingroomService.createWaitingroom(createWaitingroomDto);
        console.log(createWaitingroomDto);
        res.status(HttpStatus.OK).json({
            message: 'received',
            waitingroom
        });
    }

    // Get waitingrooms /waitingroom
    @Get('/')
    async getWaitingrooms(@Res() res){
        const waitingrooms = await this.waitingroomService.getWaitingrooms();
        return res.status(HttpStatus.OK).json({
            waitingrooms
        })
    }

    // GET single waitingroom: /waitingrooms/5f88792ef18c3935e8c28ec7
    @Get('/:waitingroomId')
    async getWaitingroom(@Res() res, @Param('waitingroomId') waitingroomId ){
        const waitingroom = await this.waitingroomService.getWaitingroom(waitingroomId);
        if (!waitingroom) throw new NotFoundException('waitingroom not exists');
        return res.status(HttpStatus.OK).json({
            waitingroom
        })
    }

    // Delete waitingroom: /delete?waitingroomId=5f88792ef18c3935e8c28ec7
    @Delete('/delete')
    async deletewaitingroom(@Res() res, @Query('waitingroomId') waitingroomId){
        const waitingroom = await this.waitingroomService.deleteWaitingroom(waitingroomId);
        if (!waitingroom) throw new NotFoundException('waitingroom not exists');
        return res.status(HttpStatus.OK).json({
            message: 'waitingroom deleted',
            waitingroom
        })
    }

    // Update waitingroom: /update?waitingroomId=5f88792ef18c3935e8c28ec7
    @Put('/update')
    async updatewaitingroom(@Res() res, @Body() createwaitingroomDto: CreateWaitingroomDto, @Query('waitingroomId') waitingroomId){
        const waitingroom = await this.waitingroomService.updateWaitingroom(waitingroomId, createwaitingroomDto);
        if (!waitingroom) throw new NotFoundException('waitingroom not exists');
        return res.status(HttpStatus.OK).json({
            message: 'waitingroom updated',
            waitingroom
        })
    }


}