import { Document } from 'mongoose';

export class CreateContacteDto extends Document {
    icon: string;
    nomcontacte: string;
    tipo: string;
    valor: string;
}