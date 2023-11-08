<template>
  <div
    class="modal z-50 fixed flex justify-center items-center h-screen w-full bg-transparent"
  >
    <div
      class="modal-content rounded-3xl py-12 px-8 max-w-[450px] bg-content-color text-white"
    >
      <p class="warning text-center text-lg bg-content-color">
        Are you sure want to exist? Your changes will not be saved.
      </p>
      <div class="actions flex mt-6 bg-content-color">
        <button
          @click="closeModal"
          class="return bg-pale-purple flex-1 items-center py-3 px-3 rounded-[40px] mr-2 text-white"
        >
          Return
        </button>
        <button
          @click="closeInvoice"
          class="close bg-red flex-1 items-center py-3 px-3 rounded-[40px] mr-2 text-white"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
