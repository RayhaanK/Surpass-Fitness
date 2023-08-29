<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"
        ><img
          src="https://i.postimg.cc/BQzP1kZ6/surpass-Fitness-2.png"
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
                <router-link to="/about" class="dropdown-item"
                  >About Us</router-link
                >
              </li>
              <li>
                <router-link to="#" class="dropdown-item"
                  >Why Choose Us</router-link
                >
              </li>
              <li>
                <router-link to="#" class="dropdown-item">The Team</router-link>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <router-link to="#" class="dropdown-item">FAQS</router-link>
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
                <router-link to="#" class="dropdown-item">FAQS</router-link>
              </li>
              <li>
                <router-link to="#" class="dropdown-item">FAQS</router-link>
              </li>
              <li>
                <router-link to="#" class="dropdown-item">FAQS</router-link>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <router-link to="#" class="dropdown-item">FAQS</router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/a" class="nav-link">Contact Us</router-link>
          </li>
          <li class="nav-item">
            <router-link to="#" class="nav-link"
              ><i class="bi bi-cart4"></i
            ></router-link>
          </li>
          <li class="nav-item">
            <router-link to="#" class="nav-link"
              ><i class="bi bi-person-circle"></i
            ></router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
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
