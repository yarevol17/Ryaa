import { Component, OnInit, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  account: string = ""
  password: string = ""
  email: string = ""
  checkAccount: boolean = false
  checkValidate: any = false

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private readonly authService: AuthService
  ) { }

  ngOnInit() {
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

  //   getAPI(account: any): any {
  //   if (this.account == "quynh" && this.password == "123456")
  //     return false
  //   return true
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
}
