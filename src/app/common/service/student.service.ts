import { Injectable } from '@angular/core';
import { StudentModel } from '../model/StudentModel';
import { HttpClient } from '@angular/common/http';
import { ClassroomModel } from "../model/ClassroomModel";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: StudentModel[];

  constructor(private httpClient: HttpClient) { }

  fetchClassroomGrades() {
    return this.httpClient.get('/api/classroom/grade');
  }

  fetchSectionByGrade(grade: string) {
    return this.httpClient.get(`/api/classroom/grade/${grade}`);
  }

  fetchStudents(classroom: ClassroomModel) {
    return this.httpClient.get<StudentModel[]>(`/api/student/${classroom.grade}/${classroom.section}`);
  }
}
