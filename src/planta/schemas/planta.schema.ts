import { Schema } from 'mongoose';

import { SalaSchema } from '../../sala/schemas/sala.schema';

export const PlantaSchema = new Schema ({
    numero: Number,
    sala: [SalaSchema]
})