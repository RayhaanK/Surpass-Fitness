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
      <div class="container-fluid d-flex">
        <div class="left">
          <div class="search">
            <h2>PRODUCT SEARCH</h2>
            <form class="d-flex" role="search">
              <input
                class="form-control ms-2 me-3"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <div class="filter mt-5 mb-5">
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
          <div class="category mt-2">
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
        <div class="right d-flex justify-content-center ms-4 mt-3">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                <div class="col">
                    <div class="card cardChoice" style="width: 18rem">
              <h2 class="card-title headgingChoice p-4">
                <i class="bi bi-bicycle"></i> Delivery
              </h2>
              <div class="card-body mb-5">
                <h6 class="card-subtitle mb-2 textChoice">Card subtitle</h6>
                <p class="card-text textChoice">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
                </div>
                <div class="col">
                    <div class="card cardChoice" style="width: 18rem">
              <h2 class="card-title headgingChoice p-4">
                <i class="bi bi-bicycle"></i> Delivery
              </h2>
              <div class="card-body mb-5">
                <h6 class="card-subtitle mb-2 textChoice">Card subtitle</h6>
                <p class="card-text textChoice">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
                </div>
                <div class="col">
                    <div class="card cardChoice" style="width: 18rem">
              <h2 class="card-title headgingChoice p-4">
                <i class="bi bi-bicycle"></i> Delivery
              </h2>
              <div class="card-body mb-5">
                <h6 class="card-subtitle mb-2 textChoice">Card subtitle</h6>
                <p class="card-text textChoice">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
                </div>
                <div class="col">
                    <div class="card cardChoice" style="width: 18rem">
              <h2 class="card-title headgingChoice p-4">
                <i class="bi bi-bicycle"></i> Delivery
              </h2>
              <div class="card-body mb-5">
                <h6 class="card-subtitle mb-2 textChoice">Card subtitle</h6>
                <p class="card-text textChoice">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
                </div>
                <div class="col">
                    <div class="card cardChoice" style="width: 18rem">
              <h2 class="card-title headgingChoice p-4">
                <i class="bi bi-bicycle"></i> Delivery
              </h2>
              <div class="card-body mb-5">
                <h6 class="card-subtitle mb-2 textChoice">Card subtitle</h6>
                <p class="card-text textChoice">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
                </div>
                <div class="col">
                    <div class="card cardChoice" style="width: 18rem">
              <h2 class="card-title headgingChoice p-4">
                <i class="bi bi-bicycle"></i> Delivery
              </h2>
              <div class="card-body mb-5">
                <h6 class="card-subtitle mb-2 textChoice">Card subtitle</h6>
                <p class="card-text textChoice">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
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
export default {};
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
  height: 100vh;
}

.left {
  width: 26%;
  border-right: 1px solid black;
  padding: 1rem;
  height: 100vh;
}

/* .filter {
  display: flex;
} */

.btn1 {
  width: 10rem;
  background-color: #edb518;
  color: #79031d;
  padding: 0.5rem;
  border-radius: 20px;
  border: none;
}
</style>
