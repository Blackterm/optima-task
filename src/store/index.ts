import { createStore } from "vuex";
import { config } from "vuex-module-decorators";
import WeatherModule from "./modules/WeatherModule";

config.rawError = true;

const store = createStore({
  modules: {
   WeatherModule,
  },
});

export default store;
