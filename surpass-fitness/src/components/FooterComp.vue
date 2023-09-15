<template>
  <div>
    <div class="container-fluid">
      <footer
        class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 border-top"
      >
        <div class="col mb-3">
          <a
            href="/"
            class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
          >
          <img
          src="https://i.postimg.cc/XY3gGsCQ/image-1-removebg-preview.png"
          alt="Surpass Fitness"
      />
          </a>
          <p class="copyright">Copyright &copy; 2023| All rights reserved | Designed & Developed by Rayhaan Khan</p>
        </div>

        <div class="col mb-3"></div>

        <div class="col mb-3">
          <h5>Quick Links</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
                <router-link to="/" v-scroll-to="'#Home'" class="nav-link"
              >Home</router-link
            >
            </li>
            <li class="nav-item mb-2">
                <router-link to="/product" class="nav-link"
              >Products</router-link
            >
            </li>
          </ul>
        </div>

        <div class="col mb-3">
          <h5>About</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
                <router-link to="/about" v-scroll-to="'#AboutUs'" class="dropdown-item"
                  >About Us</router-link>
            </li>
            <li class="nav-item mb-2">
                <router-link to="/about" v-scroll-to="'#WhyChooseUs'" class="dropdown-item"
                  >Why Choose Us</router-link
                >
            </li>
            <li class="nav-item mb-2">
                <router-link to="/about" v-scroll-to="'#Team'" class="dropdown-item">The Team</router-link>
            </li>
          </ul>
        </div>

        <div class="col mb-3">
          <h5>Help</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
                <router-link to="/about" v-scroll-to="'#Faqs'" class="dropdown-item">FAQS</router-link>
            </li>
            <li class="nav-item mb-2">
                <router-link to="/contact"  v-scroll-to="'#contact'" class="nav-link">Contact Us</router-link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
img {
    width: 13rem;
}

.container-fluid {
    background-color: #000407;
}

.copyright {
    color: #f5f7f7;
}

a {
  font-weight: bold;
  color: #F5F7F7 !important;
  padding: 5px !important;
}

 a:hover {
  color: #79031D !important;
}

h5 {
  color: #79031D;
  font-weight: 800;
}

</style>
