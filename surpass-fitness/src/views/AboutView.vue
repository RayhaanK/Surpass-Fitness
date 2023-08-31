<template>
  <div>
    <section id="AboutUs" class="aboutUs">
      <div class="container-fluid aboutContain mt-md-4 mt-0">
        <div class="card mt-5 mt-md-0">
          <div class="row g-0">
            <div class="col-md-4 d-flex justify-content-center">
              <img
                src="https://i.postimg.cc/hPCbBYcr/danielle-cerullo-CQf-Nt66tt-ZM-unsplash.jpg"
                class="d-block img-fluid ourImage"
                loading="lazy"
                alt="..."
              />
            </div>
            <div class="col-md-8 colText">
              <div class="card-body">
                <h2 class="card-title">OUR STORY</h2>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                  dolor! Doloremque blanditiis magnam voluptatum obcaecati at
                  dolorem et tenetur ut dolor dolorum? Reiciendis veniam,
                  voluptatem minus exercitationem saepe nulla provident? Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Nam
                  accusantium facere, incidunt tenetur maiores possimus
                  voluptatibus perferendis fuga, ex ut aliquam veniam, porro
                  beatae amet soluta! Veniam doloremque voluptatibus iste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="WhyChooseUs" class="choose mt-5">
      <div class="container mt-3">
        <h2>WHY CHOOSE US</h2>
      </div>
      <div class="container mt-5 mb-3">
        <div class="row row-cols-1 row-cols-lg-3">
          <div class="col colChoice g-4">
            <div class="card cardChoice" style="width: 18rem">
                <h2 class="card-title headgingChoice p-4">
                    <i class="bi bi-bicycle"></i> Delivery
                </h2>
                <div class="card-body mb-5">
                <h6 class="card-subtitle mb-2 textChoice">
                  Card subtitle
                </h6>
                <p class="card-text textChoice">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="col colChoice g-4">
            <div class="card cardChoice" style="width: 18rem">
                <h2 class="card-title headgingChoice p-4">
                    <i class="bi bi-emoji-smile"></i> Commitment
                </h2>
                <div class="card-body mb-5">
                <h6 class="card-subtitle mb-2 textChoice">
                  Card subtitle
                </h6>
                <p class="card-text textChoice">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="col colChoice g-4">
            <div class="card cardChoice" style="width: 18rem">
                <h2 class="card-title headgingChoice p-4">
                    <i class="bi bi-credit-card"></i> Cash-Back
                </h2>
                <div class="card-body mb-5">
                <h6 class="card-subtitle mb-2 textChoice">
                  Card subtitle
                </h6>
                <p class="card-text textChoice">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
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
.aboutUs {
  height: 70vh;
  display: flex;
  justify-content: center;
}

.aboutContain {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  border: none;
}

.choose {
  height: max-content;
}

.cardChoice {
  background-color: #79031d;
  height: 19rem;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: end ;
}

.headgingChoice {
  color: #edb518 !important;
  border-bottom: 1px #edb518 !important;
  font-size: 1.8rem;
}
.textChoice {
  color: #f5f7f7 !important;
}

.colChoice {
  display: flex;
  justify-content: center;
  align-content: center;
}

@media (max-width: 768px) {
  .aboutUs {
    height: 100vh;
  }

  .ourImage {
    width: 33rem;
  }
}
</style>
