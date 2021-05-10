import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey: string = "5825ead1b79301f18c358b85ab08c868"
  lat: any;
  long: any;
  cityName: string;


  constructor(private httpClient: HttpClient, private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder) { }
  
  //(1)I am using the GPS hardware on the device to get the co-ordinates of the user, 
  //(2)then converting those co-ordinates to a city name using the devices GeoCoder, 
  //(3)and lastly putting that city name into the API querry to get back json data about the weather.

  GetWeatherData(): Observable<any> {

    //(1)Getting the co-ordinates using native GPS
    this.geolocation.getCurrentPosition().then((resp) => {

      //assigning co-ordinates to local variables
      this.lat = resp.coords.latitude
      this.long = resp.coords.longitude

      //Error incase co-ordinates cannot be obtained
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    //(2) I now have the co-ordinates and have hence used hardware on the device. 
    //Now, I am using the native geo-coder to obtain the name of the city from the co-ordinates. 
    //As can be seen in the web console, when this is done it states that cordova is not available 
    //(because we are using the device simulator, and not an actual mobile phone) just like in our lab when using the flashlight. 
    //Seeing as this would work if it was an actual mobile was being used, I have instead just added Galway as the city (in step 3)
    //name directly into the API call for the sake of getting the json data.

    //Declaring variables related to the native geo-coder [This is code related to the native geo-coder]
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    //Inputing the latitude and longitude to the geo-coder to then get the city name[This is code related to the native geo-coder]
    this.nativeGeocoder.reverseGeocode(this.lat, this.long, options)
      .then((result: NativeGeocoderResult[]) => this.cityName = JSON.stringify(result[0])) //assigning city name to local variable
      .catch((error: any) => console.log(error)); //error incase it cannot get the city name

    //(3)Here is the API call i would have used, if geo-coder was functional on the mobile simulator, and not just on real mobile devices:
    //return this.httpClient.get('http://api.openweathermap.org/data/2.5/weather?q="+this.cityName+"&appid=5825ead1b79301f18c358b85ab08c868')')

    //Here is the api call i am using instead, where i directly input Galway as the name:
    return this.httpClient.get('http://api.openweathermap.org/data/2.5/weather?q=Galway&appid=5825ead1b79301f18c358b85ab08c868')



  }

}
