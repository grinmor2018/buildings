import { Schema } from 'mongoose';

export const FloorSchema = new Schema ({
    code: String,
    name: String,
    createdAt: { type: Date, default: Date.now }
})