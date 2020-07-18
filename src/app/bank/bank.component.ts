import { Component, OnInit, ViewChild } from '@angular/core';
import { Router} from '@angular/router';
import { SbilinkComponent } from '../sbilink/sbilink.component';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  @ViewChild(SbilinkComponent,{static:false}) child;
  constructor(private readonly router: Router) { }
  accountmodel :any=[];
  myControl = new FormControl();
  options: string[]= ['SBI','ICICI','CANARA','AXIS'];
  filteredOptions: Observable<string[]>;
  ngOnInit() {

    this.accountmodel=this.child.accountmodel;
    console.log(this.accountmodel);
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  sbi()
  {
    this.router.navigateByUrl('/sbi');
  }
  canara()
  {
    this.router.navigateByUrl('/canara');
  }
  axis()
  {
    this.router.navigateByUrl('/axis');
  }
  icici()
  {
    this.router.navigateByUrl('/icici');
  }
}
