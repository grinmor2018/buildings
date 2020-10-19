import { Document } from 'mongoose';

export class CreateWaitingroomDto extends Document {
    readonly code: string;
    readonly name: string;
}