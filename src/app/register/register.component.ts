import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   name: string;
   email: string;
   mobile: string;
  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }
  save()
  {
    this.toastr.success('Successfull!', 'Registration',
    {timeOut: 2000});
  }
  }

