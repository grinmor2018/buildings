import { Document } from 'mongoose';

export class CreateFloorDto extends Document {
    readonly code: string;
    readonly name: string;
}