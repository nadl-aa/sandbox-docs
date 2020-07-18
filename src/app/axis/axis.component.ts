import { Component, OnInit } from '@angular/core';
import { Account} from '../account';
import { DiscoveryService} from '../discovery.service';
@Component({
  selector: 'app-axis',
  templateUrl: './axis.component.html',
  styleUrls: ['./axis.component.css']
})
export class AxisComponent implements OnInit {
   accounts: any;
  constructor(private readonly discoveryservice: DiscoveryService) { }

  ngOnInit() {
  }
  discovery()
  {
    this.accounts = new Array <Account>();
    this.discoveryservice.getaccount('axis101').subscribe(data => {
    this.accounts = data;
    console.log(data);
    });
  }

}
