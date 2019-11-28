import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentRegisterModel } from '../model/StudentRegisterModel';

@Injectable({
  providedIn: 'root'
})
export class StudentRegisterServiceService {

  constructor(private httpClient: HttpClient) {
  }

  registerStudent(studentDetails: StudentRegisterModel) {
    return this.httpClient.post('/api/student', studentDetails);
  }

  getClassroomNames() {
    return this.httpClient.get('/api/classroom/names');
  }
}
