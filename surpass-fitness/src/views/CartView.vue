<template>
  <div>
    <section class="cart" id="cart">
      <h2 class="mt-3 mb-3">Your Cart <i class="bi bi-basket"></i></h2>
      <div class="cartDisplay">
        <div class="container-fluid">
          <div class="table-responsive">
            <table class="table table-bordered border-black text-center">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Product Image</th>
                  <th>Price</th>
                  <th>Action</th>
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
                        loading="lazy"
                      />
                    </div>
                  </td>
                  <td>
                    <div class="tablerows">R{{ item.prodPrice }}</div>
                  </td>
                  <td>
                    <div class="tablerows">
                      <button class="btnDelete" @click="removeFromCart(index)">
                        Remove <i class="bi bi-trash3"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tbody id="checkOutput"></tbody>
              <tbody>
                <tr>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col" class="last">Amount Due:</th>
                  <th scope="col" class="last">R {{ totalAmount }}</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="checkout">
          <router-link to="/checkout"><button class="btnCheckout">Proceed to Checkout</button></router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
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
  methods: {
    removeFromCart(index) {
      this.$store.dispatch("removeFromCart", index);
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
  },
};
</script>

<style scoped>
.cart {
  min-height: 80vh;
}


img {
  width: 15rem;
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
.btnDelete {
  background-color: transparent;
  border: none;
  color: #79031d;
  background-color: #edb518;
  font-size: 1.1rem;
  width: 7rem;
  padding: 0.2rem;
}

.btnDelete:hover {
  color: #edb518;
  background-color: #79031d;
}

.btnCheckout {
  background-color: transparent;
  border: none;
  color: #79031d;
  background-color: #edb518;
  font-size: 1rem;
  width: 13rem;
  padding: 0.3rem;
}

.btnCheckout:hover {
  color: #edb518;
  background-color: #79031d;
}
</style>
