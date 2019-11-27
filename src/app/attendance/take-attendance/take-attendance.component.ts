import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../../common/model/StudentModel';
import { StudentService } from "../../common/service/student.service";
import { ClassroomModel } from "../../common/model/ClassroomModel";
import { MatListOption } from "@angular/material/list";
import { AttendanceService } from "../../common/service/attendance.service";

@Component({
  selector: 'app-take-attendance',
  templateUrl: './take-attendance.component.html',
  styleUrls: ['./take-attendance.component.scss']
})
export class TakeAttendanceComponent implements OnInit {

  private students: StudentModel[] = [];
  private classroom: ClassroomModel = {
    grade: '1',
    section: 'A'
  };
  private tests: string[] = ["a", "b", "c"];

  constructor(private studentService: StudentService,
              private attendanceService: AttendanceService) {
  }

  ngOnInit() {
    this.studentService.fetchStudents(this.classroom).subscribe(data => {
      this.students = data;
    })
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
    this.attendanceService.saveAttendance(selectedStudentRegistrationNumber)
      .subscribe(data => {
        console.log(data);
      })
  }

}
