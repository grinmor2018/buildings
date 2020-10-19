import { Document } from 'mongoose';

 export interface Consultingroom extends Document {
    readonly code: string;
    readonly name: string;
}