import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';

import { CreateContacteDto } from './dto/contacte.dto';
import { ContacteService } from './contacte.service';

@Controller('contacte')
export class ContacteController {

    constructor(private contacteService: ContacteService){}
    
    // Add contacte: /contactes/create
    @Post('/create')
    async createPost(@Res() res, @Body() createContacteDto: CreateContacteDto){
        const contacte = await this.contacteService.createcontacte(createContacteDto);
        console.log(createContacteDto);
        res.status(HttpStatus.OK).json({
            message: 'received',
            contacte
        });
    }

    // Get contactes /contacte
    @Get('/')
    async getcontactes(@Res() res){
        const contactes = await this.contacteService.getcontactes();
        return res.status(HttpStatus.OK).json({
            contactes
        })
    }

    // Get single contacte: /contactes/5f88792ef18c3935e8c28ec7
    @Get('/:contacteId')
    async getcontacte(@Res() res, @Param('contacteId') contacteId ){
        const contacte = await this.contacteService.getcontacte(contacteId);
        if (!contacte) throw new NotFoundException('contacte not exists');
        return res.status(HttpStatus.OK).json({
            contacte
        })
    }

    // Delete contacte: /delete?contacteId=5f88792ef18c3935e8c28ec7
    @Delete('/delete')
    async deletecontacte(@Res() res, @Query('contacteId') contacteId){
        const contacte = await this.contacteService.deletecontacte(contacteId);
        if (!contacte) throw new NotFoundException('contacte no existeix');
        return res.status(HttpStatus.OK).json({
            message: 'contacte deleted',
            contacte
        })
    }

    // Update contacte: /update?contacteId=5f88792ef18c3935e8c28ec7
    @Put('/update')
    async updatecontacte(@Res() res, @Body() createContacteDto: CreateContacteDto, @Query('contacteId') contacteId){
        const contacte = await this.contacteService.updatecontacte(contacteId, createContacteDto);
        if (!contacte) throw new NotFoundException('contacte no existeix');
        return res.status(HttpStatus.OK).json({
            message: 'contacte updated',
            contacte
        })
    }


}
