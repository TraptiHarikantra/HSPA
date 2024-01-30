import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { AlertifyService } from 'src/Services/alertify.service';
import { UserService } from 'src/Services/user.service';
import { User } from 'src/app/model/user';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  AddUserRegForm:FormGroup
  user: User;
  userSubmitted: boolean
  constructor(private fb: FormBuilder, 
    private userService:UserService,
    private alertify:AlertifyService ) { }


  ngOnInit() {
    this.createRegistrationForm();
    
    // this.AddUserRegForm = new FormGroup({
    //   userName: new FormControl("", [Validators.required]),
    //   email: new FormControl("", [Validators.required, Validators.email]),
    //   password: new FormControl("", [Validators.required, Validators.minLength(8)]),
    //   confirmPassword: new FormControl("", [Validators.required]),
    //   mobile: new FormControl("", [Validators.minLength(10)])
    // }, this.passwordMatchFunction);
  }

  createRegistrationForm(){
  this.AddUserRegForm = this.fb.group({
    userName: [null, Validators.required],
    email: [null, [Validators.required,Validators.email]],
    password: [null, [Validators.required, Validators.minLength]],
    confirmPassword: [null, Validators.required],
    mobile: [null, Validators.minLength]
  }, {validators: [this.passwordMatchFunction]});
}

  passwordMatchFunction(fg: FormGroup): Validators | null {
    return fg.get('password')?.value === fg.get('confirmPassword')?.value ? null : 
    { notMatched:true }
  }

  get userName() {
    return this.AddUserRegForm.get('userName') as FormControl
  }

  get email() {
    return this.AddUserRegForm.get('email') as FormControl
  }

  get password(){
    return this.AddUserRegForm.get('password') as FormControl
  }

  get confirmPassword(){
    return this.AddUserRegForm.get('confirmPassword') as FormControl
  }

  get mobile(){
    return this.AddUserRegForm.get('mobile') as FormControl
  }

  userData(): User {
    return this.user = {
    userName: this.userName.value,
    email: this.email.value,
    password: this.password.value,
    confirmPassword: this.confirmPassword.value,
    mobile: this.mobile.value
    }
  }

  onSubmit() {
    console.log(this.AddUserRegForm);
    this.userSubmitted = true;
    if(this.AddUserRegForm.valid) {
    //this.user = Object.assign(this.user, this.AddUserRegForm?.value);
    this.user = this.userData();
    this.userService.addUser(this.user);
    this.AddUserRegForm.reset();
    this.userSubmitted = false;
    this.alertify.success('congrats, you are registered');
    }
    else{
      this.alertify.error('kindly provide the required details');
    }
  }
}
