<script lang="ts">
import {defineComponent} from "vue";
import GearCheckIcon from "@/components/icons/GearCheck.vue";
import TruckIcon from "@/components/icons/Truck.vue";
import ReverseIcon from "@/components/icons/Reverse.vue";
import HearthIcon from "@/components/icons/Hearth.vue";

export default defineComponent({
  name: 'HomeHeaderLarge',
  components: {HearthIcon, ReverseIcon, TruckIcon, GearCheckIcon}
})
</script>

<template>
  <div class="d-none d-md-flex justify-content-between gap-2">
    <div class="all-center gap-2">
      <GearCheckIcon
        fill="transparent"
        stroke="white"
        :width="18"
        style="margin-bottom: 2px"
      />
      30-DAY SATISFACTION GUARANTEE
    </div>
    <div class="all-center gap-2">
      <TruckIcon />
      Free delivery on orders over $40.00
    </div>
    <div class="all-center gap-2">
      <HearthIcon />
      50.000+ HAPPY CUSTOMERS
    </div>
    <div class="all-center gap-2">
      <ReverseIcon />
      100% Money Back Guarantee
    </div>
  </div>
</template>
