import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';

import { CreateRoomDto } from './dto/room.dto';
import { RoomService } from './room.service';

@Controller('rooms')
export class RoomController {

    constructor(private roomService: RoomService){}
    
    // Add room: /rooms/create
    @Post('/create')
    async createPost(@Res() res, @Body() createRoomDto: CreateRoomDto){
        const room = await this.roomService.createRoom(createRoomDto);
        console.log(createRoomDto);
        res.status(HttpStatus.OK).json({
            message: 'received',
            room
        });
    }

    // Get rooms /room
    @Get('/')
    async getRooms(@Res() res){
        const rooms = await this.roomService.getRooms();
        return res.status(HttpStatus.OK).json({
            rooms
        })
    }

    // GET single room: /rooms/5f88792ef18c3935e8c28ec7
    @Get('/:roomId')
    async getRoom(@Res() res, @Param('roomId') roomId ){
        const room = await this.roomService.getRoom(roomId);
        if (!room) throw new NotFoundException('room not exists');
        return res.status(HttpStatus.OK).json({
            room
        })
    }

    // Delete room: /delete?roomId=5f88792ef18c3935e8c28ec7
    @Delete('/delete')
    async deleteRoom(@Res() res, @Query('roomId') roomId){
        const room = await this.roomService.deleteRoom(roomId);
        if (!room) throw new NotFoundException('room not exists');
        return res.status(HttpStatus.OK).json({
            message: 'room deleted',
            room
        })
    }

    // Update room: /update?roomId=5f88792ef18c3935e8c28ec7
    @Put('/update')
    async updateRoom(@Res() res, @Body() createRoomDto: CreateRoomDto, @Query('roomId') roomId){
        const room = await this.roomService.updateRoom(roomId, createRoomDto);
        if (!room) throw new NotFoundException('room not exists');
        return res.status(HttpStatus.OK).json({
            message: 'room updated',
            room
        })
    }


}
