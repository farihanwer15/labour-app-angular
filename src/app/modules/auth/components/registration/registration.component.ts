import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServices } from '../../auth-service';
import { getUserType } from '../../../../services/get-user-type-service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  result: any = [];
  registrationForm: FormGroup;
  constructor(private authService: AuthServices, private formBuilder: FormBuilder,
    private router: Router, private getUserService: getUserType) { }

  ngOnInit(): void {
    this.createUser();
    this.getUserType();
  }

  getUserType() {
    this.getUserService.getUser().subscribe((res) => {
      this.result = res;
      console.log(" result", this.result);
    })
  }
  createUser() {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      type_id: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }
  signUp () {
    this.authService.createUser(this.registrationForm.value).subscribe((res)=>{
      console.log("result",res);
      this.router.navigate(['/login'])
    });
  }
}
