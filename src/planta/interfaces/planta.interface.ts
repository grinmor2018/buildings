import { Document } from 'mongoose';
import { Sala } from '../../sala/interfaces/sala.interface';

export interface Planta extends Document {
  numero: number;
  sala: Sala[];
}
