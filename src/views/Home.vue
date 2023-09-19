<script lang="ts">
import { defineComponent } from "vue";
import HomeFooter from "@/components/home/footer/index.vue";
import HomeHeader from "@/components/home/header/index.vue";
import HomeSubHeader from "@/components/home/sub-header/index.vue";
import HomeTitle from "@/components/home/title/index.vue";
import HomeStepper from "@/components/home/stepper/index.vue";
import HomeContent from "@/components/home/content/index.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    HomeStepper,
    HomeTitle,
    HomeSubHeader,
    HomeHeader,
    HomeFooter,
    HomeContent,
  },
});
</script>

<template>
  <HomeHeader />
  <HomeSubHeader class="my-4 mb-md-0" />
  <div class="bg-content py-4 py-md-0">
    <HomeTitle class="mb-md-5 mb-3" />
    <HomeStepper />
    <HomeContent class="my-4" />
  </div>
  <HomeFooter />
</template>

<style lang="scss" scoped>
.bg-content {
  background-color: rgba(250, 250, 250, 1);
}
@media only screen and (min-width: 768px) {
  .bg-content {
    background-color: transparent;
  }
}
</style>
