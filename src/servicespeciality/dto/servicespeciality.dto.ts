import { Document } from 'mongoose';

export class CreateServicespecialityDto extends Document {
    readonly code: string;
    readonly name: string;
}