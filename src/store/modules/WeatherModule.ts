import {Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import ApiService from "@/core/services/ApiService";

@Module
export default class VillaModule extends VuexModule{
  weather = [];
  weatherForecast = [] ;
 
 /**
   * Get current weather data
   * @returns List of weather data
   */
  get weatherList (){
    return this.weather
  }


  /**
   * Get current weather forecast data
   * @returns List of weather forecast data
   */
  get weatherForecastList (){
    return this.weatherForecast
  }


  @Mutation
  [Mutations.SET_WEATHER_LIST](res) {
    if (res.name === 'Karaköy') {
      res.name = 'İstanbul';
    } 
     this.weather.push(res)
    }

    @Mutation
  [Mutations.SET_WEATHET_FORECAST](res) {
    if (res.city.name === 'Karaköy') {
      res.city.name = 'İstanbul';
    } 
    const data = 
    {
      cityName: res.city.name,
      data : res.list
    } 

    this.weatherForecast.push(data)

    console.log(this.weatherForecast)
    }

    @Action
   async [Actions.GET_CITY_LOCATION](cityName) {
     await ApiService.get(`geo/1.0/direct?q=${cityName}&limit=1`).then((res) => {
        this.context.dispatch(Actions.GET_WEATHER_LIST,res.data);
        this.context.dispatch(Actions.GET_WEATHER_FORECAST,res.data);
      }).catch(
      (e) => {
        console.log(e)
      }
    );
    }

  @Action
    [Actions.GET_WEATHER_LIST](location) {
       return ApiService.get(`data/2.5/weather?lat=${location[0].lat}&lon=${location[0].lon}`).then((res) => {
        
        this.context.commit(Mutations.SET_WEATHER_LIST, res.data);
      }).catch(
      (e) => {
        console.log(e)
      }
    );
    }




    @Action
    [Actions.GET_WEATHER_FORECAST](location) {
       return ApiService.get(`data/2.5/forecast?lat=${location[0].lat}&lon=${location[0].lon}`).then((res) => {
        this.context.commit(Mutations.SET_WEATHET_FORECAST, res.data);
      }).catch(
      (e) => {
        console.log(e)
      }
    );
    }
}


