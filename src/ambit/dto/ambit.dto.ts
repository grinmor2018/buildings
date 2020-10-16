import { Document } from 'mongoose';

export class CreateAmbitDto extends Document {
    readonly code: string;
    readonly name: string;
}