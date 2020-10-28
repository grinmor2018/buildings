import { Schema } from 'mongoose';

import { PlantaSchema } from '../../planta/schemas/planta.schema';

export const ServeiSchema = new Schema ({
    ambit: String,
    planta: [PlantaSchema],
    nomservei: String
})