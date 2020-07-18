import { Component, OnInit, Input } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  selectedTab='Assets';
  constructor() { }
 @Input() accmodel: any[];
  ngOnInit() {
  }

}
