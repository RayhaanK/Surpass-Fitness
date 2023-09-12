<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col" :user="user" :key="user.userID">
          <div class="card" style="width: 18rem">
            <img :src="user.userImage" class="card-img-top" :alt="user.firstName" />
            <div class="card-body">
              <h5 class="card-title">{{ user.firstName }} {{ user.lastName }}</h5>
              <p class="card-text">
                {{ user.userAge }} <br> {{ user.gender }} <br> {{ user.userRole }} <br> {{ user.userEmail }}
              </p>
              <button @click.prevent="logout()">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
export default {
  computed: {
    user() {
      return this.$store.state.user || cookies.get("LegitUser").result;
    },
  },
  methods: {
    logout() {
        cookies.remove("LegitUser")
        router.push({ name: "login" });
    }
  }
};
</script>

<style scoped></style>
