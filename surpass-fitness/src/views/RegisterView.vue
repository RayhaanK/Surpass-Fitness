<template>
  <div>
    <section id="register" class="register">
      <div class="container-fluid d-flex g-0">
        <div class="left p-3">
          <div class="welcome">
            <h2 class="mb-5">WELCOME BACK!</h2>
            <h4 class="mb-3">Have an account already?</h4>
            <h5 class="mb-4">Login!</h5>
            <router-link to="/login"><button>LOGIN</button></router-link>
          </div>
        </div>
        <div class="right mt-4 mx-auto p-4">
          <div class="container-fluid registerForm">
            <h2>REGISTER!</h2>
            <h5>SIGN UP FOR AN ACCOUNT NOW!</h5>
            <form @submit.prevent="register">
              <div class="mb-3">
                <label for="firstName" class="form-label"
                  >First Name</label
                >
                <input
                  type="name"
                  class="form-control"
                  id="firstName"
                  placeholder="First Name"
                  v-model="payload.firstName"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="lastName" class="form-label"
                  >Last Name</label
                >
                <input
                  type="surname"
                  class="form-control"
                  id="lastName"
                  placeholder="Last Name"
                  v-model="payload.lastName"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="age" class="form-label"
                  >Age</label
                >
                <input
                  type="age"
                  class="form-control"
                  id="age"
                  placeholder="Age"
                  v-model="payload.userAge"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="gender" class="form-label"
                  >Gender</label
                >
                <input
                  type="gender"
                  class="form-control"
                  id="gender"
                  placeholder="email@gmail.com"
                  v-model="payload.gender"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="emailAddress" class="form-label"
                  >Email Adress</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="emailAddress"
                  placeholder="email@gmail.com"
                  v-model="payload.userEmail"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="userPass" class="form-label">Password</label>
                <input
                  type="password"
                  id="userPass"
                  class="form-control"
                  minlength = "5"
                  maxlength = "12"
                  aria-describedby="passwordHelpBlock"
                  v-model="payload.userPass"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="userImage" class="form-label"
                  >Profile Image Link</label
                >
                <input
                  type="link"
                  class="form-control"
                  id="userImage"
                  placeholder="postimages"
                  v-model="payload.userImage"
                  required
                />
              </div>
              <div class="signUp">
                <button type="submit">SIGN UP</button>
              </div>
            </form>
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
      payload: {
        firstName: "",
        lastName: "",
        userAge: null,
        gender: "",
        userEmail: "",
        userPass: "",
        userImage: "",
      },
    };
  },
  methods: {
    register() {
        this.$store.dispatch('registerUser', this.payload)
    }
  }
};
</script>

<style scoped>
.register {
  height: 120vh;
}

h2,
h3,
h4,
h5,
label {
  color: #f5f7f7 !important;
}

.left {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  background-color: #79031d;
  height: 120vh;
}

.right {
  width: 60%;
  background-color: #79031d;
  border-radius: 25px;
  height: max-content;
}

.registerForm {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

input {
  width: 40rem;
}
</style>
