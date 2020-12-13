<template>
  <div class="item p-2 m-2">
    <div class="image">
      <img :src="image" :alt="name" />
    </div>
    <p class="title">{{ name }}</p>
    <p class="value">Rp. {{ price }}</p>
  </div>
</template>

<script>
export default {
  name: "card-items",
  data() {
    return {
      datas: {},
    };
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.item img {
  max-width: 100%;
  max-height: 100%;
}
.item .title {
  font-size: 20px;
  margin: 0;
}

.item .value {
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
}
.image {
  width: 250px;
  display: flex;
  flex-wrap: wrap;
  margin: 30px
}
img {
  border-radius: 10px 10px 0px 0px;
}

.item {
  margin: 10px;
}
</style>