<script lang="ts">
import {defineComponent} from "vue";
import HomeContentTitle from "@/components/home/content/Title.vue";
import PhoneImage from "@/assets/images/phone.png";
import HomeContentDetail from "@/components/home/content/Detail.vue";
import HomeContentSpec from "@/components/home/content/Spec.vue";
import HomeContentReview from "@/components/home/content/Review.vue";
import HomeContentDiscount from "@/components/home/content/Discount.vue";
import GuaranteeLogo from "@/assets/logos/guarantee.png";
import HomeContentPayment from "@/components/home/content/Payment.vue";

export default defineComponent({
  name: 'HomeContent',
  components: {
    HomeContentPayment,
    HomeContentDiscount, HomeContentReview, HomeContentSpec, HomeContentDetail, HomeContentTitle},
  setup(){
    return {PhoneImage, GuaranteeLogo}
  }
})
</script>

<template>
  <section class="max-w-md mx-auto px-3">
    <div class="bg-grey-light p-md-4 d-flex flex-column gap-3">
      <HomeContentTitle class="d-md-none" />
      <div class="row gy-3">
        <div class="col-md-6 d-flex flex-column gap-3">
          <img
            :src="PhoneImage"
            alt="phone-image"
            class="w-100"
          >
          <HomeContentReview class="d-md-block d-none" />
        </div>
        <div class="col-md-6 d-flex flex-column gap-3">
          <HomeContentTitle class="d-md-block d-none" />
          <HomeContentDetail />
          <HomeContentSpec />
          <HomeContentDiscount />
          <HomeContentPayment />
          <div class="d-flex justify-content-center">
            <button
              class="bg-transparent fs-5 text-center text-danger border-0 text-decoration-underline"
            >
              No thanks, I don’t want this.
            </button>
          </div>
          <div class="d-flex gap-2 align-items-center">
            <img
              :src="GuaranteeLogo"
              alt="guarantee-logo"
              width="80"
            >
            <p class="mb-0 fs-8">
              If you are not completely thrilled with your Clarifion - We have a
              30 day satisfaction guarantee. Please refer to our return policy at
              the bottom of the page for more details. Happy Shopping!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
