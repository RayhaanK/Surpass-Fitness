<template>
    <div>
        <section class="cart" id="cart">
      <h2 class>Checkout</h2>
      <div class="cartDisplay">
        <div class="container-fluid">
          <div class="table-responsive">
            <table class="table table-bordered border-black text-center">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Product Image</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in cart" :key="item.id">
                  <td>
                    <div class="tablerows">{{ item.prodTitle }}</div>
                  </td>
                  <td>
                    <div class="tablerows">
                      <img
                        :src="item.prodImage"
                        class="card-img-top img-fluid"
                        :alt="prodTitle"
                      />
                    </div>
                  </td>
                  <td>
                    <div class="tablerows">R{{ item.prodPrice }}</div>
                  </td>
                </tr>
              </tbody>
              <tbody id="checkOutput"></tbody>
              <tbody>
                <tr>
                  <th scope="col"></th>
                  <th scope="col" class="last">Amount Due:</th>
                  <th scope="col" class="last">R {{ totalAmount }}</th>
                </tr>
              </tbody>
            </table>
          </div>
          <h2>Changed your mind?</h2>
          <router-link to="/cart"><button class="btnBack mb-4">Go back to your Cart</button></router-link>
        </div>
    </div>
    </section>
    <Checkout/>
    </div>
</template>

<script>
import Checkout from "@/components/CheckoutComp.vue"
    export default {
        components: {
            Checkout
        },
        computed: {
    cart() {
      return this.$store.state.cart;
    },
    totalAmount() {
      return this.cart.reduce((total, item) => {
        return total + item.prodPrice;
      }, 0);
    },
  },
    }
</script>

<style scoped>
.cart  {
    min-height: 60vh;
}

th {
  text-align: center;
}

td {
  height: 150px;
}

.tablerows {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  text-align: center;
}

img {
  width: 11rem;
}

.btnBack {
  border: none;
  color: #79031d;
  background-color: #edb518;
  font-size: 1.1rem;
  width: 11rem;
  padding: 0.2rem;
}

.btnBack:hover {
  color: #edb518;
  background-color: #79031d;
}
</style>