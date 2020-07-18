import { Component, OnInit } from '@angular/core';
import { DiscoveryService} from '../discovery.service';
import { Account} from '../account';
@Component({
  selector: 'app-icici',
  templateUrl: './icici.component.html',
  styleUrls: ['./icici.component.css']
})
export class IciciComponent implements OnInit {
  accounts: any;
  id: 'icici101';
  constructor(private readonly discoveryservice: DiscoveryService) { }

  ngOnInit() {
  }
   discovery()
   {
     this.accounts = new Array <Account>();
     this.discoveryservice.getaccount('icici101').subscribe(data => {
     this.accounts = data;
     console.log(data);
     });
   }
}
