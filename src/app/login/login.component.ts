import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,FormControl,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide;
  constructor(  private readonly formBuilder: FormBuilder,private toastr: ToastrService) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.loginForm = this.formBuilder.group({
      vua: [
        '',
        [Validators.required,  Validators.minLength(6), Validators.maxLength(20)]
      ],
      password: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(20)]]
    });
  }
  register()
  {
    alert('register');
  }
  login(value)
  {
    this.toastr.success('Successfull!', 'Sign in',
    {timeOut: 2000});
  }
  }

