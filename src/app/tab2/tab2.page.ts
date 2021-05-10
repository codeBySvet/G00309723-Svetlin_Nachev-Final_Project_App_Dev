import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  myMood:string="How are you feeling?"
  moodStatus:string;

  constructor(private Storage:Storage) {}


ngOnInit(){

  //gets the current value of the mood from strorage, mood is set on the "Mood" page of the app
  this.Storage.get("mood")
  .then((data)=>{
    this.myMood=data;}
  )
}

}


