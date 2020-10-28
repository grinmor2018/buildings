import { Document} from 'mongoose';
import { Contacte } from'../../contacte/interfaces/contacte.interface';
import { Servei } from'../../servei/interfaces/servei.interface';


 export interface Edifici extends Document {
    ident: string;
    nom: string;
    adresa: string;
    imatge: string;
    lloc: string;
    contacte: Contacte[];
    serveis: Servei[];
}