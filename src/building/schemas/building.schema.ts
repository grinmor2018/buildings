import { Schema } from 'mongoose';

export const BuildingSchema = new Schema ({
    code: String,
    name: String,
    ambit: String,
    floor: Number,
    waitingroom: String,
    service: String,
    specialty: String,
    consultingroom: Number,
    room: Number,
    createdAt: { type: Date, default: Date.now }
})