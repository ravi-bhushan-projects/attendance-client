import { Injectable } from '@angular/core';
import { StudentModel } from '../model/StudentModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: StudentModel[];

  constructor(private httpClient: HttpClient) { }
}
