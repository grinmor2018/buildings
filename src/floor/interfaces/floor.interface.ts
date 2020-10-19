import { Document } from 'mongoose';

 export interface Floor extends Document {
    readonly code: string;
    readonly name: string;
}