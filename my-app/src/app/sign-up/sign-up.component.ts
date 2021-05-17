import { AuthService } from './../services/auth.service';
import { UserService } from './../services/user.service';
import { Component, OnInit, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
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
  Fid: string = ""
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) {
    this.authService.resolveUser()
   }

  ngOnInit() {
    // this.activatedRoute.params.subscribe((Fid) => {
    //   this.Fid = Fid['id'];
    //   // put user service get user by id here
    //   console.log(this.Fid);

    // });
    this.email = this.registerForm.value.email,
    this.password = this.registerForm.value.password
    this.rePassword = this.registerForm.value.repassword
    this.role = this.registerForm.value.role

  }

  signUp(): void {
    this.email = this.registerForm.value.email,
    this.password = this.registerForm.value.password
    this.rePassword = this.registerForm.value.repassword
    this.role = this.registerForm.value.role
    console.log(this.role);
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
            // this.addFId()
            this.router.navigate(['/profile/'+ this.email]);

          },
          error => {
            if(error.code == "auth/email-already-in-use") this.checkEmail = true
          }
        )

}
  }
  register_submit() {
    console.log(this.registerForm.value);
    this.userService
      .creatUser(this.registerForm.value)
      .subscribe((res) => console.log(res));

  }
  // addFId() {
  //   console.log(AuthService.user.l);
  //   console.log(this.email);
  //   // this.Fid = AuthService.user.l
  //   this.userService
  //     .addFId(this.email, AuthService.user.l)
  // }
}
