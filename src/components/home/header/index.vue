<script lang="ts">
import {defineComponent} from "vue";
import HomeHeaderLarge from "@/components/home/header/Large.vue";
import HomeHeaderMobile from "@/components/home/header/Mobile.vue";

export default defineComponent({
  name:'HomeHeader',
  components: {HomeHeaderMobile, HomeHeaderLarge}
})
</script>

<template>
  <section
    class="bg-blue-dark py-2 text-white fs-9 d-flex align-items-center"
    style="min-height: 45px"
  >
    <div class="max-w-md mx-auto px-md-3 px-2 w-100">
      <HomeHeaderLarge />
      <HomeHeaderMobile />
    </div>
  </section>
</template>
