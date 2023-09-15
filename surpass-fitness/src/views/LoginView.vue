<template>
  <div>
    <section id="Login" class="login">
      <div class="container-fluid">
        <div class="loginForm p-4">
          <h2>LOGIN!</h2>
          <form @submit.prevent="login">
            <div class="mb-4 mt-5">
              <label for="exampleFormControlInput1" class="form-label"
                >Email address</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                v-model="payload.userEmail"
                required
              />
            </div>
            <div class="mb-3 mt-3">
              <label for="inputPassword5" class="form-label">Password</label>
              <input
                type="password"
                id="inputPassword5"
                class="form-control"
                aria-describedby="passwordHelpBlock"
                v-model="payload.userPass"
                required
              />
            </div>
            <div class="loginButton"><button type="submit" class="btn4">LOGIN</button></div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
export default {
  data() {
    return {
      payload: {
        userEmail: "",
        userPass: "",
      },
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    login() {
      this.$store.dispatch("loginUser", this.payload);
    },
    beforeCreate() {
      this.$store.dispatch("fetchUsers");
    },
    mounted() {
      console.log(cookies.get("LegitUser"));
    },
  },
};
</script>

<style scoped>
.login {
  height: 80vh;
}

.container-fluid {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

.loginForm {
  width: 70%;
  height: 50vh;
  border-radius: 25px;
  background-color: #79031d;
}

h2,
h3,
h4,
h5,
label {
  color: #f5f7f7 !important;
}

.btn4 {
  border: none;
  width: 7rem;
  padding: 0.2rem;
  background-color: #edb518;
  color: #79031d;
}
.btn4:hover {
  transform: scale(1.1);
  transition: ease-out 0.2s;
}
</style>
