import { Schema } from 'mongoose';

import { EdificiSchema } from '../../edifici/schemas/edifici.schema';


export const RespostaSchema = new Schema ({
    status: String,
    idioma: String,
    edificis: [EdificiSchema]
})