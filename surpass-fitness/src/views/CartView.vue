<template>
  <div>
    <h1>Your Cart <i class="bi bi-basket"></i></h1>
    <center>
      <div class="table-responsive">
        <table class="table table-bordered border-black text-center">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Product Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in cart" :key="item.id">
              <td>{{ item.prodTitle }}</td>
              <td>R{{ item.prodPrice }}</td>
              <td><img :src="item.prodImage" class="card-img-top img-fluid" :alt="prodTitle"></td>
              <td>
                <button @click="removeFromCart(index)">Remove</button>
              </td>
            </tr>
          </tbody>
        </table>
        <button @click="redirectToCheckout">Proceed To Checkout...</button>
      </div>
    </center>
  </div>
</template>


<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  methods: {
    removeFromCart(index) {
      this.$store.dispatch('removeFromCart', index);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    updateQuantity(index) {
      const item = this.cart[index];
      this.$store.dispatch('addToCart', { product: item, quantity: item.quantity });
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    redirectToCheckout() {
      this.$router.push({ name: 'checkout' });
    }
  },
};
</script>

<style scoped>
img{
  width: 20%;
}
</style>