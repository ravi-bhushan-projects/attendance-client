import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttendanceComponent } from './attendance.component';
import { TakeAttendanceComponent } from './take-attendance/take-attendance.component';
import { MatButtonModule, MatListModule } from '@angular/material';


@NgModule({
  declarations: [AttendanceComponent, TakeAttendanceComponent],
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    MatButtonModule,
    MatListModule
  ]
})
export class AttendanceModule { }
