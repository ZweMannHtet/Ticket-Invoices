<template>
  <div
    @click="checkClick"
    ref="invoiceWrap"
    class="invoice-wrap flex flex-col bg-transparent fixed top-0 left-0 max-w-[700px] h-screen lg:left-[30px] overflow-auto scrollbar-none"
  >
    <form
      @submit.prevent="submitForm"
      class="invoice-content max-w-[700px] w-full relative p-14 bg-content-color text-white shadow-lg"
    >
      <h1 class="new-invoice mb-12 text-white text-3xl bg-content-color">
        New Invoice
      </h1>

      <div class="bill-form flex flex-col">
        <h4 class="bill-form mb-6 text-lg text-pale-purple">Bill Form</h4>
        <div class="input flex flex-col mb-6">
          <label for="billerStreetAddress" class="address text-xs mb-2"
            >Street Address</label
          >
          <input
            class="text-input bg-white text-white w-full rounded-sm py-1.5 px-1 border-none"
            type="text"
            required
            id="billerStreetAddress"
            v-model="billerStreetAdress"
          />
        </div>
        <div class="location-details flex">
          <div class="input flex flex-col w-[150px] mb-6">
            <label for="billerCity" class="city text-xs mb-2">City</label>
            <input
              type="text"
              required
              id="billerCity"
              v-model="billerCity"
              class="text-input bg-white text-white w-full rounded-sm py-1.5 px-1 border-none"
            />
          </div>
          <div class="input flex flex-col w-[150px] mb-6">
            <label for="billerZipCode" class="zipcode text-xs mb-2"
              >Zip Code</label
            >
            <input
              type="text"
              required
              id="billerZipCode"
              v-model="billerZipCode"
              class="text-input bg-white text-white w-full rounded-sm py-1.5 px-1 border-none"
            />
          </div>
          <div class="input flex flex-col w-[150px]">
            <label for="billerCountry" class="country text-xs mb-2"
              >Country</label
            >
            <input
              type="text"
              required
              id="billerCountry"
              v-model="billerCountry"
              class="text-input bg-white text-white w-full rounded-sm py-1.5 px-1 border-none"
            />
          </div>
        </div>
      </div>

      <div class="bill-to flex flex-col">
        <h4 class="bill-to mb-6 text-lg text-pale-purple">Bill To</h4>
        <div class="input flex flex-col">
          <label for="clientName" class="clientname text-xs mb-2"
            >Client's Name</label
          >
          <input
            class="text-input bg-white text-white w-full rounded-sm py-1.5 px-1 border-none"
            type="text"
            required
            id="clientName"
            v-model="clientName"
          />
        </div>
        <div class="input flex flex-col">
          <label for="clientEmail" class="clientemail text-xs mb-2"
            >Client's Email</label
          >
          <input
            class="text-input bg-white text-white w-full rounded-sm py-1.5 px-1 border-none"
            type="text"
            required
            id="clientEmail"
            v-model="clientEmail"
          />
        </div>
        <div class="input flex flex-col">
          <label for="clientStreetAddress" class="streetaddress text-xs mb-2"
            >Street Address</label
          >
          <input
            class="text-input bg-white text-white w-full rounded-sm py-1.5 px-1 border-none"
            type="text"
            required
            id="clientStreetAddress"
            v-model="clientStreetAddress"
          />
        </div>
        <div class="location-details flex">
          <div class="input flex flex-col w-[150px]">
            <label for="clientCity" class="citytwo text-xs mb-2">City</label>
            <input
              class="text-input bg-white text-white w-full rounded-sm py-1.5 px-1 border-none"
              type="text"
              required
              id="clientCity"
              v-model="clientCity"
            />
          </div>
          <div class="input flex flex-col w-[150px]">
            <label for="clientZipCode" class="zipcodetwo text-xs mb-2"
              >Zip Code</label
            >
            <input
              class="text-input bg-white text-white w-full rounded-sm py-1.5 px-1 border-none"
              type="text"
              required
              id="clientZipCode"
              v-model="clientZipCode"
            />
          </div>
          <div class="input flex flex-col w-[150px]">
            <label for="clientCountry" class="countrytwo text-xs mb-2"
              >Country</label
            >
            <input
              class="text-input bg-white text-white w-full rounded-sm py-1.5 px-1 border-none"
              type="text"
              required
              id="clientCountry"
              v-model="clientCountry"
            />
          </div>
        </div>
      </div>

      <div class="invoice-work flex flex-col">
        <div class="payment flex">
          <div class="input flex flex-col">
            <label for="invoiceDate" class="invoicedata text-xs mb-2"
              >Invoice Date</label
            >
            <input
              class="text-input bg-white text-white w-full rounded-sm py-1.5 px-1 border-none"
              type="text"
              disabled
              id="invoiceDate"
              v-model="invoiceDate"
            />
          </div>
          <div class="input flex flex-col">
            <label for="invoiceDateUnix" class="paymentdue text-xs mb-2"
              >Payment Due</label
            >
            <input
              class="text-input bg-white text-white w-full rounded-sm py-1.5 px-1 border-none"
              type="text"
              disabled
              id="invoiceDateUnix"
              v-model="invoiceDateUnix"
            />
          </div>
        </div>

        <div class="input flex flex-col">
          <label for="paymentTerms" class="paymentterm text-xs mb-2"
            >Payment Terms</label
          >
          <select
            class="text-input bg-white text-white w-full rounded-sm py-1.5 px-1 border-none"
            type="text"
            required
            id="paymentTerms"
            v-model="paymentTerms"
          >
            <option value="30">Net 30 Days</option>
            <option value="60">Net 60 Days</option>
          </select>
        </div>
        <div class="input flex flex-col">
          <label
            for="productDescription"
            class="productdescription text-xs mb-2"
            >Product Description</label
          >
          <input
            class="text-input bg-white text-white w-full rounded-sm py-1.5 px-1 border-none"
            type="text"
            required
            id="productDescription"
            v-model="productDescription"
          />
        </div>

        <div class="work-items">
          <h3 class="item-list mb-4 text-lg text-gray-500">Item List</h3>
          <table class="item-list">
            <tr class="table-heading flex">
              <th class="item-name">Item Name</th>
              <th class="qty">Quantity</th>
              <th class="price">Price</th>
              <th class="total">Total</th>
            </tr>
            <tr
              class="table-items flex"
              v-for="(item, index) in invoiceItemList"
              :key="index"
            >
              <td class="item-name">
                <input type="text" v-model="item.itemName" />
              </td>
              <td class="qty"><input type="text" v-model="item.qty" /></td>
              <td class="price"><input type="text" v-model="item.price" /></td>
              <td class="total">
                $ {{ (item.total = item.qty * item.price) }}
              </td>
              <img
                @click="deleteInvoiceItem(item.id)"
                src="@/assets/icon-delete.svg"
                alt=""
              />
            </tr>
          </table>
          <div @click="addInvoiceItem" class="button flex">
            <img src="@/assets/icon-plus.svg" alt="" />
            Add New Item
          </div>
        </div>
      </div>

      <div class="save flex">
        <div class="left">
          <button
            @click="closeInvoice"
            class="cancel bg-red items-center py-3 px-3 rounded-[40px] mr-2 text-white"
          >
            Cancel
          </button>
        </div>
        <div class="right flex">
          <button
            @click="saveDraft"
            class="draft bg-dark-purple items-center py-3 px-3 rounded-[40px] mr-2 text-white"
          >
            Save Draft
          </button>
          <button
            @click="publishInvoice"
            class="create bg-pale-purple items-center py-3 px-3 rounded-[40px] mr-2 text-white"
          >
            Create Invoices
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "InvoiceModal",
  data() {
    return {
      billerStreetAdress: null,
      billerCity: null,
      billerZipCode: null,
      billerCountry: null,
      clientName: null,
      clientEmail: null,
      clientStreetAddress: null,
      clientCity: null,
      clientZipCode: null,
      clientCountry: null,
      invoiceDateUnix: null,
      invoiceDate: null,
      paymentTerms: null,
      paymentDueDateUnix: null,
      paymentDueDate: null,
      productDescription: null,
      invoicePending: null,
      invoiceDraft: null,
      invoiceItemList: [],
      invoiceTotal: 0,
    };
  },
};
</script>
<style></style>
