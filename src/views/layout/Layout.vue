<template>
  <div style="background: radial-gradient(#653d84, #332042); min-height: 100vh">
    <nav
      class="navbar"
      style="background-color: radial-gradient(#653d84, #332042)"
    >
      <div class="container-fluid d-flex justify-content-end">
        <div
          class="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            class="btn-check"
            name="btnradio"
            id="btnradio2"
            autocomplete="off"
            :checked="langCheckTR"
            @click="setLang('tr')"
          />
          <label class="btn btn-outline-light" for="btnradio2">Türkçe</label>

          <input
            type="radio"
            class="btn-check"
            name="btnradio"
            id="btnradio3"
            autocomplete="off"
            :checked="langCheckEN"
            @click="setLang('en')"
          />
          <label class="btn btn-outline-light" for="btnradio3">İngilizce</label>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

export default {
  name: "layout",
  components: {},
  setup() {
    const userName = ref("");
    const password = ref("");
    const langCheckTR = ref();
    const langCheckEN = ref();
    const { t } = useI18n();
    const i18n = useI18n();

    if (localStorage.getItem("lang") == "tr") {
      i18n.locale.value = localStorage.getItem("lang") as string;
      langCheckTR.value = true;
    } else {
      i18n.locale.value = "en";
      langCheckEN.value = true;
    }

    const setLang = (lang) => {
      localStorage.setItem("lang", lang);
      i18n.locale.value = lang;
    };

    return {
      userName,
      password,
      setLang,
      langCheckTR,
      langCheckEN,
    };
  },
};
</script>
