import { Document } from 'mongoose';
import { CreateContacteDto } from '../../contacte/dto/contacte.dto';
import { CreateServeiDto } from '../../servei/dto/servei.dto';

export class CreateEdificiDto extends Document{
    ident: string;
    nom: string;
    adresa: string;
    imatge: string;
    lloc: string;
    contacte: CreateContacteDto[];
    serveis: CreateServeiDto[]; 
}