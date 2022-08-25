import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StartComponent } from './start/start.component';
import { TestPageComponent } from './test-page/test-page.component';
import { FinishTestComponent } from './finish-test/finish-test.component';
import { ValidationComponent } from './validation/validation.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegisterComponent } from './register/register.component';
import { PipExampleComponent } from './pip-example/pip-example.component';
import { HomeComponent } from './home/home.component';
import { LectureComponent } from './lecture/lecture.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';

import { InstloginComponent } from './instlogin/instlogin.component';

import { StudentregComponent } from './studentreg/studentreg.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { ChatComponent } from './chat/chat.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  {path:"register", component:RegisterComponent},
  {path:"login", component:LoginComponent},
  {path:"contactus", component:ContactUsComponent},
  {path:"aboutus", component:AboutUsComponent},
  { path: "pipe", component: PipExampleComponent },





  {path:"start", component:StartComponent},
  {path:"test/:questionNumber", component:TestPageComponent},
  {path:"validation", component:ValidationComponent},
  {path:"finish/:score/:maxScore/:correctAnswers", component:FinishTestComponent},
  //{path:"", redirectTo:"/login", pathMatch:"full"},
  //{ path: "**", redirectTo: "/login" },
  { path: '', component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "lectures", component: LectureComponent },
  { path: "student-dashboard", component: StudentDashboardComponent },

 
  { path: "instlogin", component: InstloginComponent },
  { path: "studentreg", component: StudentregComponent },
  { path: "studentlogin", component: StudentloginComponent },
  { path: "chat", component: ChatComponent },
  { path: "profile", component: ProfileComponent },
  {path:"view", component: ViewComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
