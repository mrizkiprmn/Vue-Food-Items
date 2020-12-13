<template>
  <aside class="shadow-sm">
    <div class="header-nav">
      <img src="../assets/icon/menu-1.png" alt="">
    </div>
    <nav>
      <router-link to="/" class="router button">
        <img src="../assets/icon/fork.png" alt="">
      </router-link>

      <router-link to="/history" class="router button">
        <img src="../assets/icon/clipboard.png" alt="">
      </router-link>
      <div v-b-modal="'modal-add'" class="button" v-if="modalAdd == true">
        <img src="../assets/icon/add.png" alt="">
      </div>
    </nav>
  </aside>
</template>

<script>
export default {
  name: "navbar",
  props: {
    modalAdd: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
  height: auto;
  background: #ffffff;
  position: sticky;
  top: 50px;
}
.button {
  margin: 20px;
}
.header-nav {
  margin: 10px 0;
  position: sticky;
  top: 15px;

}
.router {
  color: black;
}
img{
  width: 40px;
  margin: 3px;
  padding: 0;
}
</style>