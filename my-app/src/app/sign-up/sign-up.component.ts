import { AuthService } from './../services/auth.service';
import { Component, OnInit, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  checkAccount: boolean = false
  checkPassword: boolean = false
  checkEmail: boolean = false
  checkValidate: any = false
  password: string = ""
  rePassword: string = ""
  email: string = ""
  student: any = ""
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private readonly authService: AuthService
  ) { }

  ngOnInit() {
  }

  signUp(): void {
    console.log(this.student);
    //Kiểm tra bằng rỗng
     if (this.email == "" || this.password == "" || this.rePassword == "" || this.student =="")
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
            this.router.navigate(['/profile/'+ AuthService.user.uid]);
          },
          error => {
            if(error.code == "auth/email-already-in-use") this.checkEmail = true
          }
        )

    // this.checkAccount = this.getAPI(this.account);
    // if (this.checkValidate == false && this.checkAccount == false)
    //   this.router.navigate(['/profile-edit']);

  // getAPI(account: any): any {
  //   if (account == "quynh")
  //     return true
  //     return false
  // }

}
  }}
