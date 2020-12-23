<template>
  <div class="items row">
    <div class="image">
      <img :src="data.image" :alt="data.name" />
    </div>
    <div class="content text-left">
      <h5>{{ data.name }}</h5>
      <div class="price">
        <div class="plusminus form-group row">
          <button class="btn btn-danger btn-sm" @click="minus()">-</button>
          <input type="number" class="input-pm bg-light form-control p-0 text-center" :value="data.count"/>
          <button class="btn btn-info btn-sm" @click="plus()">+</button>
        </div>
        <h5>{{ data.price }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cart",
  props: {
    data: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.item,
.row {
  margin: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.image {
  width: 96px;
  margin: 20px;
  padding: 0;
}

img {
  max-width: 100%;
  max-height: 100%;
}

.content {
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.price {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.plusminus {
  margin-right: 20px;
  width: 100px;
}
.input-pm {
  width: 40px;
}

</style>