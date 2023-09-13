<template>
  <div>
    <section id="single" class="single">
      <div class="container-fluid d-flex justify-content-center mt-5">
        <div class="container d-flex justify-content-center">
          <div
            class="card mb-3"
            v-for="product in product"
            :key="product.prodID"
          >
            <div class="row g-0">
              <div class="col-md-4 image">
                <img
                  :src="product.prodImage"
                  class="img-fluid"
                  :alt="product.prodTitle"
                />
              </div>
              <div class="col-md-8 textCol">
                <div class="card-body">
                  <h5 class="card-title mb-2">{{ product.prodTitle }}</h5>
                  <p class="card-text content d-flex justify-content-center">
                    {{ product.content }}
                  </p>
                  <div class="specifications mt-5">
                    <h5 class="card-title">Specifications</h5>
                    <p class="card-text">{{ product.specifications }}</p>
                  </div>
                  <div class="price mt-5">
                    <h4 class="card-title">R{{ product.prodPrice }}</h4>
                  </div>
                  <div class="products mb-2 mt-2">
                    <router-link to="/product"
                      ><button class="rbtn">
                        Back to Products
                      </button></router-link
                    >
                    <button @click="addToCart(product)">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["prodID"],
  data() {
    return {
      cart: [],
    };
  },
  created() {
    this.$store.dispatch("fetchProduct", this.prodID);
  },
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  methods: {
    addToCart(product) {
      this.cart.push(product);
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
  },
  },
</script>

<style scoped>
.single {
  height: 100vh;
}

.card-text {
  font-size: 1rem;
}

.textCol {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.specifications {
  max-width: 37rem;
  margin: auto;
}

.rbtn {
  border: none;
  width: 9rem;
  padding: 0.3rem;
  border-radius: 0.3rem;
  background-color: #edb518;
  color: #79031d;
}

.image {
  display: flex;
  align-items: center;
}
</style>
