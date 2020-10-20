import { Schema } from 'mongoose';

export const RoomSchema = new Schema ({
    code: String,
    name: String,
    createdAt: { type: Date, default: Date.now }
})