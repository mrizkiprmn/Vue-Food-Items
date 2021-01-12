<template>
  <div class="card mb-1">
    <div class="row">
      <div class="col-4">
        <img :src="image" class="card-img py-4 ml-3" :alt="name" />
      </div>
      <div class="col-8">
        <div class="">
          <p class="card-text pt-2">{{ name }}</p>
          <div class="btn btn-danger" @click="less()">-</div>
          <div class="btn border">{{ qty }}</div>
          <div class="btn btn-primary " @click="plus(addItems)">+</div>
          <h5 class="card-title pt-3">Rp.{{ price * qty}}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    // jumlah : {
    //   type : Number,
    //   required : true,
    // }
  },
  data() {
    return {
      qty: 1,
    };
  },
  methods: {
  
    plus() {
      if (this.qty >= 1) {
        this.qty += 1;
      }
    },
    less() {
      if (this.qty == 1) {
        // this.jumlah -= 1;
      } else {
        this.qty -= 1;
      }
    },
  },
};
</script>
