import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';

import { CreateConsultingroomDto } from './dto/consultingroom.dto';
import { ConsultingroomService } from './consultingroom.service';

@Controller('consultingrooms')
export class ConsultingroomController {

    constructor(private consultingroomService: ConsultingroomService){}
    
    // Add consultingroom: /consultingrooms/create
    @Post('/create')
    async createPost(@Res() res, @Body() createConsultingroomDto: CreateConsultingroomDto){
        const consultingrooms = await this.consultingroomService.createConsultingroom(createConsultingroomDto);
        console.log(createConsultingroomDto);
        res.status(HttpStatus.OK).json({
            message: 'received',
            consultingrooms
        });
    }

    // Get consultingrooms /consultingroom
    @Get('/')
    async getConsultingrooms(@Res() res){
        const Consultingrooms = await this.consultingroomService.getConsultingrooms();
        return res.status(HttpStatus.OK).json({
            Consultingrooms
        })
    }

    // GET single consultingrooms: /Consultingrooms/5f88792ef18c3935e8c28ec7
    @Get('/:consultingroomsId')
    async getConsultingroom(@Res() res, @Param('consultingroomsId') consultingroomsId ){
        const consultingrooms = await this.consultingroomService.getConsultingroom(consultingroomsId);
        if (!consultingrooms) throw new NotFoundException('consultingrooms not exists');
        return res.status(HttpStatus.OK).json({
            consultingrooms
        })
    }

    // Delete consultingrooms: /delete?consultingroomsId=5f88792ef18c3935e8c28ec7
    @Delete('/delete')
    async deleteConsultingroom(@Res() res, @Query('consultingroomsId') consultingroomsId){
        const consultingrooms = await this.consultingroomService.deleteConsultingroom(consultingroomsId);
        if (!consultingrooms) throw new NotFoundException('consultingrooms not exists');
        return res.status(HttpStatus.OK).json({
            message: 'consultingrooms deleted',
            consultingrooms
        })
    }

    // Update consultingrooms: /update?consultingroomsId=5f88792ef18c3935e8c28ec7
    @Put('/update')
    async updateConsultingroom(@Res() res, @Body() createConsultingroomsDto: CreateConsultingroomDto, @Query('consultingroomsId') consultingroomsId){
        const consultingrooms = await this.consultingroomService.updateConsultingroom(consultingroomsId, createConsultingroomsDto);
        if (!consultingrooms) throw new NotFoundException('consultingrooms not exists');
        return res.status(HttpStatus.OK).json({
            message: 'consultingrooms updated',
            consultingrooms
        })
    }


}