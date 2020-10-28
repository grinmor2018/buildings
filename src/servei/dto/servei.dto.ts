import { Document } from 'mongoose';
import { CreatePlantaDto } from '../../planta/dto/planta.dto';

export class CreateServeiDto extends Document{
    ambit: string;
    planta: CreatePlantaDto[];
    nomservei: string;
}