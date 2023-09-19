<script lang="ts">
import {defineComponent} from "vue";

import LockIcon from "@/components/icons/Lock.vue";
import HomeContentPaymentCard from "@/components/home/content/PaymentCard.vue";

export default defineComponent({
  name:'HomeContentPayment',
  components: {HomeContentPaymentCard, LockIcon},
})
</script>

<template>
  <div class="border border-1 border-secondary p-2 rounded-1">
    <div class="d-flex justify-content-between fs-10 gap-1">
      <div class="flex-grow-1 all-center">
        Free Shipping
      </div>
      <div class="border-end border-black border-1" />
      <div class="all-center gap-1 h-100 flex-grow-1">
        <LockIcon />
        <div>
          Secure 256-bit SSL encryption.
        </div>
      </div>
      <div class="border-start border-black border-1 d-md-block d-none" />
      <HomeContentPaymentCard class="d-md-block d-none" />
    </div>
    <HomeContentPaymentCard class="d-md-none mt-2" />
  </div>
</template>
