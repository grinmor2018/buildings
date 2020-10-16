import { CreateAmbitDto } from '../../ambit/dto/ambit.dto';


export class CreateBuildingDto {
    readonly code: string;
    readonly name: string;
    readonly ambit: CreateAmbitDto[];
    readonly floor: number;
    readonly waitingroom: string;
    readonly service: string;
    readonly specialty: string;
    readonly consultingroom: number;
    readonly room: number
}