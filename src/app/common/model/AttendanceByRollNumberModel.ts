import { ClassroomModel } from "./ClassroomModel";

export interface AttendanceByRollNumberModel {
  rollNumbers: Set<number>;
  classroom: ClassroomModel;
}
