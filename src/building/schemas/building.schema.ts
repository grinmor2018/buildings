import { Schema } from 'mongoose';

import { AmbitSchema } from '../../ambit/schemas/ambit.schema';
import { FloorSchema } from '../../floor/schemas/floor.schema';
import { WaitingroomSchema } from '../../waitingroom/schemas/waitingroom.schema';
import { ServicespecialitySchema } from '../../servicespeciality/schemas/servicespeciality.schema';
import { ConsultingroomSchema } from '../../consultingroom/schemas/consultingroom.schema';
import { RoomSchema } from '../../room/schemas/room.schema';


export const BuildingSchema = new Schema ({
    code: String,
    name: String,
    ambit: [AmbitSchema],
    floor: [FloorSchema],
    waitingroom: [WaitingroomSchema],
    servicespeciality: [ServicespecialitySchema],
    consultingroom: [ConsultingroomSchema],
    room: [RoomSchema],
    createdAt: { type: Date, default: Date.now }
})