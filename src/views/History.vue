<template>
  <div class="history">
    <side-nav :modalAdd="false" />
   <section class="main-section">
      <header-item :text="'History'" :searchicon="false" />
      <main class="container">
          <div class="row mt-4">
        <div class="col-12 col-md-4">
          <img class="card-img-top"  src="../assets/history/Card-1.svg" alt=""/>
        </div>
        <div class="col-12 col-md-4">
          <img class="card-img-top"  src="../assets/history/Card-2.svg" alt=""/>
        </div>
        <div class="col-12 col-md-4">
          <img class="card-img-top"  src="../assets/history/Card-3.svg" alt=""/>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-12">
          <img src="../assets/history/Grafik.svg" alt="" class="card-img-top" />
        </div>
      </div>
      <h2 class="text-left mt-3 p-2">Recent orders</h2>
        <b-table striped hover :items="items" :fields="fields"></b-table>
      </main>
    </section>
  </div>
</template>

<script>
import HeaderItem from "../components/Header.vue";
import axios from "axios";
import SideNav from "../components/Navbar.vue";
export default {
  name: "History",
  components: {
    HeaderItem,
    SideNav,
  },
  data() {
    return {
      fields: [
        {
          key: "invoice",
          label: "INVOICES",
          sortable: true,
        },
        {
          key: "cashier",
          label: "CASHIER",
          sortable: true,
        },
        {
          key: "date",
          label: "DATES",
          sortable: true,
        },
        {
          key: "orders",
          label: "ORDER",
          sortable: true,
        },
        {
          key: "amount",
          label: "AMOUNT (Rp)",
          sortable: true,
          variant: "info",
        },
      ],
      items: [],
    };
  },
  mounted() {
    axios
      .get(process.env.VUE_APP_HISTORY)
      .then((res) => {
        this.items = res.data.result;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.history {
  margin: 0;
  padding: 0;
  height: 100vh;
  display: grid;
  grid-template-columns: 80px auto;
}
</style>