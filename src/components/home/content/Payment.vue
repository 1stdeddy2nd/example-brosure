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
    <div class="d-flex justify-content-between gap-1">
      <div class="flex-grow-1 all-center">
        <p class="mb-0 fs-10 d-md-block d-none">
          Free Shipping
        </p>
        <p class="mb-0 fs-8 d-md-none">
          Free Shipping
        </p>
      </div>
      <div class="border-end border-black border-1" />
      <div class="all-center gap-1 flex-grow-1">
        <LockIcon />
        <div>
          <p class="mb-0 fs-10 d-md-flex align-items-center d-none h-100">
            Secure 256-bit SSL encryption.
          </p>
          <p class="mb-0 fs-8 d-md-none">
            Secure 256-bit SSL encryption.
          </p>
        </div>
      </div>
      <div class="border-start border-black border-1 d-md-block d-none" />
      <HomeContentPaymentCard class="d-md-block d-none" />
    </div>
    <HomeContentPaymentCard
      class="d-md-none mt-2"
      :img-size="30"
    />
  </div>
</template>
