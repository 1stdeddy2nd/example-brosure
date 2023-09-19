<script lang="ts">
import {defineComponent} from "vue";
import VisaLogo from "@/assets/logos/visa.png";
import ShopPayLogo from "@/assets/logos/shoppay.png";
import PaypalLogo from "@/assets/logos/paypal.png";
import MastercardLogo from "@/assets/logos/mastercard.png";
import GooglePayLogo from "@/assets/logos/googlepay.png";
import ApplePayLogo from "@/assets/logos/applepay.png";
import AmexLogo from "@/assets/logos/amex.png";
export default defineComponent({
  name:'HomeContentPaymentCard',
  props: {
    imgSize: {type: Number, default: 21}
  },
  setup(){
    return {
      VisaLogo,
      ShopPayLogo,
      PaypalLogo,
      MastercardLogo,
      GooglePayLogo,
      ApplePayLogo,
      AmexLogo,
    }
  }
})
</script>

<template>
  <div class="d-flex gap-1 align-items-center justify-content-center">
    <img
      :src="VisaLogo"
      alt="visa-logo"
      :width="$props.imgSize"
    >
    <img
      :src="ShopPayLogo"
      alt="shop-pay-logo"
      :width="$props.imgSize"
    >
    <img
      :src="PaypalLogo"
      alt="paypal-logo"
      :width="$props.imgSize"
    >
    <img
      :src="GooglePayLogo"
      alt="google-pay-logo"
      :width="$props.imgSize"
    >
    <img
      :src="ApplePayLogo"
      alt="apple-pay-logo"
      :width="$props.imgSize"
    >
    <img
      :src="AmexLogo"
      alt="amex-logo"
      :width="$props.imgSize"
    >
  </div>
</template>
