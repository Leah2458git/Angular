import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { StudentListComponent } from './module/students/student-list/student-list.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TeachersComponent } from './teachers/teachers.component';
import { AuthGuardService } from './auth-guard.service';

const APP_ROUTES:Route[]=[
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"students" , component:StudentListComponent},
  {path:"students/:id" , component:StudentListComponent},
  {path:"teachers", component:TeachersComponent,canActivate:[AuthGuardService]},
  {path:"**", component:PageNotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
