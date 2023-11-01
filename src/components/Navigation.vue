<template>
  <header
    class="header flex flex-row z-50 lg:min-h-full lg:min-w-fit lg:flex-col lg:rounded-full relative cursor-pointer left-[-20px]"
  >
    <div class="add absolute -right-3 -top-3 text-2xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 448 512"
      >
        <path
          d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
        />
      </svg>
    </div>
    <div
      class="branding flex rounded-full bg-pale-purple justify-center p-6 lg:w-full"
    >
      <img
        class="logo w-6 h-6"
        src="@/assets/file-invoice-dollar-solid.png"
        alt=""
      />
    </div>
  </header>
</template>

<script setup></script>
