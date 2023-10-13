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
          class="filter flex items-center relative mr-7"
          ref="filter"
        >
          <span>Filter by status</span>
          <img src="@/assets/icon-arrow-down.svg" alt="" />
          <ul v-show="filterMenu" class="filter-menu">
            <li>Draft</li>
            <li>Pending</li>
            <li>Paid</li>
            <li>Clear Filter</li>
          </ul>
        </div>
        <div @click="newInvoice" class="button flex items-center">
          <div class="inner-button flex">
            <img src="@/assets/icon-plus.svg" alt="" />
          </div>
          <span class="text text-xs">New Invoices</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>
