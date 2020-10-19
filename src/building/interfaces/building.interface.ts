 import { Document} from 'mongoose';
 import { Ambit } from '../../ambit/interfaces/ambit.interface';
 import { Floor } from '../../floor/interfaces/floor.interface';
 import { Waitingroom } from '../../waitingroom/interfaces/waitingroom.interface';
 import { Servicespeciality } from '../../servicespeciality/interfaces/servicespeciality.interface';
 import { Consultingroom } from '../../consultingroom/interfaces/consultingroom.interface';

 export interface Building extends Document {
    readonly code: string;
    readonly name: string;
    readonly ambit: Ambit[];
    readonly floor: Floor[];
    readonly waitingroom: Waitingroom[];
    readonly servicespecialty: Servicespeciality[];
    readonly consultingroom: Consultingroom[];
    readonly room: number
}