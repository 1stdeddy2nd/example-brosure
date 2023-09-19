<script lang="ts">
import {defineComponent} from "vue";
import CheckIcon from "@/components/icons/Check.vue";
import {COLOR} from "@/utils/const";

export default defineComponent({
  name: 'HomeContentSpec',
  components: {CheckIcon},
  setup(){
    return{COLOR}
  }
})
</script>

<template>
  <div class="d-flex flex-column">
    <div class="d-flex gap-2 fs-8 align-items-center">
      <CheckIcon
        :fill="COLOR.BLUE_PRIMARY"
        :width="18"
      />
      <p class="mb-0">
        Negative Ion Technology may <b>help with allergens</b>
      </p>
    </div>
    <div class="d-flex gap-2 fs-8 align-items-center">
      <CheckIcon
        :fill="COLOR.BLUE_PRIMARY"
        :width="18"
      />
      <p class="mb-0">
        Designed for <b>air rejuvenation</b>
      </p>
    </div>
    <div class="d-flex gap-2 fs-8 align-items-center">
      <CheckIcon
        :fill="COLOR.BLUE_PRIMARY"
        :width="18"
      />
      <p class="mb-0">
        <b>Perfect for every room</b> in all types of places.
      </p>
    </div>
  </div>
</template>
