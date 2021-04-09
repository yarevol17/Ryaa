import { YearService } from './services/year.service';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileVisitComponent } from './profile-visit/profile-visit.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { VoteComponent } from './vote/vote.component';
import { AddClassComponent } from './add-class/add-class.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    ProfileComponent,
    ProfileVisitComponent,
    FeedbackComponent,
    ProfileEditComponent,
      VoteComponent,
      AddClassComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule
  ],
  providers: [
    YearService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
