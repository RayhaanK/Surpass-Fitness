<template>
  <div>
    <section id="contact" class="contact">
      <div class="container">
        <h2 class="display-2">Contact us</h2>
        <div class="row justify-content-center">
          <div class="col">
            <div class="card card1 mx-auto p-4">
              <h2 class="white">Leave a Comment</h2>
              <form
                class="form"
                action="https://formspree.io/f/xeqbgzzq"
                method="POST"
              >
                <div class="group">
                  <input
                    placeholder=""
                    type="text"
                    required
                    oninvalid="this.setCustomValidity('Oops! Please Enter Your Name')"
                    oninput="this.setCustomValidity('')"
                  />
                  <label for="name">Name</label>
                </div>
                <div class="group">
                  <input
                    placeholder=""
                    type="email"
                    id="email"
                    name="email"
                    required
                    oninvalid="this.setCustomValidity('Oops! Please Enter Your Email')"
                    oninput="this.setCustomValidity('')"
                  />
                  <label for="email">Email</label>
                </div>
                <div class="group">
                  <textarea
                    placeholder=""
                    id="comment"
                    name="comment"
                    rows="5"
                    required
                    oninvalid="this.setCustomValidity('Oops! Please Enter Your Comment')"
                    oninput="this.setCustomValidity('')"
                  ></textarea>
                  <label for="comment">Comment</label>
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
          <div class="col col-sm d-flex justify-content-center">
            <div class="card inf1">
              <div class="container inf">
                <div class="vstack gap-2">
                  <div class="p-1">
                    <i class="bi bi-telephone inf2"><br />+27 12 345 6789</i>
                  </div>
                  <div class="p-1">
                    <i class="bi bi-envelope inf2"
                      ><br />
                      royalLux@gmail.com</i
                    >
                  </div>
                  <div class="p-1">
                    <i class="bi bi-house inf2"
                      ><br />
                      55 Motor Drive, Cape Town, <br />
                      South Africa</i
                    >
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
    height: 100vh;
}

.card1 {
  background-color: #79031D !important;
  border-radius: 10px;
  padding: 20px;
  width: 80%;
  display: flex;
  flex-direction: column;
  border-radius: 23px;
  transition: all 0.8s cubic-bezier(0.15, 0.83, 0.66, 1);
}

.white {
    color: #F5F7F7 !important;
}

.inf1 {
  width: 80%;
  height: 400px;
  border-radius: 23px;
  transition: all 0.8s cubic-bezier(0.15, 0.83, 0.66, 1);
}

.inf1:hover {
  transform: scale(1.05);
}

.inf2 {
  font-size: 2rem;
}

.inf {
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0.7);
}

.title {
  font-size: 27px;
  font-weight: 600;
  text-align: center;
}

.form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}

.group {
  position: relative;
}

 label {
  font-size: 16px;
  color: rgb(0, 0, 0);
  position: absolute;
  top: -10px;
  left: 10px;
  transition: all .3s ease;
}

 input, textarea {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  outline: 0;
  width: 100%;
}

input:placeholder-shown+label,
textarea:placeholder-shown+label {
  top: 10px;
}

input:focus, textarea:focus {
  border-color: #000000;
}

input:focus+label,
textarea:focus+label {
  top: -10px;
  left: 10px;
  color: #edb518;
  font-weight: 800;
  font-size: 1.2rem;
}

button {
  background-color: #000000;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  transition: all 0.3s ease;
}

button:hover {
  background-color: #ffffff;
  color: black;
  border: black 1px solid;
}

</style>
