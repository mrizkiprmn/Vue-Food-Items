<template>
  <header class="border shadow-lg">
    <div class="title">
      <h2>{{ text }}</h2>
      <div class="searchshow ml-3" v-on:click="isHidden = !isHidden">
        <img src="../assets/icon/search.png" alt="">
      </div>
      </div>
  </header>
</template>

<script>
export default {
  name: "header-item",
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
};
</script>

<style scoped>
header {
  display: flex;
  position: sticky;
  background: white;
  top: 0;
  height: 70px;
}

.title {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  font-size: 1rem;
}

h2 {
  margin: auto;
}

img {
  width: 40px;
  margin: 15px;
  padding: 0;
}


</style>