import { Document } from 'mongoose';

 export interface Room extends Document {
    readonly code: string;
    readonly name: string;
}