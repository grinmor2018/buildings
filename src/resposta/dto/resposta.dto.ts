import { CreateEdificiDto } from '../..//edifici/dto/edifici.dto';

export class CreateRespostaDto {
    status: string;
    idioma: string;
    edificis: CreateEdificiDto[];
}