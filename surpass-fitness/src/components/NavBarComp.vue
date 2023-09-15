<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"
        ><img
          src="https://i.postimg.cc/XY3gGsCQ/image-1-removebg-preview.png"
          alt="Surpass Fitness"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="d-lg-flex justify-content-end collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page"
              >Home</router-link
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              About
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link to="/about" v-scroll-to="'#AboutUs'" class="dropdown-item"
                  >About Us</router-link
                >
              </li>
              <li>
                <router-link to="/about" v-scroll-to="'#WhyChooseUs'" class="dropdown-item"
                  >Why Choose Us</router-link
                >
              </li>
              <li>
                <router-link to="/about" v-scroll-to="'#Team'" class="dropdown-item">The Team</router-link>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <router-link to="/about" v-scroll-to="'#Faqs'"  class="dropdown-item">FAQS</router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Products
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link to="/product" class="dropdown-item">Products</router-link>
              </li>
              <li>
                <router-link to="/treadmill" class="dropdown-item">Treadmills</router-link>
              </li>
              <li>
                <router-link to="/exercisebikes" class="dropdown-item">Exercise Bikes</router-link>
              </li>
              <li>
                <router-link to="/benches" class="dropdown-item">Benches</router-link>
              </li>
              <li>
                <router-link to="/yogamats" class="dropdown-item">Yoga Mats</router-link>
              </li>
              <li>
                <router-link to="/weights" class="dropdown-item">Weights</router-link>
              </li>
              <li>
                <router-link to="/dumbbells" class="dropdown-item">Dumbbells</router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact Us</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin" class="nav-link"  v-if="user ? user.userRole === 'admin' : null">Admin</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="nav-link"
              ><i class="bi bi-cart4"></i
            ></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/user" class="nav-link"
              ><i class="bi bi-person-circle"></i
            ></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link"
              >Register</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link"
              >Login</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import {useCookies} from 'vue3-cookies'
const { cookies } = useCookies()
export default {
  computed: {
    user() {
      return this.$store.state.user || cookies.get('LegitUser')
    },
    result() {
      return this.user?.result
    },
    isAdmin() {
      console.log(this.result);
      console.log(this.result?.userRole);
      return this.result?.userRole?.toLowerCase() === "admin"
    },
    hasCookie() {
      return cookies.get("LegitUser") !== null
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: #000407;
}

li {
  padding-right: 0.9rem;
}

i {
  color: #f5f7f7;
  font-size: 1.4rem !important;
}

i:hover {
  color: #79031d;
}

.dropdown-item {
  color: #000407 !important;
}
.dropdown-item:hover {
  color: #79031d !important;
}

img {
    width: 12rem;
}
</style>
