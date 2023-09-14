<template>
  <div>
    <section id="landing" class="landing">
      <div class="img">
        <div class="heading">
          <h1>Dumbbells</h1>
        </div>
      </div>
    </section>
    <section id="products" class="products">
      <div class="container-fluid d-flex productDisplay">
        <div class="left">
          <div class="search">
            <h2>PRODUCT SEARCH</h2>
            <form class="d-flex" role="search">
              <input
                class="form-control mx-auto search"
                type="search"
                placeholder="Search"
                aria-label="Search"
                v-model="searchQuery"
              />
            </form>
          </div>
          <div class="filter mt-lg-5 mb-lg-5">
            <h2>SORT BY:</h2>
            <div class="dropdown ms-3">
              <button
                class="btn1 dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              Sort By:
              </button>
              <ul class="dropdown-menu text-center">
                <li>
                  <button class="btn2" @click="sortAlphabeticallyAsc()">
                    Alphatically(A-Z)
                  </button>
                </li>
                <li>
                  <button class="btn2" @click="sortAlphabeticallyDesc()">
                    Alphatically(Z-A)
                  </button>
                </li>
                <li>
                  <button class="btn2" @click="sortAmountAsc()">
                    Price: Low to High
                  </button>
                </li>
                <li>
                  <button class="btn2" @click="sortAmountDesc()">
                    Price: High to Low
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div class="category mt-2">
            <h2>CATEGORIES</h2>
            <div class="catList">
              <router-link class="catLink" to="/product">All</router-link>
              <router-link class="catLink" to="/treadmill"
                >Treadmills</router-link
              >
              <router-link class="catLink" to="/exercisebikes"
                >Exercise Bikes</router-link
              >
              <router-link class="catLink" to="/benches">Benches</router-link>
              <router-link class="catLink" to="/yogamats"
                >Yoga Mats</router-link
              >
              <router-link class="catLink" to="/weights">Weights</router-link>
              <router-link class="catLink" to="/dumbbells"
                >Dumbbells</router-link
              >
            </div>
          </div>
        </div>
        <div class="right d-flex justify-content-center ms-lg-4">
          <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3">
            <div
              class="col p-3 p-lg-5"
              v-for="product in filteredProducts"
              :key="product.prodID"
            >
              <router-link
                :to="{
                  name: 'single',
                  params: { prodID: product.prodID },
                }"
                ><button class="rbtn mt-2 mb-5">
                  <div class="card">
                    <div class="image">
                      <img
                        :src="product.prodImage"
                        class="card-img-top prodImg"
                        :alt="product.prodTitle"
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">{{ product.prodTitle }}</h5>
                      <p class="card-text">R{{ product.prodPrice }}</p>
                    </div>
                    <div class="button p-3">
                      <button class="btnC" @click.prevent="addToCart(product)">
                        <i class="bi bi-basket-fill"></i>
                      </button>
                      <div class="hoverText">Add to Cart</div>
                    </div>
                  </div>
                </button></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    filteredProducts() {
      if (!this.products) {
        return [];
      }
      return this.products.filter((product) => {
        const prodTitle = product?.prodTitle?.toLowerCase();
        const category = product?.Category?.toLowerCase();
        return (
          (prodTitle && prodTitle.includes(this.searchQuery.toLowerCase())) ||
          (category && category.includes(this.searchQuery.toLowerCase()))
        );
      });
    },
  },
  methods: {
    sortAlphabeticallyAsc() {
      this.inAsc = true;
      this.inDesc = false;
      this.products.sort((a, b) => {
        const prodTitleA = a.prodTitle.toLowerCase();
        const prodTitleB = b.prodTitle.toLowerCase();
        if (prodTitleA < prodTitleB) {
          return -1;
        } else {
          return 0;
        }
      });
    },
    sortAlphabeticallyDesc() {
      this.inAsc = false;
      this.inDesc = true;
      this.products.sort((a, b) => {
        const prodTitleA = a.prodTitle.toLowerCase();
        const prodTitleB = b.prodTitle.toLowerCase();
        if (prodTitleA > prodTitleB) {
          return -1;
        } else {
          return 0;
        }
      });
    },
    sortAmountAsc() {
      this.inAsc = true;
      this.inDesc = false;
      this.products.sort((a, b) => {
        return a.prodPrice - b.prodPrice;
      });
    },
    sortAmountDesc() {
      this.inAsc = false;
      this.inDesc = true;
      this.products.sort((a, b) => {
        return b.prodPrice - a.prodPrice;
      });
    },
    addToCart(product) {
      this.$store.dispatch("addToCart", product);
    },
  },
  mounted() {
    this.$store.dispatch("fetchDumbbells");
  },
};
</script>

<style scoped>
.landing {
  height: 90vh;
}

h2 {
  font-size: 1.5rem;
}

img {
  height: 90vh;
  width: 100%;
  aspect-ratio: 1/1;
}

.img {
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.8) 100%
    ),
    url("https://i.postimg.cc/rmXdzHpw/szabolcs-toth-Cyuvs-E3-TVak-unsplash.jpg");
  background-attachment: fixed;
  height: 86vh;
  background-size: cover;
  background-repeat: no-repeat;
}

.heading {
  position: relative;
  top: 40%;
  color: white;
  font-weight: 800;
  text-shadow: 2px 2px black;
  font-family: "Broad Daylight", sans-serif;
  font-size: 2.3rem;
}

.products {
  height: max-content;
}

.left {
  width: 26%;
  border-right: 1px solid black;
  padding: 1rem;
}

.right {
  width: 74%;
}

.dropdown-menu {
  width: 12rem;
}

.btn1 {
  width: 12rem;
  background-color: #edb518;
  color: #79031d;
  padding: 0.5rem;
  /* border-radius: 20px; */
  border: none;
}
.card {
  height: 26rem;
  width: 18rem;
}

.card:hover {
  transform: scale(1.05);
  transition: ease-out 0.2s;
}

.image {
  display: flex;
  justify-content: center;
}

.card-title {
  font-size: 1rem;
  height: 50px !important;
}
.rbtn {
  border: none;
}
.card-img-top {
  height: 15rem;
  object-fit: contain;
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

.button:hover .hoverText {
  transition: ease-out 0.2s;
  display: block;
}

@media (max-width: 1000px) {
  .productDisplay {
    flex-direction: column !important;
  }

  .left {
    width: 100%;
    display: flex;
    justify-content: center;
    border-right: none;
    flex-direction: column;
  }

  .right {
    width: 100%;
  }

  .catList {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .filter {
    margin-top: 1.5rem;
  }

  .category {
    border-bottom: 1px solid black;
    padding: 1rem;
  }
}
@media (max-width: 600px) {
  .category {
    border-bottom: 1px solid black;
  }
}
</style>
