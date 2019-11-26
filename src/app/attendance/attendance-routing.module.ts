import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AttendanceComponent } from './attendance.component';
import { TakeAttendanceComponent } from './take-attendance/take-attendance.component';

const routes: Routes = [
  {
    path: '', component: AttendanceComponent, children: [
      { path: 'take', component: TakeAttendanceComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule {
}
