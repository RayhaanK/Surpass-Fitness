<template>
  <div>
    <section id="Home" class="home">
      <div class="landing">
        <div class="container-fluid gx-0 contC">
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
                  src="https://i.postimg.cc/rsjQt4CT/anastase-maragos-9dz-WZQWZMd-E-unsplash.jpg"
                  class="d-block w-100 img-fluid cImg"
                  loading="lazy"
                  alt="..."
                />
                <div class="container">
                  <div class="carousel-caption text-end">
                    <h1 class="carouselHeading welcome">
                      WELCOME TO SURPASS FITNESS
                    </h1>
                    <p class="carouselText">
                      We offer a wide range of fitness equipment, so that you
                      can build your fantasy gym.
                    </p>
                    <p>
                      <router-link to="/about" class="dropdown-item"
                        ><button class="btn1">About Us</button></router-link
                      >
                    </p>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="https://i.postimg.cc/JzsDQ6P1/chuttersnap-B0dx5ptuf50-unsplash.jpg"
                  class="d-block w-100 img-fluid cImg"
                  loading="lazy"
                  alt="Surpass Fitness"
                />
                <div class="container">
                  <div class="carousel-caption text-end">
                    <h1 class="carouselHeading welcome"><span class="background">Want to buy something?</span></h1>
                    <p class="carouselText">Take a look at our catalogue!</p>
                    <p>
                      <router-link to="/product" class="dropdown-item"
                        ><button class="btn1">
                          View Products
                        </button></router-link
                      >
                    </p>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="https://i.postimg.cc/KjrX5fdm/adam-wilson-g-Nzqer-PFt-Ws-unsplash.jpg"
                  class="d-block w-100 img-fluid cImg"
                  loading="lazy"
                  alt="..."
                />
                <div class="container">
                  <div class="carousel-caption text-end">
                    <h1 class="carouselHeading welcome">
                      Looking for something that we don't have?
                    </h1>
                    <p class="carouselText">
                      Feel free to send us a message and we'll try our best to
                      get it for you!
                    </p>
                    <p>
                      <router-link to="/contact" class="dropdown-item"
                        ><button class="btn1">Contact Us</button></router-link
                      >
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
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
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
          <div class="row row-cols-1 row-cols-lg-3">
            <div class="col d-flex justify-content-center">
              <div class="cardL-container">
                <div class="cardL">
                  <div class="img-content">
                    <img
                      src="https://i.postimg.cc/4NmgrdcR/alina-chernysheva-JA2-S6s-JWleg-unsplash-1.jpg"
                      class="d-block img-fluid"
                      loading="lazy"
                      alt="Treadmills"
                    />
                  </div>
                  <div class="content">
                    <p class="heading">Treadmills</p>
                    <p>
                      Torch calories efficiently either by walking, running or
                      jogging. Improve your heart health, and achieve your
                      fitness goals with customized workouts using adjustable
                      speed and incline settings.
                    </p>
                    <router-link to="/treadmill"
                      ><button class="specificBtn">
                        View Treadmills
                      </button></router-link
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="col d-flex justify-content-center">
              <div class="cardL-container">
                <div class="cardL">
                  <div class="img-content">
                    <img
                      src="https://i.postimg.cc/fWfMQpkD/samuel-girven-BBR-zig-Emy-Q-unsplash.jpg"
                      class="d-block img-fluid"
                      loading="lazy"
                      alt="Dumbbell"
                    />
                  </div>
                  <div class="content">
                    <p class="heading">Dumbell</p>
                    <p>
                      Sculpt and tone your muscles with ease, building the
                      physique you desire. . Whether you're a beginner or a
                      seasoned lifter, these dumbbells are your ticket to a
                      stronger, healthier you.
                    </p>
                    <router-link to="/dumbbells"
                      ><button class="specificBtn">View Dumbbells</button></router-link
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="col d-flex justify-content-center">
              <div class="cardL-container">
                <div class="cardL">
                  <div class="img-content">
                    <img
                      src="https://i.postimg.cc/N0NB8pSZ/the-nix-company-bi-X8s-Bf-Nc-Pc-unsplash.jpg"
                      class="d-block img-fluid"
                      loading="lazy"
                      alt="..."
                    />
                  </div>
                  <div class="content">
                    <p class="heading">Yoga Mats</p>
                    <p>
                      Experience comfort and stability as you flow through your
                      poses, meditate, or stretch. Invest in your well-being and
                      embrace the serenity of yoga. <br />
                      Namaste!
                    </p>
                    <router-link to="/yogamats"
                      ><button class="specificBtn">View Yoga Mats</button></router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="tips" class="tips mt-5">
      <div class="container-fluid textContainer">
        <div class="text">
          <h2 class="mt-4 mb-3">TIPS TO HELP YOU ON YOUR JOURNEY</h2>
        </div>
      </div>
      <div class="container-fluid d-flex justify-content-center tipContainer">
        <div class="row">
          <div class="col colT">
            <div class="card tipC cardAbout">
              <div class="card-body">
                <h2 class="card-title white">About</h2>
                <h6 class="card-subtitle mb-2 white">
                  Need some more information?
                </h6>
                <p class="card-text white">
                  Found about more about the comapny and team and frequently
                  asked questions!
                </p>
                <router-link to="/about"
                  ><button class="btn1">About Us</button></router-link
                >
              </div>
            </div>
            <div class="card tipC cardContact">
              <div class="card-body">
                <h2 class="card-title mb-4 white">Contact Us</h2>
                <h6 class="card-subtitle mb-2 white">Have any queries?</h6>
                <p class="card-text white">
                  Feel free to send us a message on the contact form
                </p>
                <router-link to="/contact"
                  ><button class="btn1">Contact Us</button></router-link
                >
              </div>
            </div>
            <div class="card tipC cardLife">
              <div class="card-body">
                <h2 class="card-title white">Lift Off Life</h2>
                <h6 class="card-subtitle mb-2 white">
                  Looking for a personal trainer?
                </h6>
                <p class="card-text white">
                  Book a personal trainer to help you on your journey on the
                  following website!
                </p>
                <a href="#" class="card-link"
                  ><button class="btn1">More</button></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="Bmi" class="bmi">
      <div class="container-fluid">
        <h2 class="mt-4">CALCULATE YOUR BMI</h2>
        <p class="subT">Don't know you BMI? Calculate it down below!</p>
        <iframe
          src="https://rayhaan-bmicalculator.netlify.app/"
          frameborder="0"
          width="100%"
          height="500"
        ></iframe>
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
.carousel-item {
  height: 86vh;
}

.cImg {
  height: 86vh;
  object-fit: cover;
}

.carouselHeading {
  font-weight: 800;
  text-shadow: 2px 3px #000407;
}

.carouselText {
  font-weight: 600;
  font-size: 1.2rem;
  text-shadow: 2px 2px #000407;
}

.btn1 {
  background-color: #edb518;
  color: #79031d;
  padding: 0.7rem;
  width: 14rem;
  border: none;
}

.specificBtn {
  background-color: #edb518;
  color: #79031d;
  padding: 0.7rem;
  width: 14rem;
  border: none;
}

.specificBtn:hover {
  background-color: #79031d;
  color: #edb518;
}

.welcome {
  font-family: "Broad Daylight", sans-serif;
  font-size: 2.3rem;
}

h2 {
  color: #79031d;
  font-family: "Broad Daylight", sans-serif;
  font-weight: 800;
}

.background {
  background-color: rgba(0, 0, 0, 0.466);
}
.subT {
  color: #000407;
}

.btn1:hover {
  background-color: #79031d;
  color: #edb518;
}

.category {
  height: max-content;
}
.cardL-container {
  width: 400px;
  height: 360px;
  position: relative;
}

.cardL-container::before {
  z-index: -1;
  position: absolute;
  transform: translate3d(0, 0, 0) scale(0.95);
  filter: blur(20px);
}

.cardL {
  width: 100%;
  height: 100%;
  border-radius: inherit;
  overflow: hidden;
}

.cardL .img-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: scale 0.6s, rotate 0.6s, filter 1s;
  fill: #e8e8e8;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.img-content img {
  width: 400px;
  height: 360px;
  object-fit: cover;
}

.cardL .content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #f5f7f7;
  padding: 20px;
  line-height: 1.5;
  border-radius: 5px;
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.cardL .content .heading {
  font-size: 32px;
  font-weight: 800;
}

.cardL:hover .content {
  opacity: 1;
}

.cardL:hover .img-content {
  scale: 2.5;
  filter: blur(7px);
  fill: transparent;
}

.tipContainer {
  height: max-content;
}

.colT {
  display: flex;
}

.tipsC {
  display: flex;
  justify-content: center;
  height: 400px;
}

.tipC {
  width: 100%;
  height: 450px;
  border-radius: 0 !important;
}

.white {
  color: #f5f7f7 !important;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: end;
}

.cardLife {
  background-image: url(https://i.postimg.cc/PJqYdhgj/Daniel-Gallego-1.png);
  background-size: cover;
  background-position: center;
}

.cardContact {
  background-image: url(https://i.postimg.cc/ZKR3j6Yg/clem-onojeghuo-7q5ob-KSOKDk-unsplash.jpg);
  background-size: cover;
  background-position: center;
}

.cardAbout {
  background-image: url(https://i.postimg.cc/ryHNthMs/sven-mieke-j-O6v-BWX9h9-Y-unsplash.jpg);
  background-size: cover;
  background-position: center;
}

.bmi {
  height: max-content;
}

@media (max-width: 992px) {
  .colT {
    display: flex;
    flex-direction: column !important;
  }

  .tips {
    height: max-content;
  }

  .welcome {
  font-size: 2rem;
}

.carouselText {
  font-size: 1rem;
}

.btn1 {
  padding: 0.5rem;
  width: 10rem;
}

}
@media (max-width: 850px) {
  .cImg {
    height: auto !important;
  }

  .carousel-item {
    height: auto;
  }
  .welcome {
  font-size: 1.2rem;
}

.carouselText {
  font-size: 1rem;
}

.btn1 {
  width: 8rem;
  font-size: 1rem;
}
}

@media (max-width: 550px) {
  .welcome {
  font-size: 0.9rem;
}

.carouselText {
  font-size: 0.8rem;
}

.btn1 {
  padding: 0.3rem;
  width: 8rem;
  font-size: 0.8rem;
}
}

@media (max-width: 425px) {
  .cardS {
    width: 290px;
  }

  .cardS-info {
    color: #edb518;
  }

  .img-content img {
    width: 100%;
    height: 360px;
    object-fit: cover;
  }

  .cardL-container {
    width: 100%;
    height: 360px;
    position: relative;
  }

  .welcome {
  font-size: 0.8rem;
  text-shadow: none;
}

.carouselText {
  font-size: 0.5rem;
  text-shadow: none;
}

.btn1 {
  padding: 0.3rem;
  width: 5rem;
  font-size: 0.6rem;
}
}
@media (max-width: 320px) {
  .cardS {
    width: 270px;
  }
}
</style>
