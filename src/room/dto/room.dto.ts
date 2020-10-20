import { Document } from 'mongoose';

export class CreateRoomDto extends Document {
    readonly code: string;
    readonly name: string;
}