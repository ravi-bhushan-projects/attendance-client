import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttendanceComponent } from './attendance.component';
import { TakeAttendanceComponent } from './take-attendance/take-attendance.component';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSnackBarModule
} from '@angular/material';


@NgModule({
  declarations: [AttendanceComponent, TakeAttendanceComponent],
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatMomentDateModule
  ]
})
export class AttendanceModule {
}
