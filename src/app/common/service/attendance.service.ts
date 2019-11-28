import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AttendanceByRollNumberModel } from "../model/AttendanceByRollNumberModel";

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private httpClient: HttpClient) { }

  saveAttendanceByRegistration(studentRegistrationNumbers: number[]) {
    return this.httpClient.post(`/api/attendance/registrationNumbers`, studentRegistrationNumbers);
  }

  saveAttendanceByRoll(studentDetails: AttendanceByRollNumberModel) {
    return this.httpClient.post(`/api/attendance/rollNumbers`, studentDetails);
  }
}
