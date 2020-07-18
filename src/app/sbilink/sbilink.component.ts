import { Component, OnInit, Input } from '@angular/core';
import {Account} from '../account';
import { DiscoveryService } from '../discovery.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AccountReq } from '../account-req';
import { AccountModel} from '../account-model';
import { Router} from '@angular/router';
import { Location} from '@angular/common';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-sbilink',
  templateUrl: './sbilink.component.html',
  styleUrls: ['./sbilink.component.css']
})
export class SbilinkComponent implements OnInit {
  accounts: any;
  setForm: FormGroup;
  acc: string[] = [];
 //acclink= new AccountReq();

accountmodel: any;
  constructor(private readonly discoveryservice: DiscoveryService, private readonly formbuilder: FormBuilder, private readonly router: Router,
  private readonly location:Location, private readonly toastr:ToastrService) { }
 // acc: string[];
  ngOnInit() {
  this.discovery();
  this.createForm();
  }
  createForm() {
    this.setForm = this.formbuilder.group({
      roles: [] as Array<string>
    });
  }
  discovery()
  {
    this.accounts = new Array <Account>();
    this.discoveryservice.getaccount('sbi101').subscribe(data => {
    this.accounts = data;
    console.log(data);
    });
  }
  onChange(accid: string, isChecked: boolean) {
    alert(accid);
   // this.acc.push(accid);
    if(isChecked) {
    this.acc.push(accid);
    }
  }
  onSubmit()
{
  console.log(this.acc);
  const link =
  {
   fip_id : 'sbi101',
   accounts: this.acc
  };
  this.accountmodel = new Array <AccountModel>();
  this.discoveryservice.linkaccount(link).subscribe(data => {
  this.accountmodel = data;
  console.log(this.accountmodel);
  this.success();
 // this.router.navigateByUrl('/login')
});
}
link(): void
{
  this.router.navigateByUrl('/sbilink', {skipLocationChange:true}).then(()=>
  {
    this.router.navigate([decodeURI(this.location.path())]);
  });
}
success()
{
  this.toastr.success('is Successfull!', 'Linking',
    {timeOut: 2000});
}
}
