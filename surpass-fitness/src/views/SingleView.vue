<template>
  <div>
    <section id="single" class="single">
      <div class="container-fluid d-flex justify-content-center mt-5">
        <div class="container d-flex justify-content-center" v-if="product">
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
                    <div class="button p-3">
                      <button class="btnC" @click.prevent="addToCart(product)">
                        <i class="bi bi-basket-fill fa-2x"></i>
                      </button>
                    </div>
                    <router-link to="/product"
                      ><button class="rbtn">
                        Back to Products
                      </button></router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="row">
          <Spinner/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Spinner from "@/components/SpinnerComp.vue";
export default {
  components: {
    Spinner
  },
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
      this.$store.dispatch("addToCart", product);
    },
  },
  }
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
.rbtn:hover {
  color: #edb518;
  background-color: #79031d;
}

.image {
  display: flex;
  align-items: center;
}

.button {
  width: fit-content;
  margin: auto;
}

.btnC {
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
}

.btnC:hover {
  transform: scale(1.4);
  transition: ease-out 0.2s;
  color: #79031d;
}

.hoverText {
  position: relative;
  left: 75px;
  bottom: 30px;
  width: 100px;
  color: black;
  display: none;
}

@media (max-width: 1000px) {

  .single {
    height: max-content;
  }
  
}
</style>
