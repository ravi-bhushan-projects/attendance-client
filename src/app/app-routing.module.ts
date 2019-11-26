import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'register-student', loadChildren: () => import('./register-student/register-student.module').then(m => m.RegisterStudentModule) },
  { path: 'attendance', loadChildren: () => import('./attendance/attendance.module').then(m => m.AttendanceModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
