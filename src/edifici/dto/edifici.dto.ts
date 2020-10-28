import { CreateContacteDto } from '../../contacte/dto/contacte.dto';
import { CreateServeiDto } from '../../servei/dto/servei.dto';

export class CreateEdificiDto {
    ident: string;
    nom: string;
    adresa: string;
    imatge: string;
    lloc: string;
    contacte: CreateContacteDto[];
    serveis: CreateServeiDto[]; 
}