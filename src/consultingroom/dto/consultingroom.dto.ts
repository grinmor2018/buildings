import { Document } from 'mongoose';

export class CreateConsultingroomDto extends Document {
    readonly code: string;
    readonly name: string;
}