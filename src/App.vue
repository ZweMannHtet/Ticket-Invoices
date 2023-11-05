<template>
  <div v-if="!mobileWidth" class="app flex h-full flex-col lg:flex-row m-8">
    <div class="app-content mx-auto w-custom">
      <transition name="invoice">
        <InvoiceModal v-if="invoiceModal" />
      </transition>
      <router-view />
    </div>
  </div>
  <div
    v-else
    class="mobile-message flex flex-col text-center justify-center h-screen bg-text-back text-white"
  >
    <h1 class="text-4xl font-bold">
      Sorry, this app is not support on Mobile Devices
    </h1>
    <p class="noti mt-4">To use this app, please use a computer or Tablet</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
import InvoiceModal from "./components/InvoiceModal.vue";
import Navigation from "./components/Navigation.vue";

export default {
  data() {
    return {
      mobileWidth: null,
    };
  },
  components: {
    Navigation,
    InvoiceModal,
  },
  created() {
    this.checkScreen();
    window.addEventListener("resize", this.checkScreen);
  },
  methods: {
    checkScreen() {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 750) {
        this.mobileWidth = true;
        return;
      }
      this.mobileWidth = false;
    },
  },
  computed: {
    ...mapState(["invoiceModal"]),
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Cabin&family=Open+Sans:wght@300&family=Poppins:wght@300&family=Raleway:wght@300&family=Roboto+Condensed:wght@300&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  background-color: #22274f;
}
.invoice-enter-active,
.invoice-leave-active {
  transition: 0.8s ease all;
}
.invoice-enter-from,
.invoice-leave-to {
  transform: translateX(-700px);
}
</style>
