<template>
  <header class="border shadow-lg">
    <div class="title">
      <h2>{{ text }}</h2>
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
};
</script>

<style scoped>
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