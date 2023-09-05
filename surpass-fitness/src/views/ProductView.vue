<template>
  <div>
    <section id="landing" class="landing">
      <div class="img">
        <img
          src="https://i.postimg.cc/y8x9QGTq/karsten-winegeart-0-Wra5-YYVQJE-unsplash.jpg"
          class="d-block w-100 img-fluid cImg"
          loading="lazy"
          alt="..."
        />
      </div>
    </section>
    <section id="products" class="products">
      <div class="container-fluid d-flex productDisplay">
        <div class="left">
          <div class="search">
            <h2>PRODUCT SEARCH</h2>
            <form class="d-flex" role="search">
              <input
                class="form-control me-3"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
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
                Dropdown button
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="category d-none d-lg-block mt-2">
            <h2>CATEGORIES</h2>
            <div class="list-group">
              <a
                href="#"
                class="list-group-item list-group-item-action"
                aria-current="true"
              >
                The current link item
              </a>
              <a href="#" class="list-group-item list-group-item-action"
                >A second link item</a
              >
              <a href="#" class="list-group-item list-group-item-action"
                >A third link item</a
              >
              <a href="#" class="list-group-item list-group-item-action"
                >A fourth link item</a
              >
              <a href="#" class="list-group-item list-group-item-action"
                >A fourth link item</a
              >
              <a href="#" class="list-group-item list-group-item-action"
                >A fourth link item</a
              >
              <a href="#" class="list-group-item list-group-item-action"
                >A fourth link item</a
              >
              <a href="#" class="list-group-item list-group-item-action"
                >A fourth link item</a
              >
              <a href="#" class="list-group-item list-group-item-action"
                >A fourth link item</a
              >
              <a href="#" class="list-group-item list-group-item-action"
                >A fourth link item</a
              >
              <a href="#" class="list-group-item list-group-item-action"
                >A fourth link item</a
              >
            </div>
          </div>
        </div>
          <div class="category d-block d-lg-none mt-2">
            <h2>CATEGORIES</h2>
            <div class="dropdown ms-3">
              <button
                class="btn1 dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown button
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </div>
          </div>
        <div class="right d-flex justify-content-center ms-lg-4 mt-3">
          <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3">
            <div class="col" v-for="product in products" :key="product.prodID">
              <router-link 
              :to="{
                  name: 'single',
                  params: { prodID: product.prodID }
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
              </div>
            </button></router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
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
  object-fit: cover;
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

.btn1 {
  width: 10rem;
  background-color: #edb518;
  color: #79031d;
  padding: 0.5rem;
  border-radius: 20px;
  border: none;
}

.card {
  height: 21rem;
  width: 17rem;
}

.image {
  display: flex;
  justify-content: center;
}

.card-title {
  font-size: 1rem;
}


.rbtn{
  border: none;
}
.card-img-top {
  height: 15rem;
  object-fit: contain;
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
