<template>
  <Navbar/>
  <router-view/>
  <Footer/>
</template>

<style>
#app {
  font-family: Avenir, Public Sans;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a {
  font-weight: bold;
  color: #F5F7F7 !important;
  padding: 5px !important;
  font-size: 1.2rem !important;
}

nav a:hover {
  color: #79031D !important;
}

nav a.router-link-exact-active {
  color: #79031D !important;
}

h2 {
  color: #79031d !important;
  font-weight: 800 !important;
}
</style>

<script>
import Navbar from "@/components/NavBarComp.vue"
import Footer from "@/components/FooterComp.vue"
export default {
  components: {
    Navbar, Footer
  }
}
</script>