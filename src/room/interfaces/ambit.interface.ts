import { Document } from 'mongoose';

 export interface Ambit extends Document {
    readonly code: string;
    readonly name: string;
}