<template>
  <div class="history">
     
    <side-nav :modalAdd="true" />
     <header-item :text="'History'" :searchIcon="false"/>
    <div class="table">
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
    
      
     
        
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
  props:{
    searchIcon: {
      type : Boolean,
      required: true,
    }
  },
  data() {
    return {
      fields: [
        {
          key: "invoice",
          label: "Invoices",
          sortable: true,
        },
        {
          key: "cashier",
          label: "Cashier",
          sortable: true,
        },
        {
          key: "date",
          label: "Dates",
          sortable: true,
        },
        {
          key: "orders",
          label: "ORDERS",
          sortable: true,
        },
        {
          key: "amount",
          label: "AMOUNT (Rp)",
          sortable: true,
          variant: "success",
        },
      ],
      items: [],
    };
  },
  mounted() {
    axios
      .get('http://localhost:8888/history')
      .then((res) => {
        this.items = res.data.result;
      })
      .catch((err) => {
        alert(err.message);
      });
  },
};
</script>

<style scoped>
.nav {
  height: 1000px;
}
.history {
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 80px auto;
}

.table {
  align-items: center;
  width: 1000px;
  margin: 10px;
  padding: 10px 420px; 
}

.header-nav {
  margin: 10px 0;
  position: sticky;
  top: 15px;
  height: 2000px;
}
</style>