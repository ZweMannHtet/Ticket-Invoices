<template>
  <div
    @click.prevent="checkClick"
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

      <div class="bill-form flex flex-col mb-12 bg-content-color">
        <h4 class="bill-from mb-6 text-lg text-pale-purple bg-content-color">
          Bill Form
        </h4>
        <div class="input flex flex-col mb-6 bg-content-color">
          <label
            for="billerStreetAddress"
            class="address text-xs mb-2 bg-content-color"
            >Street Address</label
          >
          <input
            class="text-input bg-white text-gray-700 w-full rounded-sm py-1.5 px-1 border-none focus:outline-none"
            type="text"
            required
            id="billerStreetAddress"
            v-model="billerStreetAdress"
          />
        </div>
        <div class="location-details flex gap-4 bg-content-color">
          <div
            class="input flex flex-col w-[150px] mb-6 flex-1 bg-content-color"
          >
            <label for="billerCity" class="city text-xs mb-2 bg-content-color"
              >City</label
            >
            <input
              type="text"
              required
              id="billerCity"
              v-model="billerCity"
              class="text-input bg-white text-gray-700 w-full rounded-sm py-1.5 px-1 border-none focus:outline-none"
            />
          </div>
          <div
            class="input flex flex-col w-[150px] mb-6 flex-1 bg-content-color"
          >
            <label
              for="billerZipCode"
              class="zipcode text-xs mb-2 bg-content-color"
              >Zip Code</label
            >
            <input
              type="text"
              required
              id="billerZipCode"
              v-model="billerZipCode"
              class="text-input bg-white text-gray-700 w-full rounded-sm py-1.5 px-1 border-none focus:outline-none"
            />
          </div>
          <div
            class="input flex flex-col w-[150px] mb-6 flex-1 bg-content-color"
          >
            <label
              for="billerCountry"
              class="country text-xs mb-2 bg-content-color"
              >Country</label
            >
            <input
              type="text"
              required
              id="billerCountry"
              v-model="billerCountry"
              class="text-input bg-white text-gray-700 w-full rounded-sm py-1.5 px-1 border-none focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div class="bill-to flex flex-col mb-12 bg-content-color">
        <h4 class="bill-to mb-6 text-lg text-pale-purple bg-content-color">
          Bill To
        </h4>
        <div class="input flex flex-col mb-6 bg-content-color">
          <label
            for="clientName"
            class="clientname text-xs mb-2 bg-content-color"
            >Client's Name</label
          >
          <input
            class="text-input bg-white text-gray-700 w-full rounded-sm py-1.5 px-1 border-none focus:outline-none"
            type="text"
            required
            id="clientName"
            v-model="clientName"
          />
        </div>
        <div class="input flex flex-col mb-6 bg-content-color">
          <label
            for="clientEmail"
            class="clientemail text-xs mb-2 bg-content-color"
            >Client's Email</label
          >
          <input
            class="text-input bg-white text-gray-700 w-full rounded-sm py-1.5 px-1 border-none focus:outline-none"
            type="text"
            required
            id="clientEmail"
            v-model="clientEmail"
          />
        </div>
        <div class="input flex flex-col mb-6 bg-content-color">
          <label
            for="clientStreetAddress"
            class="streetaddress text-xs mb-2 bg-content-color"
            >Street Address</label
          >
          <input
            class="text-input bg-white text-gray-700 w-full rounded-sm py-1.5 px-1 border-none focus:outline-none"
            type="text"
            required
            id="clientStreetAddress"
            v-model="clientStreetAddress"
          />
        </div>
        <div class="location-details flex gap-4 bg-content-color">
          <div
            class="input flex flex-col w-[150px] mb-6 flex-1 bg-content-color"
          >
            <label
              for="clientCity"
              class="citytwo text-xs mb-2 bg-content-color"
              >City</label
            >
            <input
              class="text-input bg-white text-gray-700 w-full rounded-sm py-1.5 px-1 border-none focus:outline-none"
              type="text"
              required
              id="clientCity"
              v-model="clientCity"
            />
          </div>
          <div
            class="input flex flex-col w-[150px] mb-6 flex-1 bg-content-color"
          >
            <label
              for="clientZipCode"
              class="zipcodetwo text-xs mb-2 bg-content-color"
              >Zip Code</label
            >
            <input
              class="text-input bg-white text-gray-700 w-full rounded-sm py-1.5 px-1 border-none focus:outline-none"
              type="text"
              required
              id="clientZipCode"
              v-model="clientZipCode"
            />
          </div>
          <div
            class="input flex flex-col w-[150px] mb-6 flex-1 bg-content-color"
          >
            <label
              for="clientCountry"
              class="countrytwo text-xs mb-2 bg-content-color"
              >Country</label
            >
            <input
              class="text-input bg-white text-gray-700 w-full rounded-sm py-1.5 px-1 border-none focus:outline-none"
              type="text"
              required
              id="clientCountry"
              v-model="clientCountry"
            />
          </div>
        </div>
      </div>

      <div class="invoice-work flex flex-col mb-6 bg-content-color">
        <div class="payment flex gap-6 bg-content-color">
          <div class="input flex flex-col mb-6 flex-1 bg-content-color">
            <label
              for="invoiceDate"
              class="invoicedata text-xs mb-2 bg-content-color"
              >Invoice Date</label
            >
            <input
              class="text-input bg-white text-gray-700 w-full rounded-sm py-1.5 px-1 border-none focus:outline-none"
              type="text"
              disabled
              id="invoiceDate"
              v-model="invoiceDate"
            />
          </div>
          <div class="input flex flex-col mb-6 flex-1 bg-content-color">
            <label
              for="paymentDueDate"
              class="paymentdue text-xs mb-2 bg-content-color"
              >Payment Due</label
            >
            <input
              class="text-input bg-white text-gray-700 w-full rounded-sm py-1.5 px-1 border-none focus:outline-none"
              type="text"
              disabled
              id="paymentDueDate"
              v-model="paymentDueDate"
            />
          </div>
        </div>

        <div class="input flex flex-col mb-6 bg-content-color">
          <label
            for="paymentTerms"
            class="paymentterm text-xs mb-2 bg-content-color"
            >Payment Terms</label
          >
          <select
            class="text-input bg-white w-full py-1.5 px-1 border-none focus:outline-none"
            type="text"
            required
            id="paymentTerms"
            v-model="paymentTerms"
          >
            <option value="30" class="option border-none">Net 30 Days</option>
            <option value="60">Net 60 Days</option>
          </select>
        </div>
        <div class="input flex flex-col mb-6 bg-content-color">
          <label
            for="productDescription"
            class="productdescription text-xs mb-2 bg-content-color"
            >Product Description</label
          >
          <input
            class="text-input bg-white text-gray-700 w-full rounded-sm py-1.5 px-1 border-none focus:outline-none"
            type="text"
            required
            id="productDescription"
            v-model="productDescription"
          />
        </div>

        <div class="work-items bg-content-color">
          <h3
            class="item-list mb-4 text-lg text-gray-500 w-full bg-content-color"
          >
            Item List
          </h3>
          <table class="item-list mb-4 text-lg w-full bg-content-color">
            <tr class="table-heading flex gap-4 text-sm mb-4 bg-content-color">
              <th class="itemName basis-1/2 text-left bg-content-color">
                Item Name
              </th>
              <th class="qty basis-1/5 text-left bg-content-color">Quantity</th>
              <th class="price basis-1/5 text-left bg-content-color">Price</th>
              <th
                class="total basis-1/5 self-center text-left bg-content-color"
              >
                Total
              </th>
            </tr>
            <tr
              class="table-items flex gap-4 text-sm relative mb-6 w-full bg-content-color"
              v-for="(item, index) in invoiceItemList"
              :key="index"
            >
              <td class="itemName basis-1/2 bg-content-color">
                <input
                  type="text"
                  v-model="item.itemName"
                  class="nameInput bg-white text-gray-700 w-[240px] rounded-sm py-1.5 px-1 border-none focus:outline-none"
                />
              </td>
              <td class="qty basis-[10%] bg-content-color text-left">
                <input
                  type="text"
                  v-model="item.qty"
                  class="qtyInput bg-white w-[100px] text-gray-700 rounded-sm py-1.5 px-1 border-none focus:outline-none"
                />
              </td>
              <td class="price basis-1/5 bg-content-color">
                <input
                  type="text"
                  v-model="item.price"
                  class="priceInput bg-white w-[100px] text-gray-700 rounded-sm py-1.5 px-1 border-none focus:outline-none"
                />
              </td>
              <td
                class="total basis-1/5 self-center w-[100px] rounded-sm py-1.5 px-1 text-white bg-content-color"
              >
                $ {{ (item.total = item.qty * item.price) }}
              </td>
              <img
                @click="deleteInvoiceItem(item.id)"
                src="@/assets/icon-delete.svg"
                alt=""
                class="item-image absolute top-2 right-0 w-3 h-4 text-white"
              />
            </tr>
          </table>
          <div
            @click="addInvoiceItem"
            class="button flex text-white bg-dark-purple text-center justify-center w-full py-3 px-3 rounded-[40px]"
          >
            <img
              src="@/assets/icon-plus.svg"
              alt=""
              class="addItem mt-1.5 mr-1 w-3 h-3 bg-transparent"
            />
            Add New Item
          </div>
        </div>
      </div>

      <div class="save flex bg-content-color mt-4">
        <div class="left bg-content-color flex-1">
          <button
            @click="closeInvoice"
            class="cancel bg-red items-center py-3 px-3 rounded-[40px] mr-2 text-white"
          >
            Cancel
          </button>
        </div>
        <div class="right flex bg-content-color flex-1 justify-end">
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
import { mapMutations } from "vuex";
import { uid } from "uid";
export default {
  name: "InvoiceModal",
  data() {
    return {
      dateOptions: { year: "numeric", month: "short", day: "numeric" },
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
  created() {
    this.invoiceDateUnix = Date.now();
    this.invoiceDate = new Date(this.invoiceDateUnix).toLocaleDateString(
      "en-us",
      this.dateOptions
    );
  },
  methods: {
    ...mapMutations(["TOGGLE_INVOICE"]),
    closeInvoice() {
      this.TOGGLE_INVOICE();
    },
    addInvoiceItem() {
      this.invoiceItemList.push({
        id: uid(),
        itemName: "",
        qty: "",
        price: 0,
        total: 0,
      });
    },
    deleteInvoiceItem(id) {
      this.invoiceItemList = this.invoiceItemList.filter(
        (item) => item.id !== id
      );
    },
  },
  watch: {
    paymentTerms() {
      const futureDate = new Date();
      this.paymentDueDateUnix = futureDate.setDate(
        futureDate.getDate() + parseInt(this.paymentTerms)
      );
      this.paymentDueDate = new Date(
        this.paymentDueDateUnix
      ).toLocaleDateString("en-us", this.dateOptions);
    },
  },
};
</script>
<style></style>
