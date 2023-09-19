<script lang="ts">
import {defineComponent} from "vue";
import ArrowRightIcon from "@/components/icons/ArrowRight.vue";

export default defineComponent({
  name: 'HomeContentDiscount',
  components: {ArrowRightIcon}
})
</script>

<template>
  <div class="bg-blue-light p-2 d-flex gap-2 align-items-center">
    <div
      class="bg-blue-primary all-center rounded-circle p-1 text-white"
      style="height: 25px; width: 25px"
    >
      %
    </div>
    <div class="fs-8">
      Save <span class="text-primary">53%</span> and get
      <span class="text-primary">6 extra Clarifision</span> for only
      <span class="text-primary">$14 Each.</span>
    </div>
  </div>
  <button class="text-center btn btn-green-light text-white w-100 rounded-pill all-center gap-1">
    YES - CLAIM MY DISCOUNT
    <ArrowRightIcon />
  </button>
</template>
