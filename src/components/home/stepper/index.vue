<script lang="ts">
import {defineComponent} from "vue";
import CheckIcon from "@/components/icons/Check.vue";

export default defineComponent({
  name: "HomeStepper",
  components: { CheckIcon },
  setup(){
    return {
      currentStep: 3,
      steps: ['Cart Review', 'Checkout', 'Special Offer', 'Confirmation']
    }
  },
});
</script>

<template>
  <section
    class="max-w-md mx-auto d-flex justify-content-between align-items-center px-3"
  >
    <div
      v-for="(step, index) in steps"
      :key="step"
      class="d-flex align-items-center flex-column flex-md-row gap-1"
    >
      <div
        v-if="(index + 1) < currentStep"
        class="bg-green-light all-center rounded-circle p-1"
        style="height: 25px; width: 25px"
      >
        <CheckIcon />
      </div>
      <div
        v-else-if="(index + 1) === currentStep"
        class="bg-blue-primary all-center rounded-circle p-1 text-white"
        style="height: 25px; width: 25px"
      >
        {{ index + 1 }}
      </div>
      <div
        v-else
        class="bg-white border border-1 border-primary text-primary all-center rounded-circle p-1"
        style="height: 25px; width: 25px"
      >
        {{ index + 1 }}
      </div>
      <span class="d-none d-md-block">Step {{ index + 1 }} : {{ step }}</span>
      <span class="d-md-none fs-8">{{ step }}</span>
    </div>
  </section>
</template>
