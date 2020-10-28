import { Schema } from 'mongoose';

import { ServeiSchema } from '../../servei/schemas/servei.schema';
import { ContacteSchema } from '../../contacte/schemas/contacte.schema';


export const EdificiSchema = new Schema ({
    ident: String,
    nom: String,
    adresa: String,
    imatge: String,
    lloc: String,
    contacte: [ContacteSchema],
    serveis: [ServeiSchema]
})