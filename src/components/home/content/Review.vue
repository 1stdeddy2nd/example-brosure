<script lang="ts">
import {defineComponent} from "vue";
import GearCheckIcon from "@/components/icons/GearCheck.vue";
import StarIcon from "@/components/icons/Star.vue";
import ProfileImage from "@/assets/images/profile.png";

export default defineComponent({
  name: 'HomeContentReview',
  components: {StarIcon, GearCheckIcon},
  setup(){
    return{
      ProfileImage
    }
  }
})
</script>

<template>
  <div class="bg-white p-3 fs-9 d-md-block d-none">
    <div class="d-flex gap-2 align-items-center mb-2">
      <img
        :src="ProfileImage"
        alt="ken-t"
        class="rounded-circle"
        width="35"
        height="35"
      >
      <div class="d-flex flex-column justify-content-center">
        <div class="d-flex">
          <StarIcon :width="15" />
          <StarIcon :width="15" />
          <StarIcon :width="15" />
          <StarIcon :width="15" />
          <StarIcon :width="15" />
        </div>
        <div class="d-flex align-items-center gap-1">
          <span class="fw-bold">Ken T.</span>
          <GearCheckIcon :width="15" />
          <span class="fw-lighter">Verified Customer</span>
        </div>
      </div>
    </div>
    <article>
      “As soon as the Clarifions arrived I put one in my bedroom. This was
      late in the afternoon. When I went to the bedroom in the evening it
      smelled clean. When I went to bed I felt I could breathe better.
      Wonderful.”
    </article>
  </div>
</template>
