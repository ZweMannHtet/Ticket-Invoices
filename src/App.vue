<template>
  <div v-if="!mobileWidth" class="app flex h-full flex-col lg:flex-row m-8">
    <div class="app-content mx-auto w-custom">
      <InvoiceModal />
      <router-view />
    </div>
  </div>
  <div
    v-else
    class="mobile-message flex flex-col text-center justify-center h-screen bg-purple text-white"
  >
    <h1 class="text-4xl font-bold">
      Sorry, this app is not support on Mobile Devices
    </h1>
    <p class="noti mt-4">To use this app, please use a computer or Tablet</p>
  </div>
</template>

<script setup>
import InvoiceModal from "./components/InvoiceModal.vue";
import { ref, onMounted } from "vue";

let mobileWidth = ref(null);

onMounted(() => {
  checkSize();
  window.addEventListener("resize", checkSize);
});

const checkSize = () => {
  let windowWidth = window.innerWidth;
  if (windowWidth <= 750) {
    return (mobileWidth.value = true);
  }
  mobileWidth.value = false;
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Cabin&family=Open+Sans:wght@300&family=Poppins:wght@300&family=Raleway:wght@300&family=Roboto+Condensed:wght@300&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  background-color: #1e2139;
}
</style>
