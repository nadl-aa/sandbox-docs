import { Component, OnInit } from '@angular/core';
import { DiscoveryService } from '../discovery.service';
import { ConsentResponse } from '../consent-response';
@Component({
  selector: 'app-consent-details',
  templateUrl: './consent-details.component.html',
  styleUrls: ['./consent-details.component.css']
})
export class ConsentDetailsComponent implements OnInit {
  consents:any;
  constructor(private readonly discoveryservice: DiscoveryService) { }

  ngOnInit() {
    this.discovery();
  }
  discovery()
  {
    this.consents = new ConsentResponse();
    this.discoveryservice.getconsent().subscribe(data => {
    this.consents = data;
    console.log(this.consents);
    });
  }
}
