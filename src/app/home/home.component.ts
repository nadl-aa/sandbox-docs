import { Component, OnInit,ViewChild, NgModule } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DateAdapter, MAT_DATE_FORMATS, MatFormField, MatSelectModule, FEB } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/shared/date.adapter';
import { Router} from '@angular/router';
import{ NgbDateCustomParserFormatter} from 'src/shared/NgbDateCustomParserFormatter';
import { ToastrService } from 'ngx-toastr';
import {NgbDateStruct, NgbCalendar, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
export interface Subject {
  name: string;
}
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: APP_DATE_FORMATS
    },
    {
      provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter
    }
  ]
})
export class HomeComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  myForm: FormGroup;
  modal:NgbDateStruct;
  @ViewChild('chipList', { static: true }) chipList;
  GradeArray: any = ['8th Grade', '9th Grade', '10th Grade', '11th Grade', '12th Grade'];
  SubjectsArray: Subject[] = [];
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  dates = [];
  months =['Jan','Feb','March','April', 'May','June','July','August','September','October','November','December']
  selected: string;
  constructor(public fb: FormBuilder, private readonly router:Router, private toastr: ToastrService) {}

  ngOnInit() {
    this.createform();

  }

  /* Reactive form */
  reactiveForm() {
    for (let index = 1; index <=31; index++) {
      this.dates.push(index);
    }
  }
    createform()
    {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
      dateOfbirth: ['', [Validators.required]],
      mobile: [
        '',
        [Validators.required, Validators.minLength(10), Validators.maxLength(10)]
      ],
      email: ['', [Validators.required, Validators.email]]
    });

  }

  /* Date */


  /* Handle form errors in Angular 8 */
  public errorHandling = (control: string, error: string) => {
    return this.myForm.controls[control].hasError(error);
  }

  submitForm() {
  //  console.log(this.myForm.value)
    //alert("submitted successfully");
    this.router.navigateByUrl('/banks');
  }
  registerUser(value)
  {
    this.toastr.success('Successfull!', 'Registration',
    {timeOut: 2000});
  }

}
