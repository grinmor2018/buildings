import { Schema } from 'mongoose';
import { type } from 'os';
import { AmbitSchema } from './ambit.schema';


export const BuildingSchema = new Schema ({
    code: String,
    name: String,
    ambit: [AmbitSchema],
    floor: Number,
    waitingroom: String,
    service: String,
    specialty: String,
    consultingroom: Number,
    room: Number,
    createdAt: { type: Date, default: Date.now }
})