import { Schema } from 'mongoose';

export const AmbitSchema = new Schema ({
    code: String,
    name: String,
    createdAt: { type: Date, default: Date.now }
})