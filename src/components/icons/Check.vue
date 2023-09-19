<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CheckIcon",
  props: {
    width: { type: Number, default: 24 },
    fill: {type: String, default: 'white'}
  },
});
</script>

<template>
  <svg
    :width="width"
    viewBox="0 0 24 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.99977 9L8.65859 16L21.9998 2"
      :stroke="fill"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
