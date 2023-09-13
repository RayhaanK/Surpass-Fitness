<template>
  <div>
    <template>
      <div>
        <h2>Shopping Cart</h2>
        <ul>
          <li v-for="item in cart" :key="item.id">
            {{ item.name }} - ${{ item.price }}
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
    };
  },
  created() {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      this.cart = JSON.parse(storedCart);
    }
  },
  methods: {
    addToCart(item) {
      this.cart.push(item);
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
  },
};
</script>

<style scoped></style>
