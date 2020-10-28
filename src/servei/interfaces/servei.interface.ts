import { Document } from 'mongoose';
import { Planta } from '../../planta/interfaces/planta.interface';

export interface Servei extends Document {
  ambit: string;
  planta: Planta[];
  nomservei: string;
}
