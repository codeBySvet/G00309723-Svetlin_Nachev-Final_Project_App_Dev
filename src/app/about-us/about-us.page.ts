import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {


  developers:string[]=[
    "Svetlin Nachev",
    "Joe blob",
    "John Doe",
    "Jane Doe"
  ];

  constructor() { }

  ngOnInit() {
  }

}
