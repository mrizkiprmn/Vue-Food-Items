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
aside {
  background-color: white;
}

img{
  
  width: 40px;
  margin: 3px;
  padding: 0;
}
nav {
  display: flex;
  flex-direction: column;
  height: auto;
  background-color: white;
  position: sticky;
  top: 50px;
}
.button,
:focus {
  cursor: pointer;
  margin: 20px;
  outline: none; 
}
.header-nav {
  margin: 10px 0;
  position: sticky;
  top: 15px;

}
.router {
  color: black;
}

</style>