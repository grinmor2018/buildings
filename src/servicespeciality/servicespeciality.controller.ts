import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';

import { CreateServicespecialityDto } from './dto/servicespeciality.dto';
import { ServicespecialityService } from './servicespeciality.service';

@Controller('servicespecialities')
export class ServicespecialityController {


    constructor(private servicespecialityService: ServicespecialityService){}
    
    // Add servicespeciality: /servicespeciality/create
    @Post('/create')
    async createPost(@Res() res, @Body() createservicespecialityDto: CreateServicespecialityDto){
        const servicespeciality = await this.servicespecialityService.createServicespeciality(createservicespecialityDto);
        console.log(createservicespecialityDto);
        res.status(HttpStatus.OK).json({
            message: 'service/spaciality created',
            servicespeciality
        });
    }

    // Get servicespeciality /servicespeciality
    @Get('/')
    async getServicespacialities(@Res() res){
        const servicespeciality = await this.servicespecialityService.getServicespecialities();
        return res.status(HttpStatus.OK).json({
            servicespeciality
        })
    }

    // GET single servicespeciality: /servicespeciality/5f88792ef18c3935e8c28ec7
    @Get('/:servicespecialityId')
    async getServicespeciality(@Res() res, @Param('servicespecialityId') servicespecialityId ){
        const servicespeciality = await this.servicespecialityService.getServicespeciality(servicespecialityId);
        if (!servicespeciality) throw new NotFoundException('servicespeciality not exists');
        return res.status(HttpStatus.OK).json({
            servicespeciality
        })
    }

    // Delete servicespeciality: /delete?servicespecialityId=5f88792ef18c3935e8c28ec7
    @Delete('/delete')
    async deleteServicespeciality(@Res() res, @Query('servicespecialityId') servicespecialityId){
        const servicespeciality = await this.servicespecialityService.deleteServicespeciality(servicespecialityId);
        if (!servicespeciality) throw new NotFoundException('servicespeciality not exists');
        return res.status(HttpStatus.OK).json({
            message: 'service/speciality deleted',
            servicespeciality
        })
    }

    // Update servicespeciality: /update?servicespecialityId=5f88792ef18c3935e8c28ec7
    @Put('/update')
    async updateServicespeciality(@Res() res, @Body() createServicespecialityDto: CreateServicespecialityDto, @Query('servicespecialityId') servicespecialityId){
        const servicespeciality = await this.servicespecialityService.updateServicespeciality(servicespecialityId, createServicespecialityDto);
        if (!servicespeciality) throw new NotFoundException('service/speciality not exists');
        return res.status(HttpStatus.OK).json({
            message: 'service/speciality updated',
            servicespeciality
        })
    }


}