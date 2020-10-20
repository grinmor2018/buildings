import { CreateAmbitDto } from '../../ambit/dto/ambit.dto';
import { CreateFloorDto } from '../../floor/dto/floor.dto';
import { CreateWaitingroomDto } from '../../waitingroom/dto/waitingroom.dto';
import { CreateServicespecialityDto } from '../../servicespeciality/dto/servicespeciality.dto';
import { CreateConsultingroomDto } from '../../consultingroom/dto/consultingroom.dto';
import { CreateRoomDto } from '../../room/dto/room.dto';


export class CreateBuildingDto {
    readonly code: string;
    readonly name: string;
    readonly ambit: CreateAmbitDto[];
    readonly floor: CreateFloorDto[];
    readonly waitingroom: CreateWaitingroomDto[];
    readonly servicespeciality: CreateServicespecialityDto[];
    readonly consultingroom: CreateConsultingroomDto[];
    readonly room: CreateRoomDto[];
}