import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../Services/weather.service'
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  //declaring variables related to the intro message at the top of the homepage
  myDate: any = new Date();
  time: number;
  titleMessage: string;
  paragraph: string;

  //declaring variables related to the weather section of the homepage
  weatherData: any = [];
  temp: number;
  humidity: number;
  windSpeed: number;
  description: string;
  userMood: string;
  iconUrl: string;
  
  hidden = true;

  constructor(private weatherService: WeatherService, private Storage: Storage) { }

  ngOnInit() {

    this.weatherService.GetWeatherData().subscribe(
      (data) => {
        this.weatherData = data;
        this.temp = Math.round(this.weatherData.main.temp - 273.15); //Converting temperature from Kelvin to Celcius
        this.humidity = this.weatherData.main.humidity;
        this.windSpeed = this.weatherData.wind.speed;
        this.description = this.weatherData.weather[0].description;

        //Image URL for the icon, which changes as the weather changes
        this.iconUrl = "http://openweathermap.org/img/wn/" + this.weatherData.weather[0].icon + "@2x.png"
      })
  }

  ionViewWillEnter() {

    //if a mood has been set, then retrieve it from memory and assign it to the string variable
    //which is being displayed at the bottom of the homepage
    this.Storage.get("mood").then((data) => {
        this.userMood = data;
        this.hidden = false;
      })

    //get the time of day, which is then used to decide which of then used to decide which
    //intro message to display to the user
    this.time = this.myDate.getHours(); 

    if (this.time >= 0 && this.time <= 11) {
      this.titleMessage = "Good Morning!";
      this.paragraph = 'Lets see what today will look like so that you can plan ahead!'
    } else if (this.time >= 12 && this.time <= 17) {
      this.titleMessage = "Good Afternoon!";
      this.paragraph = 'Hmmm its around the middle of the day, plenty of time to go out and about!'
    } else {
      this.titleMessage = "Good Evening!";
      this.paragraph = 'Just because its starting to get to night-time, doesnt mean the fun has to end!'
    }
  }


}
