import { Component, OnInit } from '@angular/core';
import {DiscoveryService} from '../discovery.service';
import { Account } from '../account';
import { Router} from '@angular/router';
@Component({
  selector: 'app-sbi',
  templateUrl: './sbi.component.html',
  styleUrls: ['./sbi.component.css']
})
export class SbiComponent implements OnInit {
  accounts: Account[];
  account: Account [];
  constructor(private readonly discoveryservice: DiscoveryService, private readonly router: Router) { }
  id: string;
  ngOnInit() {
  }
  discovery()
  {
    this.discoveryservice.getaccount('sbi101').subscribe(data => {
     this.accounts = data;
     console.log(JSON.stringify(this.accounts));
  });
}
  discover()
  {
    this.router.navigateByUrl('/sbilink');
}
}


