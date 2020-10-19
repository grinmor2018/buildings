import { Schema } from 'mongoose';

export const ServicespecialitySchema = new Schema ({
    code: String,
    name: String,
    createdAt: { type: Date, default: Date.now }
})