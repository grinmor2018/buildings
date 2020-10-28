import { Document } from 'mongoose';
import { Servespe } from '../../servespe/interfaces/servespe.interface';

export interface Sala extends Document {
  nomsala: string;
  serv_espe: Servespe[];
  nanomsala: string;
}
