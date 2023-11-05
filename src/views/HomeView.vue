<template>
  <div class="home container text-white">
    <div class="header flex mb-16 justify-between">
      <div class="left flex flex-col">
        <h1 class="text-4xl font-bold">Invoices</h1>
        <span>There are 4 total invoices</span>
      </div>
      <div class="right flex justify-end items-center">
        <div
          @click="toggleMenu"
          class="filter flex items-center relative mr-8 cursor-pointer"
        >
          <span class="status pointer-events-none">Filter by status</span>
          <img
            src="@/assets/icon-arrow-down.svg"
            alt=""
            class="status-img pointer-events-none ml-3 w-2 h-1"
          />
          <ul
            v-show="filterMenu"
            class="filter-menu w-[120px] absolute top-6 list-none bg-purple shadow-md"
          >
            <li
              class="menu-list cursor-pointer text-sm py-3 px-5 hover:text-purple hover:bg-white bg-dark-blue"
            >
              Draft
            </li>
            <li
              class="menu-list cursor-pointer text-sm py-3 px-5 hover:text-purple hover:bg-white bg-dark-blue"
            >
              Pending
            </li>
            <li
              class="menu-list cursor-pointer text-sm py-3 px-5 hover:text-purple hover:bg-white bg-dark-blue"
            >
              Paid
            </li>
            <li
              class="menu-list cursor-pointer text-sm py-3 px-5 hover:text-purple hover:bg-white bg-dark-blue"
            >
              Clear Filter
            </li>
          </ul>
        </div>
        <div
          @click="newInvoice"
          class="button flex items-center py-2 px-3 bg-pale-purple rounded-[40px]"
        >
          <div
            class="inner-button flex mr-2 rounded-full p-2 items-center justify-center bg-white"
          >
            <img
              src="@/assets/icon-plus.svg"
              alt=""
              class="plus w-3 h-3 bg-white"
            />
          </div>
          <span class="text text-md bg-pale-purple">New Invoices</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      filterMenu: null,
    };
  },
  methods: {
    ...mapMutations(["TOGGLE_INVOICE"]),
    newInvoice() {
      this.TOGGLE_INVOICE();
    },
    toggleMenu() {
      this.filterMenu = !this.filterMenu;
    },
  },
};
</script>
