import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';

import { CreateRespostaDto } from './dto/resposta.dto';
import { RespostaService } from './resposta.service';

@Controller('respostas')
export class RespostaController {

    constructor(private respostaService: RespostaService){}
    
    // Add resposta: /respostas/create
    @Post('/create')
    async createPost(@Res() res, @Body() createRespostaDto: CreateRespostaDto){
        const resposta = await this.respostaService.createResposta(createRespostaDto);
        console.log(createRespostaDto);
        res.status(HttpStatus.OK).json({
            message: 'received',
            resposta
        });
    }

    // Get respostas /resposta
    @Get('/')
    async getrespostas(@Res() res){
        const respostas = await this.respostaService.getRespostas();
        return res.status(HttpStatus.OK).json({
            respostas
        })
    }

    // GET single resposta: /respostas/5f88792ef18c3935e8c28ec7
    @Get('/:respostaId')
    async getresposta(@Res() res, @Param('respostaId') respostaId ){
        const resposta = await this.respostaService.getResposta(respostaId);
        if (!resposta) throw new NotFoundException('resposta no existeix');
        return res.status(HttpStatus.OK).json({
            resposta
        })
    }

    // Delete resposta: /delete?respostaId=5f88792ef18c3935e8c28ec7
    @Delete('/delete')
    async deleteresposta(@Res() res, @Query('respostaId') respostaId){
        const resposta = await this.respostaService.deleteResposta(respostaId);
        if (!resposta) throw new NotFoundException('resposta no existeix');
        return res.status(HttpStatus.OK).json({
            message: 'resposta deleted',
            resposta
        })
    }

    // Update resposta: /update?respostaId=5f88792ef18c3935e8c28ec7
    @Put('/update')
    async updateresposta(@Res() res, @Body() createRespostaDto: CreateRespostaDto, @Query('respostaId') respostaId){
        const resposta = await this.respostaService.updateResposta(respostaId, createRespostaDto);
        if (!resposta) throw new NotFoundException('resposta no existeix');
        return res.status(HttpStatus.OK).json({
            message: 'resposta updated',
            resposta
        })
    }


}

