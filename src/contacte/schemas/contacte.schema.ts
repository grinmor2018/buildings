import { Schema } from 'mongoose';

export const ContacteSchema = new Schema ({
    icon: String,
    nomcontacte: String,
    tipo: String,
    valor: String
})