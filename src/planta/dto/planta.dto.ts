import { Document } from 'mongoose';
import { CreateSalaDto } from '../../sala/dto/sala.dto';

export class CreatePlantaDto extends Document {
    numero: number;
    sala: CreateSalaDto[];
}