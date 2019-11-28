import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../../common/model/StudentModel';
import { StudentService } from "../../common/service/student.service";
import { ClassroomModel } from "../../common/model/ClassroomModel";
import { MatListOption } from "@angular/material/list";
import { AttendanceService } from "../../common/service/attendance.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-take-attendance',
  templateUrl: './take-attendance.component.html',
  styleUrls: ['./take-attendance.component.scss']
})
export class TakeAttendanceComponent implements OnInit {

  private students: StudentModel[] = [];
  private grades: string[];
  private sections: string[];

  constructor(private studentService: StudentService,
              private attendanceService: AttendanceService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.fetchClassroomGrades();
  }

  onAttendanceSubmit(selectedStudentsMatList: MatListOption[]) {
    let selectedStudent: StudentModel[] = [];
    selectedStudentsMatList.forEach(student => {
      selectedStudent.push(student.value);
    });
    let selectedStudentRegistrationNumber: number[] = [];
    selectedStudent.forEach(student => {
      selectedStudentRegistrationNumber.push(student.registrationNumber);
    });
    this.attendanceService.saveAttendanceByRegistration(selectedStudentRegistrationNumber)
      .subscribe(data => {
        this.snackBar.open(`Attendance Taken Successfully!!`, 'DISMISS', {
          duration: 2000,
        });
        console.log(data);
      });
  }

  onGradeSelect(grade: string) {
    this.studentService.fetchSectionByGrade(grade)
      .subscribe((data: string[]) => {
        this.sections = data;
      });
  }

  fetchClassroomGrades() {
    this.studentService.fetchClassroomGrades()
      .subscribe((data: string[]) => {
        this.grades = data;
      });
  }

  onSectionSelected(grade: string, section: string) {
    const classroom: ClassroomModel = {
      grade: grade,
      section: section
    };
    this.studentService.fetchStudents(classroom)
      .subscribe(data => {
        this.students = data;
      });
  }
}
