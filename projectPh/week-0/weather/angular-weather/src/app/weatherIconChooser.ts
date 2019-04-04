import { Weather } from './models/CurrentWeather';
import { City } from './models/City';
      export function weatherIcon(weatherData):string{
        let myWeather: string;
        switch(weatherData.icon){
          case '01n':
          myWeather = "../../../assets/ions/sunny.png";
          break;
          case '01d':
          myWeather = "../../../assets/ions/sunny.png";
          break;
          case '02n':
          myWeather = "../../../assets/ions/partly_cloudy.png";
          break;
          case '02d':
          myWeather = "../../../assets/ions/partly_cloudy.png";
          break;
          case '03n':
          myWeather = "../../../assets/ions/partly_cloudy.png";
          break;
          case '03d':
          myWeather = "../../../assets/ions/partly_cloudy.png";
          break;
          case '04n':
          myWeather = "../../../assets/ions/cloudy.png";
          break;
          case '04d':
          myWeather = "../../../assets/ions/cloudy.png";
          break;
          case '09n':
          myWeather = "../../../assets/ions/rainy.png";
          break;
          case '09d':
          myWeather = "../../../assets/ions/rainy.png";
          break;
          case '10n':
          myWeather = "../../../assets/ions/rainy.png";
          break;
          case '10d':
          myWeather = "../../../assets/ions/rainy.png";
          break;
          case '11n':
          myWeather = "../../../assets/ions/storm.png";
          break;
          case '11d':
          myWeather = "../../../assets/ions/storm.png";
          break;
          case '13n':
          myWeather = "../../../assets/ions/snowy.png";
          break;
          case '13d':
          myWeather = "../../../assets/ions/snowy.png";
          break;
          case '50n':
          myWeather = "../../../assets/ions/fog.png";
          break;
          case '50d':
          myWeather = "../../../assets/ions/fog.png";
          break;
        }
        return myWeather
      }
