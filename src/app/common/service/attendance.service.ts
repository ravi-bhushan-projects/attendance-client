import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private httpClient: HttpClient) { }

  saveAttendance(studentRegistrationNumbers: number[]) {
    return this.httpClient.post(`/api/attendance`, studentRegistrationNumbers);
  }
}
