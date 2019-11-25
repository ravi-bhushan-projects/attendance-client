import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { StudentRegisterServiceService } from "../common/service/student-register-service.service";

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.scss']
})
export class RegisterStudentComponent implements OnInit {

  private grades: string[] = [];
  private sections: string[] = [];

  private registerStudentForm = this.fb.group({
    name: [''],
    grade: [''],
    section: ['']
  });

  private classroomNames: { grade: string, section: string[] };

  constructor(private fb: FormBuilder,
              private studentRegisterService: StudentRegisterServiceService) {
  }

  ngOnInit() {
    this.fetchClassroomGrades();
  }

  onRegisterStudent() {
    if (this.registerStudentForm.valid) {
      const studentDetails = {
        name: this.registerStudentForm.get('name').value,
        grade: this.registerStudentForm.get('grade').value,
        section: this.registerStudentForm.get('section').value
      }
      this.studentRegisterService.registerStudent(studentDetails)
        .subscribe(response => {
          console.log(response);
        })
    }
  }

  fetchClassroomGrades() {
    this.studentRegisterService.fetchClassroomGrades()
      .subscribe((data: string[]) => {
        this.grades = data;
      })
  }

  onGradeSelect(grade: string) {
    this.studentRegisterService.fetchSectionByGrade(grade)
      .subscribe((data: string[]) => {
        this.sections  = data;
      })
  }

}
