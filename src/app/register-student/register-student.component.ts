import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentRegisterServiceService } from '../common/service/student-register-service.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.scss']
})
export class RegisterStudentComponent implements OnInit {

  private grades: string[];
  private sections: string[];

  private registerStudentForm: FormGroup;

  constructor(private fb: FormBuilder,
              private studentRegisterService: StudentRegisterServiceService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.fetchClassroomGrades();
    this.initRegisterStudentForm();
  }

  initRegisterStudentForm() {
    this.registerStudentForm = this.fb.group({
      name: [''],
      grade: [''],
      section: ['']
    });
  }

  onRegisterStudent() {
    if (this.registerStudentForm.valid) {
      const studentDetails = {
        name: this.registerStudentForm.get('name').value,
        grade: this.registerStudentForm.get('grade').value,
        section: this.registerStudentForm.get('section').value
      };
      this.studentRegisterService.registerStudent(studentDetails)
        .subscribe(response => {
          this.snackBar.open(`Student Registered Successfully!!`, 'DISMISS', {
            duration: 2000,
          });
          console.log(response);
          this.initRegisterStudentForm();
        });
    }
  }

  fetchClassroomGrades() {
    this.studentRegisterService.fetchClassroomGrades()
      .subscribe((data: string[]) => {
        this.grades = data;
      });
  }

  onGradeSelect(grade: string) {
    this.studentRegisterService.fetchSectionByGrade(grade)
      .subscribe((data: string[]) => {
        this.sections = data;
      });
  }

}
