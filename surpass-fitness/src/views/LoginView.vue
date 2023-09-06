<template>
  <div>
    <section id="Login" class="login">
      <div class="container-fluid">
        <div class="loginForm p-4">
          <h2>LOGIN!</h2>
          <form>
            <div class="mb-4 mt-5">
              <label for="exampleFormControlInput1" class="form-label"
                >Email address</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
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
                required
              />
            </div>
            <div class="loginBtn"><button>LOGIN</button></div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
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
</style>
