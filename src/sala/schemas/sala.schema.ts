import { Schema } from 'mongoose';

import { ServespeSchema } from '../../servespe/schemas/servespe.schema';

export const SalaSchema = new Schema ({
    nomsala: String,
    serv_espe: [ServespeSchema],
    nanomsala: String
})