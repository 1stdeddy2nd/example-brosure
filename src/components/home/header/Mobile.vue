<script lang="ts">
import {defineComponent} from "vue";
import GearCheckIcon from "@/components/icons/GearCheck.vue";
import TruckIcon from "@/components/icons/Truck.vue";
import ReverseIcon from "@/components/icons/Reverse.vue";
import HearthIcon from "@/components/icons/Hearth.vue";

export default defineComponent({
  name: 'HomeHeaderMobile',
  components: {HearthIcon, ReverseIcon, TruckIcon, GearCheckIcon}
})
</script>

<template>
  <div class="d-md-none d-flex w-100 align-items-center">
    <button
      class="bg-transparent border-0"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span
        class="carousel-control-prev-icon"
        aria-hidden="true"
        style="height: 20px"
      />
      <span class="visually-hidden">Previous</span>
    </button>
    <div class="flex-grow-1">
      <div
        id="carouselExampleControls"
        class="carousel slide d-md-none d-block"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="all-center gap-2">
              <GearCheckIcon
                fill="transparent"
                stroke="white"
                :width="18"
                style="margin-bottom: 2px"
              />
              30-DAY SATISFACTION GUARANTEE
            </div>
          </div>
          <div class="carousel-item">
            <div class="all-center gap-2">
              <TruckIcon />
              Free delivery on orders over $40.00
            </div>
          </div>
          <div class="carousel-item">
            <div class="all-center gap-2">
              <HearthIcon />
              50.000+ HAPPY CUSTOMERS
            </div>
          </div>
          <div class="carousel-item">
            <div class="all-center gap-2">
              <ReverseIcon />
              100% Money Back Guarantee
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      class="bg-transparent border-0"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span
        class="carousel-control-next-icon"
        aria-hidden="true"
        style="height: 20px"
      />
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
