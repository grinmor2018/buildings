 import { Document} from 'mongoose';
 import { Ambit } from './ambit.interface';

 export interface Building extends Document {
    readonly code: string;
    readonly name: string;
    readonly ambit: Ambit[];
    readonly floor: number;
    readonly waitingroom: string;
    readonly service: string;
    readonly specialty: string;
    readonly consultingroom: number;
    readonly room: number
}