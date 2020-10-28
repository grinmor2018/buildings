import { Document } from 'mongoose';
import { CreateServespeDto } from '../../servespe/dto/servespe.dto';

export class CreateSalaDto extends Document {
    nomsala: string;
    serv_espe: CreateServespeDto[];
    nanomsala: string;  
}