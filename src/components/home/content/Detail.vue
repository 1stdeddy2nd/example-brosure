<script lang="ts">
import {defineComponent} from "vue";
import StarIcon from "@/components/icons/Star.vue";
import SmallPhoneImage from "@/assets/images/small-phone.png";

export default defineComponent({
  name: 'HomeContentDetail',
  components: {StarIcon},
  setup(){
    return {SmallPhoneImage}
  }
})
</script>

<template>
  <div class="row gy-3">
    <div class="col-3">
      <img
        :src="SmallPhoneImage"
        alt="small-phone-image"
        class="w-100 px-3 py-2 rounded-2 bg-blue-primary"
      >
    </div>
    <div class="col-9 d-flex flex-column justify-content-between">
      <div class="d-flex justify-content-between">
        <div class="mb-0 fs-7">
          Clarifion Air Ionizer
        </div>
        <div class="d-flex justify-content-end gap-1">
          <div class="text-decoration-line-through fs-8 text-grey-primary">
            $180
          </div>
          <div class="fs-7 text-blue-primary">
            $84
          </div>
        </div>
      </div>
      <div class="fs-8 d-flex">
        <StarIcon :width="15" />
        <StarIcon :width="15" />
        <StarIcon :width="15" />
        <StarIcon :width="15" />
        <StarIcon :width="15" />
      </div>
      <div class="d-flex gap-2 align-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <ellipse
            cx="7.99996"
            cy="7.99999"
            rx="7.99996"
            ry="7.99999"
            fill="#E3EEFF"
          />
          <ellipse
            cx="8.05925"
            cy="8.05899"
            rx="4.26664"
            ry="4.26666"
            fill="#2C7EF8"
          />
        </svg>
        <span class="fs-8">12 left in Stock</span>
      </div>
      <p class="mb-0 fs-8 d-md-block d-none">
        Simply plug a Clarifion into any standard outlet and replace
        bulky, expensive air purifiers with a simple.
      </p>
    </div>
    <p class="mb-0 fs-8 text-center d-md-none">
      Simply plug a Clarifion into any standard outlet and replace
      bulky, expensive air purifiers with a simple.
    </p>
  </div>
</template>
