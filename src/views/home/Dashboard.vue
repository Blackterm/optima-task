<template>
  <div class="row p-0 m-0">
    <div class="position-absolute top-0 start-0">
      <div class="col-6 col-sm-5 col-md-3 col-lg-2">
        <div class="d-flex">
          <input
            class="form-control me-2"
            :placeholder="$t('button_name.search')"
            aria-label="Search"
            v-model="cityName"
            data-test="searchTestInput"
          />
          <button
            @click="searchCityLocation(cityName)"
            class="btn btn-outline-light"
            data-test="searchTestButton"
          >
            {{ $t("button_name.search") }}
          </button>
        </div>
      </div>
    </div>
    <div
      v-for="(item, index) in weatherData"
      :key="index"
      class="col-12 col-sm-6 col-lg-4"
    >
      <div class="card mb-3">
        <div class="card-header text-center fw-bold">{{ item.name }}</div>
        <img
          :src="getIconPath(item.weather[0].icon)"
          class="rounded mx-auto d-block"
          alt="..."
        />

        <div class="card-body">
          <div class="d-flex justify-content-center">
            <span class="card-text m-0 px-2">{{
              getConvertKelvin(item.main.temp)
            }}</span>

            <span class="card-text m-0 px-2"
              >H={{ getConvertKelvin(item.main.temp_max) }} L={{
                getConvertKelvin(item.main.temp_min)
              }}</span
            >
            <span class="card-text m-0 px-2"
              >{{ $t("wind") }} ≈ {{ item.wind.speed }}</span
            >
          </div>

          <div v-for="(item, index1) in weatherForecastData" :key="index1">
            <div
              v-if="
                weatherData[index].name == weatherForecastData[index1].cityName
              "
            >
              <div
                v-for="(x, index2) in weatherForecastData[index1].data"
                :key="index2"
              >
                <div v-if="index2 % 8 == 0" class="card mb-3">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        :src="getIconPath(x.weather[0].icon)"
                        class="rounded mx-auto d-block"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <p class="card-text m-0">
                          {{ getConvertKelvin(x.main.temp) }}
                        </p>

                        <span class="card-text m-0 px-2"
                          >H={{ getConvertKelvin(x.main.temp_max) }} L={{
                            getConvertKelvin(x.main.temp_min)
                          }}</span
                        >
                        <p class="card-text m-0">
                          {{ $t("wind") }} ≈ {{ x.wind.speed }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script lang="ts">
import { ref, onMounted, computed } from "vue";
import { getIconPath } from "@/core/helpers/iconUrl";
import { getConvertKelvin } from "@/core/helpers/ConvertKelvin";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";

export default {
  name: "home",
  components: {},
  setup() {
    const store = useStore();
    const cityName = ref();

    onMounted(() => {
      store.dispatch(Actions.GET_CITY_LOCATION, "ANKARA");
      store.dispatch(Actions.GET_CITY_LOCATION, "istanbul");
    });

    const searchCityLocation = (cityName) => {
      store.dispatch(Actions.GET_CITY_LOCATION, cityName);
    };

    const weatherData = computed(() => {
      return store.getters.weatherList;
    });

    const weatherForecastData = computed(() => {
      return store.getters.weatherForecastList;
    });

    return {
      getIconPath,
      weatherData,
      getConvertKelvin,
      weatherForecastData,
      cityName,
      searchCityLocation,
    };
  },
};
</script>


