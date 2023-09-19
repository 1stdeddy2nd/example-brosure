<script lang="ts">
import { defineComponent } from "vue";
import ClarifionLogo from "@/assets/logos/clarifion.png";
import McAFeeLogo from "@/assets/logos/mc-afee.png";
import NortonAntivirusLogo from "@/assets/logos/norton-antivirus.png";

export default defineComponent({
  name: "HomeSubHeader",
  setup() {
    return {
      ClarifionLogo,
      McAFeeLogo,
      NortonAntivirusLogo,
    };
  },
});
</script>

<template>
  <section class="max-w-md mx-auto px-3">
    <div class="d-flex justify-content-between mb-2">
      <img
        :src="ClarifionLogo"
        alt="clarifion-logo"
        class="height-logo"
      >
      <div class="d-flex justify-content-end gap-4">
        <img
          :src="McAFeeLogo"
          alt="mc-afee-logo"
          class="height-logo"
        >
        <img
          :src="NortonAntivirusLogo"
          alt="norton-antivirus-logo"
          class="height-logo"
        >
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.height-logo {
  height: 15px;
}

@media only screen and (min-width: 768px) {
  .height-logo {
    height: 30px;
  }
}
</style>
