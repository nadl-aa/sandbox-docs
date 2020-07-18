import { Component, OnInit } from '@angular/core';
import { Account} from '../account';
import {DiscoveryService} from '../discovery.service';
@Component({
  selector: 'app-canara',
  templateUrl: './canara.component.html',
  styleUrls: ['./canara.component.css']
})
export class CanaraComponent implements OnInit {
  accounts: any;
  constructor(private readonly discoveryservice: DiscoveryService) { }

  ngOnInit() {
  }
  discovery()
   {
     this.accounts = new Array <Account>();
     this.discoveryservice.getaccount('canara101').subscribe(data => {
     this.accounts = data;
     console.log(data);
     });
   }

}
