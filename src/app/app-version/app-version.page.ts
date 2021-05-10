import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-version',
  templateUrl: './app-version.page.html',
  styleUrls: ['./app-version.page.scss'],
})
export class AppVersionPage implements OnInit {

  appVersion:String= "1.2.7";

  constructor() { }

  ngOnInit() {
  }

}
