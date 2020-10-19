import { Schema } from 'mongoose';

export const WaitingroomSchema = new Schema ({
    code: String,
    name: String,
    createdAt: { type: Date, default: Date.now }
})