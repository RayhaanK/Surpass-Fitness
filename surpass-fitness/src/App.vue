<template>
  <Navbar/>
  <router-view/>
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
</style>

<script>
import Navbar from "@/components/NavBarComp.vue"
export default {
  components: {
    Navbar
  }
}
</script>