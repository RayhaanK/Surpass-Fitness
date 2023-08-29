<template>
  <div>
    <section id="Home">
      <div class="landing">
        <div
          id="myCarousel"
          class="carousel slide mb-6"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://i.postimg.cc/y8x9QGTq/karsten-winegeart-0-Wra5-YYVQJE-unsplash.jpg"
                class="d-block w-100 img-fluid cImg"
                loading="lazy"
                alt="..."
              />
              <div class="container">
                <div class="carousel-caption text-end">
                  <h1>One more for good measure.</h1>
                  <p>
                    Some representative placeholder content for the third slide
                    of this carousel.
                  </p>
                  <p>
                    <a href="#"><button class="btn1">More</button></a>
                  </p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://i.postimg.cc/kGqD67Fb/jelmer-assink-gze-Tj-Gu3b-k-unsplash.jpg"
                class="d-block w-100 img-fluid cImg"
                loading="lazy"
                alt="..."
              />
              <div class="container">
                <div class="carousel-caption text-end">
                  <h1>One more for good measure.</h1>
                  <p>
                    Some representative placeholder content for the third slide
                    of this carousel.
                  </p>
                  <p>
                    <a href="#"><button class="btn1">More</button></a>
                  </p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://i.postimg.cc/hPCbBYcr/danielle-cerullo-CQf-Nt66tt-ZM-unsplash.jpg"
                class="d-block w-100 img-fluid cImg"
                loading="lazy"
                alt="..."
              />
              <div class="container">
                <div class="carousel-caption text-end">
                  <h1>One more for good measure.</h1>
                  <p>
                    Some representative placeholder content for the third slide
                    of this carousel.
                  </p>
                  <p>
                    <a href="#"><button class="btn1">More</button></a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
    <section id="category" class="category">
      <div class="container-fluid">
        <div class="text">
          <h2 class="mt-4">LOOKING FOR SOMETHING SPECIFIC?</h2>
          <p class="subT">
            We offer a select range of products across multiple categories that
            will help you in your journey
          </p>
        </div>
        <div class="cards d-flex justify-content-center">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
            <div class="col d-flex justify-content-center">
              <div class="cardS">
                <div class="cardS-info">
                  <p class="title">Cat 1</p>
                </div>
              </div>
            </div>
            <div class="col d-flex justify-content-center">
              <div class="cardS">
                <div class="cardS-info">
                  <p class="title">Cat 2</p>
                </div>
              </div>
            </div>
            <div class="col d-flex justify-content-center">
              <div class="cardS">
                <div class="cardS-info">
                  <p class="title">Cat 3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="tips" class="tips mt-5">
      <div class="container">
        <div class="text">
          <h2 class="mt-4">TIPS TO HELP YOU ON YOUR JOURNEY</h2>
        </div>
      </div>
      <div class="container-fluid  d-flex justify-content-center">
        <div class="row">
          <div class="col">
            <div class="card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">
              Card subtitle
            </h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
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
  components: {},
};
</script>

<style scoped>
.cImg {
  height: 90vh !important;
  object-fit: cover;
}

.btn1 {
  background-color: #edb518;
  color: #79031d;
  padding: 0.7rem;
  border-radius: 25px;
  width: 10rem;
  border: none;
}

h2 {
  color: #79031d;
  font-weight: 800;
}

.subT {
  color: #000407;
}

.btn1:hover {
  background-color: #79031d;
  color: #edb518;
  box-shadow: 10px 10px 15px #edb4186b;
  transition: 0.2s;
}

.cardS {
  width: 400px;
  height: 360px;
  padding: 5px;
  overflow: visible;
  position: relative;
  z-index: 1;
  border: none;
}

.cardS-info {
  background: #79031d;
  color: #79031d;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: visible;
  border-radius: 0.7rem;
}

.cardS .title {
  font-weight: bold;
  font-size: 2rem;
  letter-spacing: 0.1em;
}

.cardS:hover .cardS-info {
  color: #edb518;
  transition: color 1s;
}

@media (max-width: 425px) {
  .cardS {
    width: 290px;
  }

  .cardS-info {
    color: #edb518;
  }
}
@media (max-width: 320px) {
  .cardS {
    width: 270px;
  }
}
</style>
