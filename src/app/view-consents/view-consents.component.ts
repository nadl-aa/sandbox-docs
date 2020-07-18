import { Component, OnInit } from '@angular/core';
import { DiscoveryService } from '../discovery.service';
import { ConsentResponse } from '../consent-response';
@Component({
  selector: 'app-view-consents',
  templateUrl: './view-consents.component.html',
  styleUrls: ['./view-consents.component.css']
})
export class ViewConsentsComponent implements OnInit {
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
active()
{
  alert('hai');
}
}
