import { Component } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import {QuoteGeneratorService} from '../Services/quote-generator.service'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  max:number=50;
  randomNum:number;

  quoteBody:string;
  quoteAuthor:string;
  hidden=true;

  constructor(private httpClient:HttpClient, private quoteGeneratorService:QuoteGeneratorService) {}
  
  getQuote(){

    //generates a random number every time the function is run (which is when the button is clicked). Max possible number is 50
    this.randomNum=Math.floor(Math.random() * this.max) + 1; 

    //HTTP request is made and the data is retireved. This is a very big array of quotes and authors
    this.quoteGeneratorService.getQuote().subscribe((data)=>{

      //The random number is used to randomly pick out a quote from the large json data which is retrieved
      this.quoteBody=data[this.randomNum].text;
      this.quoteAuthor=data[this.randomNum].author

      this.hidden=false;
    })
  }
}
