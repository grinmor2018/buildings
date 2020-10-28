 import { Document} from 'mongoose';

 export interface Contacte extends Document {
    icon: string;
    nomcontacte: string;
    tipo: string;
    valor: string;
}