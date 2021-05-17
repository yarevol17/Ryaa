import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { RateService } from './../services/rate.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { YearService } from './../services/year.service';
import { MajorService } from './../services/major.service';
import { LabService } from './../services/lab.service';
import { UserService } from './../services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  [x: string]: any;
  registerForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    role: new FormControl(),
    repassword: new FormControl(),
});
checkAccount: boolean = false
checkPassword: boolean = false
checkEmail: boolean = false
checkValidate: any = false
password: string = ""
rePassword: string = ""
email: string = ""
role: string = ""
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    public authService: AuthService,
    public userService: UserService,
    private router: Router
  ) {
    // this.authService.resolveUser()
  }

  ngOnInit() {
    this.authService.resolveUser();

    this.email = this.registerForm.value.email,
    this.password = this.registerForm.value.password
    this.rePassword = this.registerForm.value.repassword
    this.role = this.registerForm.value.role

  }

  goProfile(){
    this.router.navigate(['/profile/'+ AuthService.user.email]);
  }
  signOut(){
    this.authService.signout()
  }

  signUp(): void {
    this.email = this.registerForm.value.email,
    this.password = this.registerForm.value.password
    this.rePassword = this.registerForm.value.repassword
    this.role = this.registerForm.value.role
    // console.log(this.role);
    //Kiểm tra bằng rỗng
     if (this.email == "" || this.password == "" || this.rePassword == "" || this.role == null)
      this.checkValidate = true
     else
      this.checkValidate = false
     if(this.password == this.rePassword)
      this.checkPassword = false
     else
      this.checkPassword = true
    if (this.checkValidate == false && this.checkPassword == false) {
        this.authService.register(this.email, this.password).then(
          res => {
            AuthService.user = res.user
            console.log(AuthService.user.email);
            this.register_submit()
            // this.router.navigate(['/profile/'+ this.email]);

          },
          error => {
            if(error.code == "auth/email-already-in-use") this.checkEmail = true
          }
        )

      }
  }

  signIn(): void {
    //   this.checkAccount = this.getAPI(this.account);
    //   if (this.account == "" || this.password == "")
    //       this.checkValidate = true
    //     else
    //       this.checkValidate = false
    //   if (this.checkValidate == false && this.checkAccount == false)
    //     this.router.navigate(['/profile-edit']);
    // }


    this.authService.doEmailLogin(this.account.trim(), this.password).then(
      result => {
        AuthService.user = result.user
        console.log(result.user);
        this.router.navigate(['/home/']);
      },
      error => {
        console.log(error)
      }
    )
  }

  register_submit() {
    console.log(this.registerForm.value);
    this.userService
      .creatUser(this.registerForm.value)
      .subscribe((res) => console.log(res));
  }
}
