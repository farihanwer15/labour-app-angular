import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServices } from '../../auth-service';
import { NotificationService } from 'src/app/services/notification-service';
import { LocalStoreService } from 'src/app/services/local-store-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 loading: false;
  loginForm: FormGroup;
  constructor(private authService: AuthServices,
     private formBuilder: FormBuilder,
      private router: Router ,
      private notification: NotificationService,
      private localStore: LocalStoreService) { }

  ngOnInit(): void {
    this.userLogin();
  }

  userLogin() {
    this.loginForm = this.formBuilder.group({
      phone: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  login() {
      this.loading = false
    this.authService.loginUser(this.loginForm.value).subscribe((res)=>{
      console.log("res",res);
      this.localStore.setAccessToken(res.accessToken);
      console.log("res",res)
      setTimeout(() => {
        this.notification.show("Login Succesfully")
        this.router.navigate(['/dashboard'])
      }, 2000);
      this.loading = false
    }, err=> {
       console.log("login err", err); this.notification.show("Something went wrong") });
  }

}
