import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class QuoteGeneratorService {

  constructor(private httpClient: HttpClient) { }

  getQuote(){
    return this.httpClient.get("https://type.fit/api/quotes");
  }
}
