 import { Document} from 'mongoose';

 export interface Building extends Document {
    readonly code: string;
    readonly name: string;
    readonly ambit: string;
    readonly floor: number;
    readonly waitingroom: string;
    readonly service: string;
    readonly specialty: string;
    readonly consultingroom: number;
    readonly room: number
}