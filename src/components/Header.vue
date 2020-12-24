<template>
  <header class="border shadow-lg">
    <div class="title">
      <h2>{{ text }}</h2>
    <b-form-input
      id="inline-form-input-name"
      class="form-search"
      type="search"
      v-model="inputValue"
      v-on:keyup="emitToParent"
      placeholder="Search Product"
    ></b-form-input>
        <img src="../assets/icon/search.png" alt="">
     
     
      </div>
  </header>
</template>

<script>
export default {
  name: "header",
  props: {
    searchIcon: {
      type: Boolean,
      required: true,
    },
    text:{
      type: String,
      required: true,
    }
    
  },
   data() {
    return {
      inputValue: "",
        options: [
          {
            value: true,
            text: "Product",
          },
          {
            value: false,
            text: "Category",
          },
        ],
      }
   },
   
methods: {
    emitToParent() {
      this.$emit("searchToHome", this.inputValue);
    },
},

   

    };
</script>

<style scoped>
.form-search {
  width: 250px;
  margin: 13px;
}
header {
  display: flex;
  position: sticky;
  top: 0;
  height: 70px;
  background: white;
}

.title h2 {
  margin: auto;
  font-size: 35px;
}


.title {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
}


img {
  width: 40px;
  margin: 15px;
  padding: 0;
}


</style>