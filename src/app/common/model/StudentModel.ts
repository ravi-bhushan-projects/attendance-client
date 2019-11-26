import { ClassroomModel } from './ClassroomModel';

export interface StudentModel {
  registrationNumber: number;
  name: string;
  classroom: ClassroomModel;
}
