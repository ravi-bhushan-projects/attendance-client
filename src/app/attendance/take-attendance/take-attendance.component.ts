import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../../common/model/StudentModel';

@Component({
  selector: 'app-take-attendance',
  templateUrl: './take-attendance.component.html',
  styleUrls: ['./take-attendance.component.scss']
})
export class TakeAttendanceComponent implements OnInit {

  private students: StudentModel[];

  constructor() { }

  ngOnInit() {
  }

}
