import { Document } from 'mongoose';

 export interface Waitingroom extends Document {
    readonly code: string;
    readonly name: string;
}