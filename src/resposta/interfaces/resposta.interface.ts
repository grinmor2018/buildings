import { Document} from 'mongoose';
import { Edifici } from'../../edifici/interfaces/edifici.interface';



 export interface Resposta extends Document {
    status: string;
    idioma: string;
    edificis: Edifici[];
}