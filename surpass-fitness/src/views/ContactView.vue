<template>
  <div>
    <section id="contact" class="contact">
      <div class="container">
        <h2>Contact us</h2>
            <div class="card card1 mx-auto p-4">
              <h2 class="color">Leave a Comment</h2>
              <div
      class="container-fluid contactMe"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <form action="https://formspree.io/f/xyyaoapj" method="POST">
        <div class="mt-4">
          <label for="name" class="form-label white">First Name:</label>
          <input
            type="First Name"
            name="First Name"
            class="form-control"
            id="name"
            placeholder="Name"
            required
            oninvalid="this.setCustomValidity('Please Enter Your Name')"
            oninput="this.setCustomValidity('')"
          />
        </div>
        <div class="mt-4">
          <label for="surname" class="form-label white">Last Name:</label>
          <input
            type="Last Name"
            name="Last Name"
            class="form-control"
            id="surname"
            placeholder="Surname"
            required
            oninvalid="this.setCustomValidity('Please Enter Your Last Name')"
            oninput="this.setCustomValidity('')"
          />
        </div>
        <div class="mt-4">
          <label for="email" class="form-label white">Email address:</label>
          <input
            type="email"
            name="email"
            class="form-control"
            id="email"
            placeholder="name@example.com"
            required
            oninvalid="this.setCustomValidity('Please Enter Your Email')"
            oninput="this.setCustomValidity('')"
          />
        </div>
        <div class="mt-4">
          <label for="feedback" class="form-label white"
            >Please leave a message:</label
          >
          <textarea
            name="message"
            class="form-control"
            id="feedback"
            rows="3"
            required
            oninvalid="this.setCustomValidity('Please Enter Feedback')"
            oninput="this.setCustomValidity('')"
          ></textarea>
          <div class="btn0">
            <button class="formButton mt-3 btn1" type="submit">Send</button>
            <button class="formButton mt-3 btn2" type="reset">Clear</button>
          </div>
        </div>
      </form>
      <div class="cardContact d-flex justify-content-center align-items-center mt-5 mt-xl-0">
            <div class="card inf1">
              <div class="container inf">
                <div class="vstack gap-2">
                  <div class="p-1">
                    <i class="bi bi-telephone inf2"><br />+27 21 243 7899</i>
                  </div>
                  <div class="p-1">
                    <i class="bi bi-envelope inf2"
                      ><br />
                      surpassfitness@gmail.co.za</i
                    >
                  </div>
                  <div class="p-1">
                    <i class="bi bi-house inf2"
                      ><br />
                      2 Broadway Avenue, Cape Town, <br />
                      South Africa</i
                    >
                  </div>
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
export default {};
</script>

<style scoped>

.contact {
    min-height: 100vh;
}

form {
  width: 50%;
}
.contactMe {
  display: flex;
  align-items: center;
  justify-content: start;
}

.card {
  background-color: #79031d;
}

.color {
  color: #edb518 !important;
}

label {
  color: #84a7a1;
}

.btn0 {
  display: flex;
  justify-content: space-evenly;
}

.btn1,
.btn2 {
  padding: 0.3rem;
  border-radius: 1rem;
  border: none;
  width: 5rem;
  background-color: #edb518;
  color: #79031D;
}

.btn1:hover {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.7);
  transition: 0.2s;
  transform: scale(1.1);
}
.btn2:hover {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.7);
  transition: 0.2s;
  transform: scale(1.1);
}

.inf1 {
  background-color:#79031D ;
  color: #f5f7f7;
  width: 80%;
  height: 400px;
  border: 1px solid #F5F7F7;
  border-radius: 23px;
  transition: all 0.8s cubic-bezier(0.15, 0.83, 0.66, 1);
  display: flex;
  justify-content: center;
}

.inf1:hover {
  transform: scale(1.05);
}

.white {
    color: #F5F7F7 !important;
}

.cardContact {
  width: 50%;
}

@media (max-width: 1000px) {
  .contactMe {
    flex-direction: column;
  }

  form {
    width: 100%;
  }
  .cardContact {
  width: 100%;
}
}


@media (max-width: 370px) {
  .btn1 {
    margin-right: 0.3rem;
  }
}

</style>
