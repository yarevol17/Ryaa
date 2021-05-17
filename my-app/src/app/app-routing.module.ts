import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileVisitComponent } from './profile-visit/profile-visit.component';
import { AddClassComponent } from './add-class/add-class.component';
// import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  // { path: 'profile-edit', component: ProfileEditComponent },
  { path: 'profile/:email', component: ProfileVisitComponent },
  { path: 'add-class', component: AddClassComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
